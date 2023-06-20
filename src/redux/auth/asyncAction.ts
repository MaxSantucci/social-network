import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI, securityAPI} from 'api/httpClientRequest';
import {
   imageCaptcha,
   logout,
   setCaptchaRequired,
   setError,
   setUserData
} from './slice';
import {LoginType} from './types';


export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params, { dispatch }) => {
   try {
      const response = await authAPI.getAuth();
      if (response.data.resultCode === 0) {
         dispatch(setUserData(response.data.data));
      }
   } catch (error) {
      throw new Error()
   }
});

export const fetchLoginAuth = createAsyncThunk('auth/fetchLoginAuth', async (data: LoginType, {
   dispatch,
   rejectWithValue
}) => {
   try {
      const response = await authAPI.loginAuth(data);
      if (response.data.resultCode === 0) {
         dispatch(setUserData(response.data.data))
      } else if (response.data.resultCode === 10) {
         dispatch(fetchCaptchaImage())
      } else {
         const errorMessage = response.data.messages[0] || 'Login failed';
         dispatch(setError(errorMessage));
         return rejectWithValue(errorMessage)
      }
   } catch (error) {
      dispatch(setError('Login failed'));
      return rejectWithValue('Login failed');
   }
});

export const fetchLogoutAuth = createAsyncThunk('auth/fetchLogoutAuth', async (_, { dispatch }) => {
   try {
      const response = await authAPI.logoutAuth();
      if (response.data.resultCode === 0) {
         dispatch(logout(response.data.data))
      }
   } catch (error) {
      throw new Error()
   }
});


export const fetchCaptchaImage = createAsyncThunk('auth/fetchCaptchaImage', async (_, {dispatch}) => {
   const response = await securityAPI.getCaptcha()
   dispatch(imageCaptcha(response.data.url))
})