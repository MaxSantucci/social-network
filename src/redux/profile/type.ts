export type PostsType = {
   id: string
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: PostsType[]
}

export type ProfileUsersType = {
   aboutMe: string,
   // contacts: {
      facebook: string,
      website: string,
      vk: string,
      twitter: string,
      instagram: string,
      youtube: string,
      github: string,
      mainLink: string
   // },
   lookingForAJob: boolean,
   lookingForAJobDescription: string,
   fullName: string,
   userId: number,
}

export type ProfileState = {
   profilePage: ProfilePageType
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null
}


