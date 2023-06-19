import React, { useEffect } from 'react';
import logo from '../../assets/logo.png';
import {Navigate, NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectAuthLogin, selectIsAuth} from 'redux/auth/selector';
import {fetchAuth, fetchLogoutAuth} from 'redux/auth/asyncAction';
import LogoutIcon from '@mui/icons-material/Logout';
import {Button} from '@mui/material';

export const Header = () => {
   const isAuth = useAppSelector(selectIsAuth);
   const userLogin = useAppSelector(selectAuthLogin);

   const dispatch = useAppDispatch();

   const logout = () => {
      dispatch(fetchLogoutAuth())
   }

   useEffect(() => {
      dispatch(fetchAuth())
   }, []);


   return (
      <header className="flex justify-between bg-gray-50 pt-2.5 pl-1" style={{ gridArea: 'h' }}>
         <img className="w-30 h-10" src={logo} alt="logo" />

         <div className="mr-5 mt-2 text-2xl">
            {isAuth && userLogin ? (
               <span>Hello, {userLogin.login}</span>
            ) : (
               <NavLink to="/login">
                  Login
               </NavLink>
            )}
            {isAuth && <Button color="inherit" onClick={logout}>Log out</Button>}
         </div>
      </header>
   );
};