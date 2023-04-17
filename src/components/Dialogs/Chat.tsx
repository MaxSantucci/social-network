import React, {ChangeEvent, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Messages} from './Messages/Messages';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'redux/store';
import {addMessage} from 'redux/dialogs/slice';
import {ADD_MESSAGE} from 'redux/dialogs/type';
import {getMessagesByUserId} from 'redux/dialogs/selectors';

const Chat = () => {
   const [message, setMessage] = useState('')
   const [error, setError] = useState<string | null>(null)

   const dispatch = useAppDispatch()
   let {userId} = useParams()

   const messages = useSelector(getMessagesByUserId(userId));

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

   const keyUpHandler = (e: any) => {
      setError(null)
      if(e.code === 'Enter') {
         dispatch(addMessage({type: ADD_MESSAGE, userId, message}))
         setMessage('')
      }
   }

   return (
      <div className="p-3 col-span-10 text-black">
         {messages && messages.map(m => (
            <Messages key={m.id} message={m.message} isMe={m.isMe}/>
         ))}
         <div className="flex flex-col items-center pt-2">
                  <textarea
                     value={message}
                     onChange={onChangeMessageHandler}
                     onKeyUp={keyUpHandler}
                     className={error ? 'border-red-500 border-solid border-2' : ''}
                  ></textarea>
            <button
               className="mt-1 bg-black text-white"
               onClick={onAddMessageHandler}
            >
               Add message
            </button>
            {error && <div className='text-red-700'>{error}</div>}
         </div>
      </div>
   );
};

export default Chat;