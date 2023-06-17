export type UsersType = {
   id: number
   name: string
   followed: boolean
   uniqueUrlName: string
   avatar: string
   status: string
}

export type UsersPageType = {
   items: UsersType[]
   currentPage: number
   isFetching: boolean
   totalCount: number
}

export type UsersState = {
   usersPage: UsersPageType
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null
   followingInProgress: number[]
}

export type UsersParams = {
   currentPage: string
   pageSize: number
}

export type UserFollowType = {
   userId: number
}


