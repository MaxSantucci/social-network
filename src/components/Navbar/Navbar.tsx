import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
   faEnvelope,
   faGear,
   faMusic,
   faNewspaper,
   faUser,
   faUserGroup
} from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
   const {userId} = useParams()
   console.log(userId)

   const activeStyle = (navData: { isActive: boolean }) =>
      navData.isActive ? 'text-white bg-active rounded-lg hover:bg-blue-300 hover:text-black' : '';

   return (
      <div className="flex bg-gray-200 text-custom p-3 text-2xl w-30"
           style={{gridArea: 'n'}}>
         <div className="flex flex-col items-center">
            <div
               className="flex justify-center items-center m-1">
               <FontAwesomeIcon icon={faUser}/>
            </div>
            <div className="flex justify-center items-center m-1">
               <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <div className="flex justify-center items-center m-1">
               <FontAwesomeIcon icon={faUserGroup}/>
            </div>
            <div className="flex justify-center items-center m-1">
               <FontAwesomeIcon icon={faNewspaper}/>
            </div>
            <div className="flex justify-center items-center m-1">
               <FontAwesomeIcon icon={faMusic}/>
            </div>
            <div className="flex justify-center items-center m-1">
               <FontAwesomeIcon icon={faGear}/>
            </div>
         </div>
         <div className="flex flex-col">
            {/*<NavLink to={`/profile/${userId}`} className={activeStyle}>Profile</NavLink>*/}
            <NavLink
               to="/profile"
               style={{
                  width: '110px',
                  display: 'flex',
                  justifyContent: 'left'
               }} className={activeStyle}><span>Profile</span></NavLink>
            <NavLink
               to="/dialogs"
               style={{
                  width: '110px',
                  display: 'flex',
                  justifyContent: 'left'
               }}
               className={activeStyle}>Messages</NavLink>
            <NavLink
               to="/users"
               style={{
                  width: '110px',
                  display: 'flex',
                  justifyContent: 'left'
               }}
               className={activeStyle}>Users</NavLink>
            <NavLink
               to="/news"
               style={{
                  width: '110px',
                  display: 'flex',
                  justifyContent: 'left'
               }}
               className={activeStyle}>News</NavLink>
            <NavLink
               to="/music"
               style={{
                  width: '110px',
                  display: 'flex',
                  justifyContent: 'left'
               }}
               className={activeStyle}>Music</NavLink>
            <NavLink
               to="/settings"
               style={{
                  width: '110px',
                  display: 'flex',
                  justifyContent: 'left'
               }}
               className={activeStyle}>Settings</NavLink>
         </div>
      </div>
   );
};
