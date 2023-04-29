import {v1} from 'uuid';
import avatar from '../../assets/avatar.png';

export type LocationUserType = {
   city: string
   country: string
}

export type UsersType = {
   id: string
   followed: boolean
   avatar: string
   firstName: string
   lastName: string
   position: string
   location: LocationUserType
}

export type UsersPageType = {
   users: UsersType[]
}

export type UsersState = {
   usersPage: UsersPageType
   status: 'idle' | 'loading' | 'succeeded' | 'failed';
   error: string | null
}


