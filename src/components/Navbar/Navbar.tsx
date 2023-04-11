import React from 'react';
import {NavLink} from "react-router-dom";

type PropsTypeNavbar = {

}

export const Navbar: React.FC<PropsTypeNavbar> = () => {
   const activeStyle = (navData: { isActive: boolean }) =>
      navData.isActive ? 'text-white rounded-lg bg-active' : '';

   return (
      <div className='bg-gray-200 text-custom p-5 text-2xl w-30' style={{gridArea: "n"}}>
         <div className=''>
            <NavLink to="/profile" className={activeStyle}>Profile</NavLink>
         </div>
         <div>
            <NavLink to="/dialogs/*" className={activeStyle}>Messages</NavLink>
         </div>
         <div>
            <NavLink to="/news" className={activeStyle}>News</NavLink>
         </div>
         <div>
            <NavLink to="/music" className={activeStyle}>Music</NavLink>
         </div>
         <div>
            <NavLink to="/settings" className={activeStyle}>Settings</NavLink>
         </div>
      </div>
   );
};
