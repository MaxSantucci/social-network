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
      },
      deletePost: (state, action: PayloadAction<string>) => {
         const postId = action.payload
         state.profilePage.posts = state.profilePage.posts.filter(el => el.id !== postId)
      }
   }
})

export const { addPost, deletePost }  = profileSlice.actions

export default profileSlice.reducer;

