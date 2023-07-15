import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthDataType} from 'redux/auth/types';

const initialState: AuthDataType = {
   data: {
      id: null,
      login: '',
      email: '',
   },
   isAuth: false,
   error: null,
   captchaUrl: null,
   resultCode: 0
}

type UserDataType = {
   // data: {
      id: number | null
      login: string
      email: string
   // }
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserData: (state, action: PayloadAction<UserDataType>) => {
         // debugger
         // const { id, login, email } = action.payload;
         // state.id = id;
         // state.login = login;
         // state.email = email;
         state.data = action.payload;
         state.isAuth = true
         state.error = null
      },
      setError: (state, action: PayloadAction<string>) => {
         state.error = action.payload
      },
      logout: (state) => {
         // state.id = null;
         // state.login = '';
         // state.email = '';
         state.isAuth = false
         state.error = null
      },
      imageCaptcha: (state, action: PayloadAction<string>) => {
         state.captchaUrl = action.payload
      }
   },
});


export const {setUserData, setError, logout, imageCaptcha} = authSlice.actions;
export default authSlice.reducer;

