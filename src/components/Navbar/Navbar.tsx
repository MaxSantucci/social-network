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
      navData.isActive ? 'text-white bg-active rounded-lg' : '';

   return (
      <div className="bg-gray-200 text-custom p-3 text-2xl w-30"
           style={{gridArea: 'n'}}>
         <div className="flex hover:bg-blue-100 rounded-lg">
            <div
               className="flex justify-center items-center ml-1.5 mr-2 hover:bg-blue-100">
               <FontAwesomeIcon icon={faUser}/>
            </div>
            <div>
               {/*<NavLink to={`/profile/${userId}`} className={activeStyle}>Profile</NavLink>*/}
               <NavLink
                  to="/profile"
                  style={{
                     width: '83px',
                     display: 'flex',
                     justifyContent: 'center'
                  }} className={activeStyle}><span>Profile</span></NavLink>
            </div>
         </div>
         <div className="flex hover:bg-blue-100 rounded-lg">
            <div className="flex justify-center items-center ml-1 mr-2.5">
               <FontAwesomeIcon icon={faEnvelope}/>
            </div>
            <div>
               <NavLink
                  to="/dialogs"
                  style={{
                     width: '110px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
                  className={activeStyle}>Messages</NavLink>
            </div>
         </div>
         <div className="flex hover:bg-blue-100 rounded-lg">
            <div className="flex justify-center items-center mr-1">
               <FontAwesomeIcon icon={faUserGroup}/>
            </div>
            <div>
               <NavLink
                  to="/users"
                  style={{
                     width: '78px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
                  className={activeStyle}>Users</NavLink>
            </div>
         </div>
         <div className="flex hover:bg-blue-100 rounded-lg">
            <div className="flex justify-center items-center mr-2.5">
               <FontAwesomeIcon icon={faNewspaper}/>
            </div>
            <div>
               <NavLink
                  to="/news"
                  style={{
                     width: '75px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
                  className={activeStyle}>News</NavLink>
            </div>
         </div>
         <div className="flex hover:bg-blue-100 rounded-lg">
            <div className="flex justify-center items-center mr-3">
               <FontAwesomeIcon icon={faMusic}/>
            </div>
            <div>
               <NavLink
                  to="/music"
                  style={{
                     width: '75px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
                  className={activeStyle}>Music</NavLink>
            </div>
         </div>
         <div className="flex hover:bg-blue-100 rounded-lg">
            <div className="flex justify-center items-center mr-3">
               <FontAwesomeIcon icon={faGear}/>
            </div>
            <div>
               <NavLink
                  to="/settings"
                  style={{
                     width: '100px',
                     display: 'flex',
                     justifyContent: 'center'
                  }}
                  className={activeStyle}>Settings</NavLink>
            </div>
         </div>
      </div>
   );
};
