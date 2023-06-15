import {profileUsersAPI} from '../../api/httpClientRequest';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProfileParams, StatusParams} from './type';
import {setStatusProfile, setUserProfile} from './slice';

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

export const fetchUpdateStatus = createAsyncThunk<{}, StatusParams>('profile/fetchStatusProfile', async (params, {dispatch}) => {
   try {
      const response = await profileUsersAPI.updateStatus(params.status);
      if (response.data.resultCode === 0) {
         dispatch(setStatusProfile(status));
      }
   } catch (error) {
      throw new Error()
   }
});