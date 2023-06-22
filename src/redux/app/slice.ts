import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {fetchAuth} from 'redux/auth/asyncAction';

export type AppInitialStateType = {
   initialized: boolean
}


const initialState: AppInitialStateType = {
   initialized: false
}

export const appSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      setInitialized: (state) => {
         state.initialized = true
      }
   }
})

export const { setInitialized } = appSlice.actions;
export default appSlice.reducer;

export const fetchInitialize = createAsyncThunk(
   'auth/fetchInitialize',
   async (_, {dispatch}) => {
      await Promise.all([dispatch(fetchAuth())]);
      dispatch(setInitialized());
   }
);
