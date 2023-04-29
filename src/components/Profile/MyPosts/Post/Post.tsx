import React, {useState} from 'react';
import avatar from "assets/avatar.png";
import {useAppDispatch} from '../../../../redux/store';
import {deletePost} from '../../../../redux/profile/slice';



type TypePropsPost = {
   id: string
   message: string,
   likesCount: number
}


export const Post = (props: TypePropsPost) => {
   const [count, setCount] = useState<number>(0)
   const [isLiked, setIsLiked] = useState<boolean>(false)

   const dispatch = useAppDispatch()
   // const profilePage = useSelector(selectPosts)

   const onClickLikeHandler = () => {
      setCount(count === 0 ? 1 : count - 1)
      setIsLiked(!isLiked)
   }

   // const removePostHandler = () => {
   //    dispatch(deletePost())
   // }

   const buttonPost = `bg-blue-600 text-white rounded w-16 h-6 ${isLiked ? 'bg-blue-900' : ''}`

   return (
      <div>
         <img className='w-30 h-10 rounded-2xl' src={avatar} alt="avatar"/>
         {props.message}
         <div>
            <button
               onClick={onClickLikeHandler}
               className={buttonPost}
            ><span>like </span>{props.likesCount + count}</button>
            <button
               onClick={() => dispatch(deletePost(props.id))}
               className='ml-3 bg-blue-600 w-11 h-6 text-black'>X</button>
         </div>
      </div>
   );
};
