import {createAsyncThunk} from '@reduxjs/toolkit';
import {UsersParams, UsersType} from './type';
import {profileUsersAPI, usersAPI} from '../../api/httpClientRequest';
import {ProfileUserType} from '../profile/slice';
import {followingInProgress, followUsers, unfollowUsers} from './slice';

export const fetchUsers = createAsyncThunk<{items: UsersType[], totalCount: number}, UsersParams>
('users/fetchUsers', async (params) => {
   return await usersAPI.getUsers(params.currentPage)
});

export const fetchSetFollow = createAsyncThunk<{}, ProfileUserType>(
   'users/follow', async (params, {dispatch}) => {
      try {
         const response = await profileUsersAPI.setFollow(params.userId)
         dispatch(followUsers(params.userId))
         return response
      } catch (e) {
         throw new Error()
      }
   }
);

export const fetchSetUnfollow = createAsyncThunk<{}, ProfileUserType>(
   'users/unfollow', async (params, {dispatch}) => {
      try {
         const response = await profileUsersAPI.setUnfollow(params.userId)
         dispatch(unfollowUsers(params.userId))
         return response
      } catch (e) {
         throw new Error()
      }
   }
);

