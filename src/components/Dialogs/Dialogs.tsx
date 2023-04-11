import React, {ChangeEvent, useState} from 'react';
import {Route, Routes, useParams} from 'react-router-dom';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';
import {ActionsType, addMessageActionCreator} from '../../redux/state';
import Chat from './Chat';

type DialogsType = {
   id: string
   name: string
   messages: Array<MessagesType>
}

type MessagesType = {
   id: string
   message: string
   // userId: string
}

type PropsTypeDialogs = {
   state: {
      dialogs: Array<DialogsType>
   }
   dispatch: (action: ActionsType) => void
}

export const Dialogs = (props: PropsTypeDialogs) => {
   let {userId} = useParams()

   let dialogsElements = props.state.dialogs.map((el) => {
      return (
         <DialogsItem
            key={el.id}
            to={`/dialogs/${el.id}`}
            name={el.name}
         />
      )
   })

   // function messagesElements() {
   //    const userDialog = userId ? props.state.dialogs.find(d => d.id === userId) : null
   //    if (userDialog) {
   //       return userDialog.messages.map((message) => (
   //          <Messages key={message.id} message={message.message}/>
   //       ))
   //    }
   //    return null
   // }

   console.log(userId)
   return (
      <div className="grid grid-cols-12">
         <div className="p-3 col-span-2">
            {dialogsElements}
         </div>
         <Routes>
            <Route path="/dialogs/:userId"/>
         </Routes>
         {userId ? (
            <Chat  dispatch={props.dispatch}/>
         ) : null}
         {!userId ? (
            <div className="p-3 col-span-10 text-black">
               Please select a dialog to start messaging.
            </div>
         ) : null}
      </div>
   );
};
