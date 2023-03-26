import React from 'react';
import {NavLink} from 'react-router-dom';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';

type DialogsType = {
   id: number
   name: string
}

type MessagesType = {
   message: string
}

type PropsTypeDialogs = {
   state: {
      dialogs: Array<DialogsType>
      messages: Array<MessagesType>
   }
}

export const Dialogs = (props: PropsTypeDialogs) => {

   let dialogsElement = props.state.dialogs.map((el) => {
      return (
         <DialogsItem
            key={el.id}
            to={`/dialogs/${el.id}`}
            name={el.name}
         />
      )
   })

   let messagesElement = props.state.messages.map((element,id) => {
      return(
         <Messages key={element.message} message={element.message}/>
      )
   })

   return (
      <div className="grid grid-cols-12">
         <div className="p-3 col-span-2">
            {dialogsElement}
         </div>
         <div className="p-3 col-span-10 text-black">
            {messagesElement}
         </div>
      </div>
   );
};
