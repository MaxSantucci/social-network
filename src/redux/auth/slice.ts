import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStateType} from './types';

export type AuthInitialStateType = {
   data: AuthStateType | null,
   isAuth: boolean,
   error: string | null,
   captchaRequired: boolean,
   captchaText: string | null,
   captchaImage: string | null
}

const initialState: AuthInitialStateType = {
   data: null,
   isAuth: false,
   error: null,
   captchaRequired: false,
   captchaText: null,
   captchaImage: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserData: (state, action: PayloadAction<AuthStateType>) => {
         state.data = action.payload
         state.isAuth = true
         state.error = null
      },
      setError: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      logout: (state) => {
         state.data = null
         state.isAuth = false
         state.error = null
      },
      setCaptchaRequired: (state, action: PayloadAction<{
         captchaText: string
      }>) => {
         state.captchaRequired = true
         state.captchaText = action.payload.captchaText
      },
      imageCaptcha: (state, action: PayloadAction<{url: string}>) => {
         state.captchaImage = action.payload.url
      }
   },
});


export const {setUserData, setError, logout, setCaptchaRequired, imageCaptcha} = authSlice.actions;
export default authSlice.reducer;

