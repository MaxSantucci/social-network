export type AuthStateType = {
   id: number;
   login: string;
   email: string;
}

export type AuthDataType = {
   data: AuthStateType,
   isAuth: boolean;
   resultCode: number
   id: number
}

export type LoginType = {
   email?: string
   password?: string
   rememberMe?: boolean
   captcha?: string
}




