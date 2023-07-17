export type PostsType = {
   id: string
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: PostsType[]
}

export type ProfileUsersType = {
   data: any
   aboutMe: string
   contacts: {
      facebook: string | undefined
      website: string | undefined
      twitter: string | undefined
      instagram: string | undefined
      youtube: string | undefined
      github: string | undefined
      mainLink: string | undefined
      vk: string | undefined
   },
   lookingForAJob: boolean
   lookingForAJobDescription: string
   fullName: string
   userId: string
   photos: {
      small: string
      large: string
   }
}

export type ProfileState = {
   profilePage: ProfilePageType
   myProfileData: ProfileUsersType
   profileData: ProfileUsersType
   statusLoading: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null
   isFetching: boolean
   status: string | undefined
}

export type ProfileParams = {
   userId: string | undefined
}
