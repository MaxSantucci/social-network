import {createAsyncThunk} from '@reduxjs/toolkit';
import {UserFollowType, UsersPageType, UsersParams} from './type';
import {profileUsersAPI, usersAPI} from '../../api/httpClientRequest';
import {followingInProgress, followUsers, toggleIsFetching, unfollowUsers} from './slice';
import {AxiosResponse} from 'axios';

export const fetchUsers = createAsyncThunk<UsersPageType, UsersParams>
('users/fetchUsers', async (params, {dispatch}) => {
   dispatch(toggleIsFetching(true))
   try {
      const response = await usersAPI.getUsers(params.currentPage, params.pageSize)
      dispatch(toggleIsFetching(false))
      return response
   } catch (e) {
      throw new Error()
   }
});

export const fetchSetFollow = createAsyncThunk<{}, UserFollowType>(
   'users/follow', async (params, { dispatch }) => {
      dispatch(followingInProgress({ userId: params.userId, followingInProgress: true }));
      try {
         const response: AxiosResponse<any, any> = await profileUsersAPI.setFollow(params.userId);
         dispatch(followUsers(params.userId));
         dispatch(followingInProgress({ userId: params.userId, followingInProgress: false }));
         return response.data;
      } catch (e) {
         throw new Error();
      }
   }
);

export const fetchSetUnfollow = createAsyncThunk<{}, UserFollowType>(
   'users/unfollow', async (params, {dispatch}) => {
      dispatch(followingInProgress({ userId: params.userId, followingInProgress: true }));
      try {
         const response: AxiosResponse<any, any> = await profileUsersAPI.setUnfollow(params.userId)
         dispatch(unfollowUsers(params.userId))
         dispatch(followingInProgress({ userId: params.userId, followingInProgress: false }));
         return response.data
      } catch (e) {
         throw new Error()
      }
   }
);

