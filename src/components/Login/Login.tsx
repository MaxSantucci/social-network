import React from 'react';
import {
   Button, Checkbox,
   FormControl, FormControlLabel,
   FormGroup,
   FormLabel,
   Grid,
   TextField
} from '@mui/material';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {useFormik} from 'formik';
import {fetchAuth, fetchLoginAuth} from '../../redux/auth/asyncAction';
import {selectIsAuth} from '../../redux/auth/selector';
import {Navigate} from 'react-router-dom';

type FormikErrorType = {
   email?: string
   password?: string
   rememberMe?: boolean
}

export const Login = () => {
   const dispatch = useAppDispatch()
   // const isAuth = useAppSelector(selectIsAuth)

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         rememberMe: false
      },
      validate: (values) => {
         const errors: FormikErrorType = {}

         if (!values.email) {
            errors.email = 'Required'
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
         }

         if (!values.password) {
            errors.password = 'Required'
         } else if (values.password?.trim()?.length < 3) {
            errors.email = 'Should be more then three symbols'
         }

         return errors
      },
      onSubmit: values => {
         dispatch(fetchLoginAuth(values))
         formik.resetForm()
      },
   })

   // if(isAuth) {
   //    return <Navigate to='/'/>
   // }

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
            <form onSubmit={formik.handleSubmit}>
               <FormGroup>
                  <TextField
                     label="Email"
                     margin="normal"
                     {...formik.getFieldProps('email')}
                  />
                  {formik.errors.email &&
                     <div style={{color: 'red'}}> {formik.errors.email} </div>}
                  <TextField
                     type="password"
                     label="Password"
                     margin="normal"
                     {...formik.getFieldProps('password')}
                  />
                  {formik.errors.password && <div
                     style={{color: 'red'}}> {formik.errors.password} </div>}
                  <FormControlLabel label={'Remember me'} control={
                     <Checkbox
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps('rememberMe')}
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