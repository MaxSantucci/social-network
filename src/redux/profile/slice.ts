import {v1} from 'uuid';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostsType, ProfileState} from './type';
import {profileUsersAPI, usersAPI} from '../../api/httpClientRequest';

export type ProfileUserType = {
   userId: string
}

export const fetchSetFollow = createAsyncThunk<{}, ProfileUserType>(
   'users/follow', async (params) => {
      return await profileUsersAPI.setFollow(params.userId)
   }
);

export const fetchSetUnfollow = createAsyncThunk<{}, ProfileUserType>(
   'users/unfollow',
   async (params) => {
      return await profileUsersAPI.setUnfollow(params.userId)
   }
);


const initialState: ProfileState = {
   profilePage: {
      posts: [
         {id: v1(), message: 'Hi my name Derek', likesCount: 110},
         {id: v1(), message: 'My first post', likesCount: 150}
      ],
   },
   status: 'idle',
   error: null
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
      },
      // setFollow: (state, action: PayloadAction<string>) => {
      //    const userId = action.payload;
      //    const user = state.profilePage.posts.find((post) => post.id === userId);
      //    if (user) {
      //       user.followed = true;
      //    }
      // }
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSetFollow.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchSetFollow.fulfilled, (state) => {
            state.status = 'succeeded';
            // Handle success if needed
         })
         .addCase(fetchSetFollow.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Something went wrong';
            // Handle error if needed
         })
         .addCase(fetchSetUnfollow.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchSetUnfollow.fulfilled, (state) => {
            state.status = 'succeeded';
            // Handle success if needed
         })
         .addCase(fetchSetUnfollow.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Something went wrong';
            // Handle error if needed
         });
   },
   // extraReducers: (builder) => {
   //    builder
   //       .addCase(fetchProfile.pending, (state) => {
   //          state.status = 'loading';
   //       })
   //       .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<ProfileUsersType>) => {
   //          state.status = 'succeeded';
   //          state.profileUsers = action.payload;
   //       })
   //       .addCase(fetchProfile.rejected, (state, action) => {
   //          state.status = 'failed';
   //          state.error = action.error.message ?? 'Something went wrong';
   //       });
   // }
})

export const { addPost, deletePost }  = profileSlice.actions

export default profileSlice.reducer;

