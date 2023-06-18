import React from 'react';
import {NavLink} from 'react-router-dom';
import avatar from 'assets/avatar.png';

type PropsDialogsItemType = {
   to: string
   name: string
}

export const DialogsItem = (props: PropsDialogsItemType) => {
   const activeStyle = (navData: { isActive: boolean }) =>
      navData.isActive ? 'text-white w-14 h-6 bg-active' : '';

   return (
      <div className='flex'>
         <img className="w-5 h-5 mr-1 rounded-lg" src={avatar} alt="avatar"/>
         <NavLink to={props.to} className={activeStyle}>{props.name}</NavLink>
      </div>
   )
}