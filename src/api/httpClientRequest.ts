import axios from 'axios';
import {UsersType} from '../redux/users/type';
import {ProfileUsersType} from '../redux/profile/type';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   // withCredentials: true,
   // headers: {
   //    "API-KEY": "c741bbbf-4fdf-4b8b-bc13-ef1d05e061c2"
   // }
})

export const usersAPI = {
   async getUsers(currentPage: string) {
      const {data} = await instance.get<{items: UsersType[], totalCount: number}>(`/users?page=${currentPage}&limit=10`);
      return data
   }
}

export const profileUsersAPI = {
   // async getProfileUsers() {
   //    const {data} = await instance.get<ProfileUsersType>("/profile/3");
   //    return data
   // }

   getUserProfile(userId: string) {
      return instance.get<ProfileUsersType>(`/profile/${userId}`)
   },

   // updateProfile(profile: ProfileUsersType) {
   //    const {
   //       fullName,
   //       aboutMe,
   //       lookingForAJob,
   //       lookingForAJobDescription,
   //       website,
   //       vk,
   //       github,
   //       instagram,
   //       twitter,
   //       youtube,
   //       mainLink,
   //       facebook
   //    } = profile
   //    const response = {
   //       fullName,
   //       aboutMe,
   //       lookingForAJob,
   //       lookingForAJobDescription,
   //       contacts: {
   //          website,
   //          facebook,
   //          vk,
   //          github,
   //          instagram,
   //          twitter,
   //          youtube,
   //          mainLink
   //       }
   //    }
   //    return instance.put('profile', response)
   // }
}