import Reactи from 'react';
import {Outlet, useParams} from 'react-router-dom';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {ActionsType} from '../../redux/store';


type DialogsType = {
   id: string
   name: string
   messages: Array<MessagesType>
}

type MessagesType = {
   id: string
   message: string
}

type PropsTypeDialogs = {
   state: {
      dialogs: Array<DialogsType>
   }
   dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: PropsTypeDialogs) => {
   // const state = props.store.getState().dialogsPage
   let {userId} = useParams()
   console.log(props)
   let dialogsElements = props.state.dialogs.map((el) => {
      return (
         <DialogsItem
            key={el.id}
            to={`/dialogs/${el.id}`}
            name={el.name}
         />
      )
   })

   console.log(props.state)
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
