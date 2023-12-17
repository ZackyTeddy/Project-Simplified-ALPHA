// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    DateTime: any,
    JSON: any,
    ID: string,
    Boolean: boolean,
    String: string,
}

export interface Layout {
    blueprint: ((Scalars['JSON'] | null)[] | null)
    created_at: (Scalars['DateTime'] | null)
    layoutId: (Scalars['ID'] | null)
    metadata: (Scalars['JSON'] | null)
    positions: ((Scalars['JSON'] | null)[] | null)
    __typename: 'Layout'
}

export interface Member {
    active: (Scalars['Boolean'] | null)
    created_at: (Scalars['DateTime'] | null)
    firstName: (Scalars['String'] | null)
    lastName: (Scalars['String'] | null)
    location: (Scalars['String'] | null)
    memberId: (Scalars['ID'] | null)
    region: (Scalars['String'] | null)
    roles: ((Scalars['String'] | null)[] | null)
    teams: (Scalars['String'] | null)
    __typename: 'Member'
}

export interface Mutation {
    createLayout: (Layout | null)
    createMember: (Member | null)
    createTeam: (Team | null)
    deleteLayout: (Layout | null)
    deleteMember: (Member | null)
    deleteTeam: (Team | null)
    updateLayout: (Layout | null)
    updateMember: (Member | null)
    updateTeam: (Team | null)
    __typename: 'Mutation'
}

export interface Query {
    getLayouts: ((Layout | null)[] | null)
    getMembers: ((Member | null)[] | null)
    getOneLayout: (Layout | null)
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

export interface LayoutGenqlSelection{
    blueprint?: boolean | number
    created_at?: boolean | number
    layoutId?: boolean | number
    metadata?: boolean | number
    positions?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MemberGenqlSelection{
    active?: boolean | number
    created_at?: boolean | number
    firstName?: boolean | number
    lastName?: boolean | number
    location?: boolean | number
    memberId?: boolean | number
    region?: boolean | number
    roles?: boolean | number
    teams?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationGenqlSelection{
    createLayout?: (LayoutGenqlSelection & { __args: {location?: (Scalars['String'] | null), name: Scalars['String']} })
    createMember?: (MemberGenqlSelection & { __args: {firstName: Scalars['String'], lastName?: (Scalars['String'] | null), location?: (Scalars['String'] | null), region?: (Scalars['String'] | null), teams: Scalars['String']} })
    createTeam?: (TeamGenqlSelection & { __args: {leader?: (Scalars['String'] | null), location?: (Scalars['String'] | null), name: Scalars['String'], timeslot?: (Scalars['String'] | null)} })
    deleteLayout?: (LayoutGenqlSelection & { __args: {id: Scalars['ID']} })
    deleteMember?: (MemberGenqlSelection & { __args: {id: Scalars['ID']} })
    deleteTeam?: (TeamGenqlSelection & { __args: {id: Scalars['ID']} })
    updateLayout?: (LayoutGenqlSelection & { __args: {blueprint: Scalars['JSON'][], id: Scalars['ID'], metadata?: (Scalars['JSON'] | null), positions: Scalars['JSON'][]} })
    updateMember?: (MemberGenqlSelection & { __args: {firstName?: (Scalars['String'] | null), id: Scalars['ID'], lastName?: (Scalars['String'] | null), location?: (Scalars['String'] | null), region?: (Scalars['String'] | null), roles: Scalars['String'][]} })
    updateTeam?: (TeamGenqlSelection & { __args: {id: Scalars['ID'], leader?: (Scalars['String'] | null), name?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryGenqlSelection{
    getLayouts?: (LayoutGenqlSelection & { __args?: {sortBy?: (SortOrder | null)} })
    getMembers?: (MemberGenqlSelection & { __args: {id: Scalars['String']} })
    getOneLayout?: (LayoutGenqlSelection & { __args: {id: Scalars['String']} })
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


    const Layout_possibleTypes: string[] = ['Layout']
    export const isLayout = (obj?: { __typename?: any } | null): obj is Layout => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLayout"')
      return Layout_possibleTypes.includes(obj.__typename)
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
