import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PostsType, ProfileState, ProfileUsersType} from './type';

const initialState: ProfileState = {
   profilePage: {
      posts: [
         {
            id: v1(),
            message: 'Recursion is a powerful concept in JavaScript programming that allows a function to call itself. It can be used to solve complex problems by breaking them down into smaller, more manageable subproblems.\n' +
               '\n' +
               'To illustrate recursion in JavaScript, let\'s take the example of calculating the factorial of a number. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n.',
            likesCount: 11
         },
         {
            id: v1(),
            message: 'A REST API (Representational State Transfer Application Programming Interface) is a common architectural style used for building web services. It allows different software systems to communicate with each other over HTTP by following a set of principles and conventions. In JavaScript, you can build REST APIs using frameworks like Express.js or Node.js.',
            likesCount: 15
         }
      ],
   },
   myProfileData: {
      data: '',
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
   profileData: {
      data: '',
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
   statusLoading: 'idle',
   error: null,
   isFetching: false,
   status: '',
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
      setMyProfile: (state, action: PayloadAction<ProfileUsersType>) => {
         state.myProfileData = action.payload;
      },
      setStatusProfile: (state, action: PayloadAction<string | undefined>) => {
         state.status = action.payload
      },
      setUpdateStatusProfile: (state, action: PayloadAction<string>) => {
         state.status = action.payload
      },
      setSavePhotoSuccess: (state, action: PayloadAction<{ small: string; large: string }>) => {
         state.myProfileData.photos = action.payload
      }
   },
})

export const {
   addPost,
   deletePost,
   setStatusProfile,
   setUpdateStatusProfile,
   setUserProfile,
   setMyProfile,
   setSavePhotoSuccess,
} = profileSlice.actions

export default profileSlice.reducer;

