import React from 'react';
import {
   Button,
   Checkbox,
   FormControl,
   FormControlLabel,
   FormGroup,
   FormLabel,
   Grid,
   TextField
} from '@mui/material';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {fetchLoginAuth} from 'redux/auth/asyncAction';
import {SubmitHandler, useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import {selectIsAuth} from 'redux/auth/selector';

type FormikErrorType = {
   email?: string
   password?: string
   rememberMe?: boolean
}

export const Login = () => {
   const dispatch = useAppDispatch()
   const isAuth = useAppSelector(selectIsAuth)

   const {
      register,
      handleSubmit,
      formState: {errors}
   } = useForm<FormikErrorType>({
      defaultValues: {
         email: '',
         password: '',
         rememberMe: false
      }
   })

   const onSubmit: SubmitHandler<FormikErrorType> = (data) => {
      dispatch(fetchLoginAuth({...data}))
   }

   if (isAuth) return <Navigate to="/profile"/>


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
                     {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                     })}
                  />
                  {errors.email?.type === 'required' &&
                     <div style={{color: 'red'}}>Email is required </div>}
                  {errors.email?.type === 'pattern' &&
                     <div style={{color: 'red'}}>Invalid email address </div>}
                  <TextField
                     type="password"
                     label="Password"
                     margin="normal"
                     {...register('password', {
                        required: true,
                        minLength: 3
                     })}
                  />
                  {errors.password?.type === 'required' &&
                     <div style={{color: 'red'}}>Password is required </div>}
                  {errors.password?.type === 'minLength' &&
                     <div style={{color: 'red'}}>Should be more then three
                        symbols </div>}
                  <FormControlLabel label={'Remember me'} control={
                     <Checkbox
                        // checked={formik.values.rememberMe}
                        {...register('rememberMe')}
                     />
                  }/>
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