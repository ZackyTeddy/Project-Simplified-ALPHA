// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    DateTime: any,
    String: string,
    ID: string,
    Boolean: boolean,
}

export interface Mutation {
    createTeam: (Team | null)
    deleteTeam: (Team | null)
    updateTeam: (Team | null)
    __typename: 'Mutation'
}

export interface Query {
    getOneTeam: (Team | null)
    getTeams: ((Team | null)[] | null)
    __typename: 'Query'
}

export type SortOrder = 'asc' | 'desc'

export interface Team {
    active: (Scalars['Boolean'] | null)
    created_at: (Scalars['DateTime'] | null)
    leader: (Scalars['String'] | null)
    location: (Scalars['String'] | null)
    members: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    region: (Scalars['String'] | null)
    team_Id: (Scalars['ID'] | null)
    timeslot: (Scalars['String'] | null)
    __typename: 'Team'
}

export interface MutationGenqlSelection{
    createTeam?: (TeamGenqlSelection & { __args: {leader?: (Scalars['String'] | null), location?: (Scalars['String'] | null), name: Scalars['String'], timeslot?: (Scalars['String'] | null)} })
    deleteTeam?: (TeamGenqlSelection & { __args: {id: Scalars['ID']} })
    updateTeam?: (TeamGenqlSelection & { __args: {id: Scalars['ID'], leader?: (Scalars['String'] | null), name?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    getOneTeam?: (TeamGenqlSelection & { __args: {id: Scalars['String']} })
    getTeams?: (TeamGenqlSelection & { __args?: {sortBy?: (SortOrder | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface TeamGenqlSelection{
    active?: boolean | number
    created_at?: boolean | number
    leader?: boolean | number
    location?: boolean | number
    members?: boolean | number
    name?: boolean | number
    region?: boolean | number
    team_Id?: boolean | number
    timeslot?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const Team_possibleTypes: string[] = ['Team']
    export const isTeam = (obj?: { __typename?: any } | null): obj is Team => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTeam"')
      return Team_possibleTypes.includes(obj.__typename)
    }
    

export const enumSortOrder = {
   asc: 'asc' as const,
   desc: 'desc' as const
}
