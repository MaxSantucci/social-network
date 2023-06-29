import React from 'react';
import {Messages} from '../Messages/Messages';
import {getMessagesByUserId} from 'redux/dialogs/selector';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {addMessage} from 'redux/dialogs/slice';
import {ADD_MESSAGE} from 'redux/dialogs/type';
import {AddMessageForm} from 'components/Form/AddMessageForm';


export const Chat = () => {
   const {userId} = useParams()
   // console.log(userId)
   const dispatch = useAppDispatch()
   const messages = useAppSelector(getMessagesByUserId(userId));

   const addMessageHandler = (message: string) => {
      dispatch(addMessage({type: ADD_MESSAGE, userId, message}))
   }

   return (
      <div className="p-3 col-span-9 text-black">
         {messages && messages.map(m => (
            <Messages key={m.id} message={m.message} isMe={m.isMe}/>
         ))}
         <div className='flex justify-center'>
            <AddMessageForm
               addMessageHandler={addMessageHandler}
               textButton='Add message'
               placeholder='Write message'
            />
         </div>
      </div>
   );
};