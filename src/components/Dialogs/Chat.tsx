import React, {ChangeEvent, useState} from 'react';
import {ActionsType, DialogsType} from '../../redux/store';
import {getMessagesByUserId} from '../../selectors/dialogs';
import {useParams} from 'react-router-dom';
import {Messages} from './Messages/Messages';
import {addMessageActionCreator} from '../../redux/dialogs-reducer';

type PropsTypeChat = {
   dialogs: DialogsType[]
   dispatch: (action: ActionsType) => void
}

const Chat = (props: PropsTypeChat) => {
   let [message, setMessage] = useState('')

   let {userId} = useParams()

   const messages = getMessagesByUserId(userId as string, props.dialogs)

   console.log(messages)

   const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.currentTarget.value)
   }

   const onAddMessageHandler = () => {
      props.dispatch(addMessageActionCreator(userId as string, message))
      setMessage('')
   }

   return (
      <div className="p-3 col-span-10 text-black">
         {messages && messages.map((message) => (
            <Messages key={message.id} message={message.message}/>
         ))}
         <div className="flex flex-col items-center pt-2">
                  <textarea
                     value={message}
                     onChange={onChangeMessageHandler}
                  ></textarea>
            <button
               className="mt-1 bg-black text-white"
               onClick={onAddMessageHandler}
            >
               Add message
            </button>
         </div>
      </div>
   );
};

export default Chat;