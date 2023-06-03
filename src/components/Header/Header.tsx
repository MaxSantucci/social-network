import React, { useEffect } from 'react';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
// import { authAPI } from '../../api/httpClientRequest';
import { useAppSelector } from '../../redux/store';
import {selectAuthLogin, selectIsAuth} from '../../redux/auth/selector';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux/auth/slice';
import {authAPI} from '../../api/httpClientRequest';

export const Header = () => {
   const isAuth = useAppSelector(selectIsAuth);
   const userLogin = useAppSelector(selectAuthLogin);

   const dispatch = useDispatch();
   console.log(isAuth)
   console.log(userLogin)

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await authAPI.getAuth();
            if (response.data.resultCode === 0) {
               const { id, login, email } = response.data.data;
               dispatch(setUserData({id, login, email}));
            }
         } catch (error) {
            console.log(error);
         }
      };

      fetchData().then(r => r);
   }, [dispatch]);


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
         </div>
      </header>
   );
};
