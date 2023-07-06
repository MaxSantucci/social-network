import axios from 'axios';
import {UsersPageType} from 'redux/users/type';
import {ProfileUsersType} from 'redux/profile/type';
import {AuthDataType, LoginType} from 'redux/auth/types';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: {
      'API-KEY': '6c04fd1c-1a72-403a-a31b-ef05ad16400f'
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
   async updateStatus(status: string) {
      return await instance.put(`profile/status`, {status: status})
   },
   async savePhoto(photoFile: Blob) {
      const formData = new FormData()
      formData.append('image', photoFile)
      return await instance.put(`profile/photo`, formData, {
         headers: {
            'Content-type': 'multipart/form-data'
         }
      })
   }
}

export const authAPI = {
   async getAuth() {
      return await instance.get<AuthDataType>('auth/me');
   },
   async loginAuth(data: LoginType) {
      return await instance.post('auth/login', data);
   },
   async logoutAuth() {
      return await instance.delete('auth/login');
   }
};

export const securityAPI = {
   async getCaptcha() {
      return await instance.get('/security/get-captcha-url')
   }
}

