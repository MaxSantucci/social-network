import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostsType, ProfileState} from './type';

// const ADD_POST = 'ADD-POST'

const initialState: ProfileState = {
   profilePage: {
      posts: [
         {id: v1(), message: 'Hi my name Derek', likesCount: 110},
         {id: v1(), message: 'My first post', likesCount: 150}
      ],
   },
}

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      addPost: (state, action: PayloadAction<string>) => {
         let newPost: PostsType = {id: v1(), message: action.payload, likesCount: 0}
         state.profilePage.posts = [newPost, ...state.profilePage.posts]
      }
   }
})

export const { addPost }  = profileSlice.actions

export default profileSlice.reducer;

// export let addPostActionCreator = (post: string) => ({type: ADD_POST, post: post} as const)
// switch (action.type) {
//    case ADD_POST:
//       let newPost = {id: v1(), message: action.post, likesCount: 0}
//       let newPosts = [newPost, state.profilePage.posts]
//       let newState = {
//          state,
//          profilePage: {
//             ...state.profilePage,
//             posts: newPosts
//          }
//       }
//       state = newState
//       break;
// }
//
// return state