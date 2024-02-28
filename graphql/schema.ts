import { makeSchema, queryType, mutationType, asNexusMethod, objectType, enumType, arg, nonNull, stringArg, idArg, list } from "nexus";
import { DateTimeResolver, JSONResolver } from 'graphql-scalars'
import { GraphQLScalarType } from 'graphql'

import * as path from 'path'

//Helper Methods
const DateTime = asNexusMethod(DateTimeResolver, 'DateTime');
const JSON = asNexusMethod(JSONResolver, 'JSON')
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

        t.list.field('getMembers', {
            type: 'Member',
            args: {
                id: nonNull(stringArg()),
                sortBy: arg({ type: 'SortOrder'})
            },
            resolve: async (_, args, ctx) => {
                try {
                    return ctx.db.members.findMany({ where: { teams: args.id } })
                } catch (error) {
                    throw new Error(`${error}`)
                }
            }
        })

        t.list.field('getLayouts', {
            type: 'Layout',
            args: {
                sortBy: arg({ type: 'SortOrder' }),
            },
            resolve: async (_, args, ctx) => {
                return ctx.db.layouts.findMany({
                    orderBy: { created_at: args.sortBy || undefined }
                })
            }
        })

        t.field('getOneLayout', {
            type: 'Layout',
            args: {
                id: nonNull(stringArg())
            },
            resolve: async (_, args, ctx) => {
                try {
                    return ctx.db.layouts.findUnique({ where: { layoutId: args.id } })
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

        t.field('createMember', {
            type: 'Member',
            args: {
                firstName: nonNull(stringArg()),
                lastName: stringArg(),
                location: stringArg(),
                region: stringArg(),
                teams: nonNull(stringArg())
                },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.members.create({
                    data: {
                        firstName: args.firstName,
                        lastName: args.lastName || undefined,
                        location: args.location || undefined,
                        region: args.region || undefined,
                        teams: args.teams
                    }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('updateMember', {
            type: 'Member',
            args: {
                id: nonNull(idArg()),
                firstName: stringArg(),
                lastName: stringArg(),
                location: stringArg(),
                region: stringArg(),
                roles: nonNull(list(nonNull(stringArg()))),
                status: stringArg()
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.members.update({
                    where: { memberId: args.id },
                    data: {
                        firstName: args.firstName || undefined,
                        lastName: args.lastName || undefined,
                        location: args.location || undefined,
                        region: args.region || undefined,
                        roles: args.roles || null,
                        status: args.status || undefined
                    }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('deleteMember', {
            type: 'Member',
            args: {
                id: nonNull(idArg())
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.members.delete({
                    where: { memberId: args.id }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('createLayout', {
            type: 'Layout',
            args: {
                name: nonNull(stringArg()),
                location: stringArg(),
                },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.layouts.create({
                    data: {
                        metadata: {
                            name: args.name,
                            location: args.location
                        }
                    }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('updateLayout', {
            type: 'Layout',
            args: {
                id: nonNull(idArg()),
                metadata: arg({type: "JSON"}),
                blueprint: nonNull(list(nonNull(arg({type: "JSON"})))),
                positions: nonNull(list(nonNull(arg({type: "JSON"})))),
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.layouts.update({
                    where: { layoutId: args.id },
                    data: {
                        metadata: args.metadata,
                        blueprint: args.blueprint,
                        positions: args.positions
                    }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })

        t.field('deleteLayout', {
            type: 'Layout',
            args: {
                id: nonNull(idArg())
            },
            resolve: (_, args, ctx) => {
                try {
                    return ctx.db.layouts.delete({
                    where: { layoutId: args.id }
                    })
                } catch (error) {
                    throw Error(`${error}`)
                }
            }
        })
    }
})

// TODO  Refactor team_Id to teamId for naming convention consistencies
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

const Member = objectType({
    name: 'Member',
    definition(t) {
        t.id('memberId')
        t.string('firstName')
        t.string('lastName')
        t.string('location')
        t.string('region')
        t.string('status')
        t.string('teams')
        t.list.string('roles')
        t.DateTime('created_at')
    },
})

const Layout = objectType({
    name: 'Layout',
    definition(t) {
        t.id('layoutId')
        t.JSON('metadata')
        t.list.JSON('blueprint')
        t.list.JSON('positions')
        t.DateTime('created_at')
    },
})


// Make Schema
export const schema = makeSchema({
    types: [
        Query,
        Mutation,
        DateTime,
        JSON,
        SortOrder,
        Team,
        Member,
        Layout
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