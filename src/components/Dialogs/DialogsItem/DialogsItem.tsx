import React from 'react';
import {NavLink} from 'react-router-dom';
import {RxAvatar} from 'react-icons/rx';

type PropsDialogsItemType = {
   to: string
   name: string
}

export const DialogsItem = (props: PropsDialogsItemType) => {
   const activeStyle = (navData: { isActive: boolean }) =>
      navData.isActive ? 'text-white w-14 h-6 bg-active rounded-lg' +
         ' hover:bg-blue-300 hover:text-black' : '';

   return (
      <div className="flex items-center rounded-lg">
         <div className="mr-0.5">
            <RxAvatar/>
         </div>
         <NavLink to={props.to} style={{
            width: '60px',
            display: 'flex',
            justifyContent: 'center'
         }} className={activeStyle}>{props.name}</NavLink>
      </div>
   )
}