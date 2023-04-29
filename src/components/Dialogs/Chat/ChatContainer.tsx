import React, {ChangeEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from 'redux/store';
import {addMessage} from 'redux/dialogs/slice';
import {ADD_MESSAGE} from 'redux/dialogs/type';
import Chat from './Chat';


// debugger
const ChatContainer = () => {
   const [message, setMessage] = useState<string>('')
   const [error, setError] = useState<string | null>(null)

   const dispatch = useAppDispatch()
   const {userId} = useParams()
   const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.currentTarget.value)
   }

   const onAddMessageHandler = () => {
      if(message.trim() !== '') {
         dispatch(addMessage({type: ADD_MESSAGE, userId, message}))
         setMessage('')
      } else {
         setError('Write message')
      }
   }

   const keyUpHandler = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      setError(null)
      if(e.code === 'Enter') {
         dispatch(addMessage({type: ADD_MESSAGE, userId, message}))
         setMessage('')
      }
   }

   return (
      <Chat
         message={message}
         error={error}
         onChangeMessageHandler={onChangeMessageHandler}
         onAddMessageHandler={onAddMessageHandler}
         keyUpHandler={keyUpHandler}
      />
   );
};

export default ChatContainer;