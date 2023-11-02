// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    DateTime: any,
    Boolean: boolean,
    String: string,
    ID: string,
}

export interface Member {
    active: (Scalars['Boolean'] | null)
    created_at: (Scalars['DateTime'] | null)
    firstName: (Scalars['String'] | null)
    lastName: (Scalars['String'] | null)
    location: (Scalars['String'] | null)
    memberId: (Scalars['ID'] | null)
    region: (Scalars['String'] | null)
    role: (Scalars['String'] | null)
    teams: (Scalars['String'] | null)
    __typename: 'Member'
}

export interface Mutation {
    createMember: (Member | null)
    createTeam: (Team | null)
    deleteMember: (Member | null)
    deleteTeam: (Team | null)
    updateMember: (Member | null)
    updateTeam: (Team | null)
    __typename: 'Mutation'
}

export interface Query {
    getMembers: ((Member | null)[] | null)
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

export interface MemberGenqlSelection{
    active?: boolean | number
    created_at?: boolean | number
    firstName?: boolean | number
    lastName?: boolean | number
    location?: boolean | number
    memberId?: boolean | number
    region?: boolean | number
    role?: boolean | number
    teams?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createMember?: (MemberGenqlSelection & { __args: {firstName: Scalars['String'], lastName?: (Scalars['String'] | null), location?: (Scalars['String'] | null), region?: (Scalars['String'] | null), teams: Scalars['String']} })
    createTeam?: (TeamGenqlSelection & { __args: {leader?: (Scalars['String'] | null), location?: (Scalars['String'] | null), name: Scalars['String'], timeslot?: (Scalars['String'] | null)} })
    deleteMember?: (MemberGenqlSelection & { __args: {id: Scalars['ID']} })
    deleteTeam?: (TeamGenqlSelection & { __args: {id: Scalars['ID']} })
    updateMember?: (MemberGenqlSelection & { __args: {firstName?: (Scalars['String'] | null), id: Scalars['ID'], lastName?: (Scalars['String'] | null), location?: (Scalars['String'] | null), region?: (Scalars['String'] | null)} })
    updateTeam?: (TeamGenqlSelection & { __args: {id: Scalars['ID'], leader?: (Scalars['String'] | null), name?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    getMembers?: (MemberGenqlSelection & { __args: {id: Scalars['String']} })
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


    const Member_possibleTypes: string[] = ['Member']
    export const isMember = (obj?: { __typename?: any } | null): obj is Member => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMember"')
      return Member_possibleTypes.includes(obj.__typename)
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
