import {createAsyncThunk} from '@reduxjs/toolkit';
import {UsersParams, UsersType} from './type';
import {usersAPI} from '../../api/httpClientRequest';


export const fetchUsers = createAsyncThunk<{items: UsersType[], totalCount: number}, UsersParams>('users/fetchUsers', async (params) => {
   const data = await usersAPI.getUsers(params.currentPage)
   return data
});

