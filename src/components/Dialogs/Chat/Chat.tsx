import React, {ChangeEvent} from 'react';
import {Messages} from '../Messages/Messages';
import {useSelector} from 'react-redux';
import {getMessagesByUserId} from '../../../redux/dialogs/selectors';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../../redux/store';

interface ChatProps {
   message: string;
   error: string | null;
   onChangeMessageHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void;
   onAddMessageHandler: () => void;
   keyUpHandler: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Chat: React.FC<ChatProps> = ({
                                      message,
                                      error,
                                      onChangeMessageHandler,
                                      onAddMessageHandler,
                                      keyUpHandler,
                                   }) => {
   const {userId} = useParams()

   const messages = useAppSelector(getMessagesByUserId(userId));

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