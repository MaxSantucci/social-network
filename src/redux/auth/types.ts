export type AuthStateType = {
   id: number;
   login: string;
   email: string;
}

export type AuthDataType = {
   data: AuthStateType,
   isAuth: boolean;
   resultCode: number
}




