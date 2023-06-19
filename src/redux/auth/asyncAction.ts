import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from 'api/httpClientRequest';
import {logout, setUserData} from './slice';
import {LoginType} from './types';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params, { dispatch }) => {
   try {
      const response = await authAPI.getAuth();
      if (response.data.resultCode === 0) {
         const { id, login, email } = response.data.data;
         dispatch(setUserData({id, login, email}));
      }
   } catch (error) {
      throw new Error()
   }
});

export const fetchLoginAuth = createAsyncThunk('auth/fetchLoginAuth', async (data: LoginType, { dispatch }) => {
   try {
      const response = await authAPI.loginAuth(data);
      if (response.data.resultCode === 0) {
         dispatch(setUserData)
      }
   } catch (error) {
      throw new Error()
   }
});

export const fetchLogoutAuth = createAsyncThunk('auth/fetchLogoutAuth', async (_, { dispatch }) => {
   try {
      const response = await authAPI.logoutAuth();
      if (response.data.resultCode === 0) {
         dispatch(logout)
      }
   } catch (error) {
      throw new Error()
   }
});
