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
      navData.isActive ? 'text-white bg-active' : '';

   return (
      <div className="bg-gray-200 text-custom p-3 text-2xl w-30"
           style={{gridArea: 'n'}}>
         <div className="flex">
            <div className="flex justify-center mr-3">
               <FontAwesomeIcon icon={faUser}/>
            </div>
            <div>
               {/*<NavLink to={`/profile/${userId}`} className={activeStyle}>Profile</NavLink>*/}
               <NavLink to='/profile' className={activeStyle}>Profile</NavLink>
            </div>
         </div>
         <div className="flex">
            <div className="flex justify-center mr-2.5">
               <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <div>
               <NavLink to="/dialogs" className={activeStyle}>Messages</NavLink>
            </div>
         </div>
         <div className="flex">
            <div className="flex justify-center mr-1">
               <FontAwesomeIcon icon={faUserGroup}/>
            </div>
            <div>
               <NavLink to="/users" className={activeStyle}>Users</NavLink>
            </div>
         </div>
         <div className="flex">
            <div className="flex justify-center mr-2.5">
               <FontAwesomeIcon icon={faNewspaper}/>
            </div>
            <div>
               <NavLink to="/news" className={activeStyle}>News</NavLink>
            </div>
         </div>
         <div className="flex">
            <div className="flex justify-center mr-3">
               <FontAwesomeIcon icon={faMusic}/>
            </div>
            <div>
               <NavLink to="/music" className={activeStyle}>Music</NavLink>
            </div>
         </div>
         <div className="flex">
            <div className="flex justify-center mr-3">
               <FontAwesomeIcon icon={faGear}/>
            </div>
            <div>
               <NavLink to="/settings" className={activeStyle}>Settings</NavLink>
            </div>
         </div>
      </div>
   );
};
