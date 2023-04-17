export type PostsType = {
   id: string
   message: string
   likesCount: number
}

export type ProfilePageType = {
   posts: PostsType[]
}

export type ProfileState = {
   profilePage: ProfilePageType
}

