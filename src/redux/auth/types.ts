export type AuthDataType = {
   data: {
      id: number;
      login: string;
      email: string;
   }
   isAuth: boolean;
   resultCode: number
}

export type AuthStateType = {
   id: number;
   login: string;
   email: string;
}


