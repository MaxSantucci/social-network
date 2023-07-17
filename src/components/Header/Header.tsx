import React, {useEffect} from 'react';
import logo from '../../assets/logo.png';
import {NavLink} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectIsAuth, selectMyLogin} from 'redux/auth/selector';
import {fetchAuth, fetchLogoutAuth} from 'redux/auth/asyncAction';
import {BiLogIn} from 'react-icons/bi';
import {FiLogOut} from 'react-icons/fi';

export const Header = () => {
   const isAuth = useAppSelector(selectIsAuth);
   const login = useAppSelector(selectMyLogin)

   const dispatch = useAppDispatch();

   console.log(login)

   const logout = () => {
      dispatch(fetchLogoutAuth())
   }

   useEffect(() => {
      dispatch(fetchAuth())
   }, []);

   return (
      <header className="flex justify-between bg-gray-50 pt-2.5 pl-1" style={{ gridArea: 'h' }}>
         <img className="w-30 h-10" src={logo} alt="logo" />

         <div className="flex mr-5 mt-2 mb-5 text-2xl text-custom">
            {isAuth ? (
               <span>{login}</span>
            ) : (
               <div className="pb-5">
                  <button
                     className="bg-blue-100 rounded-lg hover:bg-active hover:text-white">
                     <NavLink to="/login" style={{
                        width: '100px',
                        display: 'flex',
                        justifyContent: 'center'
                     }}>
                        <div className="flex ">
                           <div>
                              Login
                           </div>
                           <div className="flex items-center">
                              <BiLogIn/>
                           </div>
                        </div>
                     </NavLink>
                  </button>
               </div>
            )}
            {isAuth &&
               <button className="flex ml-3">
                  <div className='w-120 flex justify-center bg-blue-100 rounded-lg hover:bg-active hover:text-white'>
                     <div
                        style={{textTransform: 'none'}}
                        className="mr-1 flex "
                        color="inherit" onClick={logout}>
                        Log Out
                     </div>
                     <div className="flex items-center"><FiLogOut/></div>
                  </div>
               </button>
            }
         </div>
      </header>
   );
};