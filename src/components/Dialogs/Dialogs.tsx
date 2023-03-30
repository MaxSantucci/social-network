import React, {ChangeEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Messages} from './Messages/Messages';

type DialogsType = {
   id: number
   name: string
}

type MessagesType = {
   id: number
   message: string
}

type PropsTypeDialogs = {
   state: {
      dialogs: Array<DialogsType>
      messages: Array<MessagesType>
   }
}

export const Dialogs = (props: PropsTypeDialogs) => {

   let [message, setMessage] = useState("")

   let dialogsElement = props.state.dialogs.map((el) => {
      return (
         <DialogsItem
            key={el.id}
            to={`/dialogs/${el.id}`}
            name={el.name}
         />
      )
   })

   let messagesElement = props.state.messages.map((element) => {
      return(
         <Messages key={element.id} message={element.message}/>
      )
   })

   const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.currentTarget.value)
   }

   const onAddMessageHandler = () => {
      if(message.trim()) {
         let newMessage: MessagesType = {
            id: props.state.messages.length + 1,
            message: message,
         }
         props.state.messages.push(newMessage)
         setMessage('')
      }
   }

   return (
      <div className="grid grid-cols-12">
         <div className="p-3 col-span-2">
            {dialogsElement}
         </div>
         <div className="p-3 col-span-10 text-black">
            {messagesElement}
            <div className='flex flex-col items-center pt-2'>
               <textarea
                  value={message}
                  onChange={onChangeMessageHandler}
               ></textarea>
               <button
                  className='mt-1 bg-black text-white'
                  onClick={onAddMessageHandler}
               >Add message</button>
            </div>
         </div>
      </div>
   );
};
