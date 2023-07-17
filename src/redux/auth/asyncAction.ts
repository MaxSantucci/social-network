import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI, securityAPI} from 'api/httpClientRequest';
import {imageCaptcha, logout, setError, setUserData} from './slice';
import {LoginType} from './types';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (_, { dispatch }) => {
   try {
      const response = await authAPI.getAuth();
      if (response.data.resultCode === 0) {
         dispatch(setUserData(response.data));
      }
   } catch (error) {
      throw new Error()
   }
});

export const fetchLoginAuth = createAsyncThunk(
   "auth/login",
   async ({email, password, rememberMe, captcha}: LoginType, {dispatch}) => {
      const response = await authAPI.loginAuth({email, password, rememberMe, captcha});
      if (response.data.resultCode === 0) {
         dispatch(fetchAuth());
      } else if (response.data.resultCode === 10) {
         dispatch(fetchCaptchaImage());
      } else {
         const errorMessage = response.data.messages[0] || 'Login failed';
         dispatch(setError(errorMessage));
      }
   }
);

export const fetchLogoutAuth = createAsyncThunk('auth/fetchLogoutAuth', async (_, { dispatch }) => {
   try {
      const response = await authAPI.logoutAuth();
      if (response.data.resultCode === 0) {
         dispatch(logout(response.data))
      }
   } catch (error) {
      throw new Error()
   }
});


export const fetchCaptchaImage = createAsyncThunk('auth/fetchCaptchaImage', async (_, {dispatch}) => {
   const response = await securityAPI.getCaptcha()
   dispatch(imageCaptcha(response.data.url))
   return response.data.captcha
})