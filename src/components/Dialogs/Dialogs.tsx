import React from 'react';
import {Navigate, Outlet, useParams} from 'react-router-dom';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {selectDialogs} from 'redux/dialogs/selectors';
import {useAppSelector} from '../../redux/store';
import {selectIsAuth} from '../../redux/auth/selector';

export const Dialogs = () => {
   let {userId} = useParams()

   const dialogs = useAppSelector(selectDialogs)
   const isAuth = useAppSelector(selectIsAuth)

   let dialogsElements = dialogs.map((el) => {
      return (
         <DialogsItem
            key={el.id}
            to={`/dialogs/${el.id}`}
            name={el.name}
         />
      )
   })

   if(!isAuth) return <Navigate to='/login'/>

   return (
      <div className="grid grid-cols-12">
         <div className="p-3 col-span-2">
            {dialogsElements}
         </div>
         <Outlet/>
         {!userId ? (
            <div className="p-3 text-center text-2xl col-span-10 text-black">
               Please select a dialog to start messaging.
            </div>
         ) : null}
      </div>
   );
};
