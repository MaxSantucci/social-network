import {v1} from 'uuid';

const ADD_POST = 'ADD-POST'

export const profileReducer = (state: any, action: any) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {id: v1(), message: action.post, likesCount: 0}
         let newPosts = [newPost, state.profilePage.posts]
         let newState = {
            state,
            profilePage: {
               ...state.profilePage,
               posts: newPosts
            }
         }
         state = newState
         break;
   }

   return state
}

export let addPostActionCreator = (post: string) => ({type: ADD_POST, post: post} as const)