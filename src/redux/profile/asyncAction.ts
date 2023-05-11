import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProfileUsersType} from './type';
import {profileUsersAPI} from '../../api/httpClientRequest';

// export const fetchProfile = createAsyncThunk<ProfileUsersType>('users/fetchProfile', async () => {
//    const data = await profileUsersAPI.getProfileUsers();
//    return data;
// });