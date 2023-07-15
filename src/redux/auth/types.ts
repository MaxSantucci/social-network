export type AuthDataType = {
  data: {
     id: number | null
     login: string
     email: string
  }
   isAuth: boolean,
   error: string | null,
   captchaUrl: string | null
   resultCode: number
}

export type LoginType = {
   email: string
   password: string
   rememberMe: boolean
   captcha: string
}




