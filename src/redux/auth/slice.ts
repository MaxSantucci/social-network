import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStateType} from './types';

export type AuthInitialStateType = {
   data: AuthStateType | null,
   isAuth: boolean,
   error: string | null,
   captchaUrl: string | null
}

const initialState: AuthInitialStateType = {
   data: null,
   isAuth: false,
   error: null,
   captchaUrl: null,
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
      setUserId: (state, action: PayloadAction<{id: number}>) => {
         if(state.data) {
            state.data.id = action.payload.id
         }
      },
      setError: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      logout: (state) => {
         state.data = null
         state.isAuth = false
         state.error = null
      },
      imageCaptcha: (state, action: PayloadAction<string>) => {
         state.captchaUrl = action.payload
      }
   },
});


export const {setUserData, setUserId, setError, logout, imageCaptcha} = authSlice.actions;
export default authSlice.reducer;

