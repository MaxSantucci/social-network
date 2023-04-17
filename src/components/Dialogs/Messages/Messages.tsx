import React from 'react';

type PropsTypeMessages = {
   message: string
   isMe: boolean
}

export const Messages = (props: PropsTypeMessages) => {
   return (
      <div className={props.isMe ? "flex justify-end" : ''}>
         <div>{props.message}</div>
      </div>
   )
}
