export type AuthDataType = {
  data: {
     data: any
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

export type ResponseType<D = {}> = {
   data: D
   fieldsErrors: Array<{ field: string, error: string }>
   messages: string[]
   resultCode: number
}




