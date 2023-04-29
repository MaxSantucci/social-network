import Reactи from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {useSelector} from 'react-redux';
import {selectDialogs} from 'redux/dialogs/selectors';
import {useAppSelector} from '../../redux/store';

export const Dialogs = () => {
   let {userId} = useParams()

   const dialogs = useAppSelector(selectDialogs)

   let dialogsElements = dialogs.map((el) => {
      return (
         <DialogsItem
            key={el.id}
            to={`/dialogs/${el.id}`}
            name={el.name}
         />
      )
   })

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
