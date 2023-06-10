import {profileUsersAPI} from '../../api/httpClientRequest';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProfileParams} from './type';

// export const fetchProfileUsers = (userId: string) => {
//    debugger
//    try {
//       const response = await profileUsersAPI.getUserProfile(userId);
//       return response.data
//    } catch (error) {
//       throw new Error()
//    }
// });