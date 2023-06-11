import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostsType, ProfileState, ProfileUsersType} from './type';

const initialState: ProfileState = {
   profilePage: {
      posts: [
         {id: v1(), message: 'Hi my name Derek', likesCount: 110},
         {id: v1(), message: 'My first post', likesCount: 150}
      ],
   },
   profileData: {
      aboutMe: '',
      contacts: {
         facebook: '',
         website: '',
         vk: '',
         twitter: '',
         instagram: '',
         youtube: '',
         github: '',
         mainLink: '',
      },
      lookingForAJob: false,
      lookingForAJobDescription: '',
      fullName: '',
      userId: 0,
      photos: {
         small: '',
         large: '',
      }
   },
   status: 'idle',
   error: null,
   isFetching: false
}

const profileSlice = createSlice({
   name: 'profile',
   initialState,
   reducers: {
      addPost: (state, action: PayloadAction<string>) => {
         let newPost: PostsType = {
            id: v1(),
            message: action.payload,
            likesCount: 0
         }
         state.profilePage.posts = [newPost, ...state.profilePage.posts]
      },
      deletePost: (state, action: PayloadAction<string>) => {
         const postId = action.payload
         state.profilePage.posts = state.profilePage.posts.filter(el => el.id !== postId)
      },
      toggleIsFetching: (state, action: PayloadAction<boolean>) => {
         state.isFetching = action.payload
      },
      setUserProfile: (state, action: PayloadAction<ProfileUsersType>) => {
         state.profileData = action.payload;
      },
   },
   extraReducers: (builder) => {
      // builder
      //    .addCase(fetchProfileUsers.pending, (state) => {
      //       state.status = 'loading';
      //       state.error = null;
      //       state.isFetching = true; // Uncomment this line
      //    })
      //    .addCase(fetchProfileUsers.fulfilled, (state, action: PayloadAction) => {
      //       state.status = 'succeeded';
      //       state.isFetching = false; // Uncomment this line
      //    })
      //    .addCase(fetchProfileUsers.rejected, (state, action) => {
      //       state.status = 'failed';
      //       state.error = action.error.message ?? 'Something went wrong';
      //       state.isFetching = false; // Uncomment this line
      //    })
   }
})

export const { addPost, deletePost, toggleIsFetching, setUserProfile }  = profileSlice.actions

export default profileSlice.reducer;

