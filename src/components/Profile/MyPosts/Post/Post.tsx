import React, {useState} from 'react';
import avatar from "../../../../assets/avatar.png";

type TypePropsPost = {
   message: string,
   likesCount: number
}

export const Post = (props: TypePropsPost) => {
   const [count, setCount] = useState(0)

   const onClickLikeHandler = () => {
      setCount(count === 0 ? 1 : count - 1)
   }

   return (
      <div>
         <img className='w-30 h-10 rounded-2xl' src={avatar} alt="avatar"/>
         {props.message}
         <div>
            <button onClick={onClickLikeHandler} className='bg-blue-600 text-white rounded w-16 h-6'><span>like </span>{props.likesCount + count}</button>
         </div>
      </div>
   );
};
