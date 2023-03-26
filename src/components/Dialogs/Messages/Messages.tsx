import React from 'react';

type PropsTypeMessages = {
   message: string
}

export const Messages = (props: PropsTypeMessages) => {
   return (
      <div>{props.message}</div>
   )
}
