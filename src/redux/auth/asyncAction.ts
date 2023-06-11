import {createAsyncThunk} from '@reduxjs/toolkit';
import {authAPI} from '../../api/httpClientRequest';
import {setUserData} from './slice';

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
