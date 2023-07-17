import {profileUsersAPI} from 'api/httpClientRequest';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProfileParams, ProfileUsersType,} from './type';
import {
   setMyProfile,
   setSavePhotoSuccess,
   setStatusProfile,
   setUpdateStatusProfile,
   setUserProfile
} from './slice';
import {RootState} from 'redux/store';
import {setError} from 'redux/auth/slice';
import {useForm} from 'react-hook-form';


export const fetchProfileUsers = createAsyncThunk<{}, ProfileParams>('profile/fetchProfileUsers', async (params, {dispatch}) => {
   try {
      const response = await profileUsersAPI.getUserProfile(params.userId);
      dispatch(setUserProfile(response.data));
   } catch (error) {
      throw new Error()
   }
});

export const fetchMyProfileUsers = createAsyncThunk<{}, ProfileParams>('profile/fetchMyProfileUsers', async (params, {dispatch}) => {
   try {
      // debugger
      const response = await profileUsersAPI.getUserProfile(params.userId);
      dispatch(setMyProfile(response.data));
   } catch (error) {
      throw new Error()
   }
});

export const fetchStatusProfile = createAsyncThunk<{}, ProfileParams>('profile/fetchStatusProfile', async (params, {dispatch}) => {
   try {
      const response = await profileUsersAPI.getStatus(params.userId);
      dispatch(setStatusProfile(response.data));
   } catch (error) {
      throw new Error()
   }
});

export const fetchUpdateStatus = createAsyncThunk('profile/fetchStatusProfile', async (status: string, {dispatch}) => {
   try {
      const response = await profileUsersAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
         dispatch(setUpdateStatusProfile(status));
      }
   } catch (error) {
      throw new Error()
   }
});

export const fetchSavePhoto = createAsyncThunk('profile/fetchSavePhoto', async (file: Blob, {dispatch}) => {
   try {
      const response = await profileUsersAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
         dispatch(setSavePhotoSuccess(response.data.data.photos));
      }
   } catch (error) {
      throw new Error()
   }
});

export const fetchSaveProfile = createAsyncThunk(
   'profile/fetchSaveProfile',
   async (profile: ProfileUsersType, { dispatch, getState }) => {
      // debugger
      const userId = (getState() as RootState).profile.myProfileData.userId;
      try {
         const response = await profileUsersAPI.saveProfile(profile);
         if (response.data.resultCode === 0) {
            dispatch(fetchMyProfileUsers({userId}));
         } else {
            const errorMessage = response.data.messages[0] || 'Failed to save profile';
            const {setError} = useForm();
            setError('profile', {message: errorMessage});
         }
      } catch (error) {
         dispatch(setError('An error occurred while saving the profile'));
         throw error;
      }
   }
);
