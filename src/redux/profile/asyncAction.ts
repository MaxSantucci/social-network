import {profileUsersAPI} from '../../api/httpClientRequest';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProfileParams} from './type';
import {
   setStatusProfile,
   setUpdateStatusProfile,
   setUserProfile
} from './slice';

export const fetchProfileUsers = createAsyncThunk<{}, ProfileParams>('profile/fetchProfileUsers', async (params, {dispatch}) => {
   try {
      const response = await profileUsersAPI.getUserProfile(params.userId);
      dispatch(setUserProfile(response.data));
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