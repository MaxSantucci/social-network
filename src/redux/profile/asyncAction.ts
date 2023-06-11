import {profileUsersAPI} from '../../api/httpClientRequest';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProfileParams} from './type';
import {setUserProfile} from './slice';

export const fetchProfileUsers = createAsyncThunk<{}, ProfileParams>('profile/fetchProfileUsers', async (params, {dispatch}) => {
   try {
      const response = await profileUsersAPI.getUserProfile(params.userId);
      dispatch(setUserProfile(response.data));
   } catch (error) {
      throw new Error()
   }
});