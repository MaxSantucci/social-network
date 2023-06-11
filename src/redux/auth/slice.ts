import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthStateType} from './types';

export type AuthInitialStateType = {
   data: AuthStateType | null,
   isAuth: boolean,
}

const initialState: AuthInitialStateType = {
   data: null,
   isAuth: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setUserData: (state, action: PayloadAction<AuthStateType>) => {
         state.data = action.payload
         state.isAuth = true
      },
   },
});


export const {setUserData} = authSlice.actions;
export default authSlice.reducer;

