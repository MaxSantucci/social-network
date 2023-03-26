import React from 'react';
import {NavLink} from 'react-router-dom';

type PropsDialogsItemType = {
   to: string
   name: string

}

export const DialogsItem = (props: PropsDialogsItemType) => {
   const activeStyle = (navData: { isActive: boolean }) =>
      navData.isActive ? 'text-white rounded-lg bg-active' : '';

   return (
      <div>
         <NavLink to={props.to} className={activeStyle}>{props.name}</NavLink>
      </div>
   )
}