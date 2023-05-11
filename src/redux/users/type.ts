export type LocationUserType = {
   city: string
   country: string
}

export type UsersType = {
   id: string
   name: string
   followed: boolean
   uniqueUrlName: string
   avatar: string
   status: string
   // id: string
   // followed: boolean
   // avatar: string
   // firstName: string
   // lastName: string
   // position: string
   // location: LocationUserType
   // photos: {
   //    small: string
   //    large: string
   // }
}

export type UsersPageType = {
   users: UsersType[]
   currentPage: number
   isFetching: boolean
   totalCount: number
}

export type UsersState = {
   usersPage: UsersPageType
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null
}

export type UsersParams = {
   currentPage: string
}



