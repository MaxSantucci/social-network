import axios from 'axios';
import {UsersPageType} from '../redux/users/type';
import {ProfileUsersType} from '../redux/profile/type';
import {AuthDataType} from '../redux/auth/types';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      "API-KEY": "c741bbbf-4fdf-4b8b-bc13-ef1d05e061c2"
   }
})

export const usersAPI = {
   async getUsers(currentPage: string, pageSize = 10) {
      const {data} = await instance.get<UsersPageType>(`users?page=${currentPage}&count=${pageSize}`);
      return data
   },
   async setFollow(userId: number) {
      return await instance.post(`follow/${userId}`)
   },
   async setUnfollow(userId: number) {
      return await instance.delete(`follow/${userId}`)
   }
}

export const profileUsersAPI = {
   async getUserProfile(userId: string | undefined) {
      return await instance.get<ProfileUsersType>(`profile/${userId}`)
   },
   async getStatus(userId: string | undefined) {
      return await instance.get(`profile/status/${userId}`)
   },
   async updateStatus(status: string | undefined) {
      return await instance.put(`profile/status/`, {status})
   }
}

export const authAPI = {
   async getAuth() {
      return await instance.get<AuthDataType>('auth/me');
   },
};

