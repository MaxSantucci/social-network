import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {fetchLoginAuth} from 'redux/auth/asyncAction';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import {selectCaptchaUrl, selectIsAuth,} from 'redux/auth/selector';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type FormErrorType = {
   email: string
   password: string
   rememberMe: boolean
   captcha?: string
}

export const Login = () => {
   const dispatch = useAppDispatch()
   const isAuth = useAppSelector(selectIsAuth)
   const loginError = useAppSelector((state) => state.auth.error)
   const captchaUrl = useAppSelector(selectCaptchaUrl)

   const [captcha, setCaptcha] = useState('');

   const validationSchema = yup.object({
      email: yup.string().required('Email is required').email('Invalid email address'),
      password: yup.string().required('Password is required').min(3, 'Should be' +
         ' at least 3 characters long')
   });

   const {
      register,
      handleSubmit,
      setValue,
      formState: {errors}
   } = useForm<FormErrorType>({
      // @ts-ignore
      resolver: yupResolver(validationSchema),
      defaultValues: {
         email: '',
         password: '',
         rememberMe: false,
      }
   })

   useEffect(() => {
      const storedCredentials = localStorage.getItem('credentials')
      if (storedCredentials) {
         const {email, password, rememberMe} = JSON.parse(storedCredentials)
         setValue('email', email)
         setValue('password', password)
         setValue('rememberMe', rememberMe)
      }
   }, [setValue])

   const onSubmit: SubmitHandler<FormErrorType> = (data) => {
      dispatch(fetchLoginAuth({...data, captcha}))
      if (data.rememberMe) {
         const {email, password, rememberMe} = data;
         localStorage.setItem('credentials', JSON.stringify({
            email,
            password,
            rememberMe
         }));
      } else {
         localStorage.removeItem('credentials');
      }
   }

   const saveRememberMeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setValue('rememberMe', e.target.checked)
   }

   if (isAuth) {
      return <Navigate to="/profile"/>
   }

   return <Grid container justifyContent={'center'}>
      <Grid item justifyContent={'center'}>
         <FormControl>
            <FormLabel>
               <p>To log in get registered
                  <a href={'https://social-network.samuraijs.com/'}
                     target={'_blank'}> here
                  </a>
               </p>
               <p>or use common test account credentials:</p>
               <p>Email: free@samuraijs.com</p>
               <p>Password: free</p>
            </FormLabel>
            <form onSubmit={handleSubmit(onSubmit)}>
               <FormGroup>
                  <TextField
                     label="Email"
                     margin="normal"
                     {...register('email')}
                     error={!!errors.email}
                     helperText={errors.email?.message}
                  />
                  {/*{errors.email && <p>{errors.email?.message}</p>}*/}
                  {/*{errors.email?.type === 'required' &&*/}
                  {/*   <div style={{color: 'red'}}>Email is required </div>}*/}
                  {/*{errors.email?.type === 'pattern' &&*/}
                  {/*   <div style={{color: 'red'}}>Invalid email address </div>}*/}
                  <TextField
                     type="password"
                     label="Password"
                     margin="normal"
                     {...register('password')}
                     error={!!errors.password}
                     helperText={errors.password?.message}
                  />
                  {/*{errors.password?.type === 'required' &&*/}
                  {/*   <div className="text-red-600">Password is required </div>}*/}
                  {/*{errors.password?.type === 'minLength' &&*/}
                  {/*   <div className="text-red-600">Should be more then three*/}
                  {/*      symbols </div>}*/}
                  {loginError &&
                     <div className="text-red-600">{loginError}</div>}
                  <FormControlLabel
                     label={'Remember me'}
                     control={
                        <Checkbox
                           {...register('rememberMe')}
                           value={true}
                           onChange={saveRememberMeHandler}
                        />
                     }
                  />
                  {captchaUrl
                     && (
                        <>
                           <img src={captchaUrl} alt="Captcha"/>
                           <input
                              type="text"
                              onChange={(e) => setCaptcha(e.target.value)}
                              placeholder="Enter captcha"
                           />
                        </>
                     )
                  }
                  <Button type={'submit'} variant={'contained'}
                          color={'primary'}>
                     Login
                  </Button>
               </FormGroup>
            </form>
         </FormControl>
      </Grid>
   </Grid>;
};
