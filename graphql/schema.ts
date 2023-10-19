import { makeSchema, queryType, mutationType, asNexusMethod, objectType, enumType, arg, nonNull, stringArg, idArg } from "nexus";
import { DateTimeResolver } from 'graphql-scalars'
import * as path from 'path'

//Helper Methods
const DateTime = asNexusMethod(DateTimeResolver, 'DateTime');
const SortOrder = enumType({
    name: "SortOrder",
    members: ["asc", "desc"]
})

//Query methods
const Query = queryType({
    definition(t) {
        t.list.field('getTeams', {
            type: 'Team',
            args: {
                sortBy: arg({ type: 'SortOrder' }),
            },
            resolve: async (_, args, ctx) => {
                return ctx.db.teams.findMany({
                    orderBy: { timeslot: args.sortBy || undefined }
                })
            }
        })

        t.field('getOneTeam', {
            type: 'Team',
            args: {
                id: nonNull(stringArg())
            },
            resolve: async (_, args, ctx) => {
                try {
                    return ctx.db.teams.findUnique({ where: { team_Id: args.id } })
                } catch (error) {
                    throw new Error(`${error}`)
                }
            }
        })
    }
})

//Mutation methods
const Mutation = mutationType({
    definition(t) {
        t.field('createTeam', {
            type: 'Team',
            args: {
                name: nonNull(stringArg()),
                timeslot: stringArg(),
                leader: stringArg(),
                location: stringArg(),
                },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.teams.create({
                    data: {
                        name: args.name,
                        timeslot: args.timeslot || undefined,
                        leader: args.leader || undefined,
                        location: args.location || undefined,
                    }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('updateTeam', {
            type: 'Team',
            args: {
                id: nonNull(idArg()),
                name: stringArg(),
                leader: stringArg(),
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.teams.update({
                    where: { team_Id: args.id },
                    data: {
                        name: args.name || undefined,
                        leader: args.leader || undefined,
                    }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('deleteTeam', {
            type: 'Team',
            args: {
                id: nonNull(idArg())
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.teams.delete({
                    where: { team_Id: args.id }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })
    }
})

//Object Types
const Team = objectType({
    name: 'Team',
    definition(t) {
        t.id('team_Id')
        t.string('name')
        t.string('timeslot')
        t.string('leader')
        t.string('location')
        t.string('region')
        t.boolean('active')
        t.string('members')
        t.DateTime('created_at')
    },
})


// Make Schema
export const schema = makeSchema({
    types: [
        Query,
        Mutation,
        DateTime,
        SortOrder,
        Team
        ],
    outputs: {
        schema: path.join(process.cwd(), 'graphql/schema.graphql'),
        typegen: path.join(process.cwd(), 'graphql/generated/nexus.d.ts'),
    },
    contextType: {
        module: path.join(process.cwd(), 'graphql/context.ts'),
        export: 'Context'
    },
    sourceTypes: {
        modules: [
        {
            module: '@prisma/client',
            alias: 'db'
        }
        ]
        }
})

