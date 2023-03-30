import React from 'react';
import avatar from "../../../../assets/avatar.png";

type TypePropsPost = {
   message: string,
   likesCount: number
}

export const Post = (props: TypePropsPost) => {
   return (
      <div>
         <img className='w-30 h-10 rounded-2xl' src={avatar} alt="avatar"/>
         {props.message}
         <div>
            <button><span>like </span>{props.likesCount}</button>
         </div>
      </div>
   );
};
