import React, {ChangeEvent, useState} from 'react';
import {ActionsType, addMessageActionCreator} from '../../redux/state';
import {getMessagesByUserId} from '../../selectors/dialogs';
import {useParams} from 'react-router-dom';

type PropsTypeChat = {
   dispatch: (action: ActionsType) => void
}

const Chat = (props: PropsTypeChat) => {
   let [message, setMessage] = useState('')

   let {userId} = useParams()

   const messages = getMessagesByUserId(userId as string, props.state.dialogsPage)

   const onChangeMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(event.currentTarget.value)
   }

   const onAddMessageHandler = () => {
      props.dispatch(addMessageActionCreator(userId as string, message))
      setMessage('')
      // console.log(userId)
   }

   return (
      <div className="p-3 col-span-10 text-black">
         {messagesElements()}
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