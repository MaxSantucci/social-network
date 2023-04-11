import React from 'react';
import {NavLink} from 'react-router-dom';

type PropsDialogsItemType = {
   to: string
   name: string
}

export const DialogsItem = (props: PropsDialogsItemType) => {
   const activeStyle = (navData: { isActive: boolean }) =>
      navData.isActive ? 'text-white w-10 h-6 bg-active' : '';


   return (
      <div className=''>
         <NavLink to={props.to} className={activeStyle}>{props.name}</NavLink>
      </div>
   )
}