import React, {
   useEffect, useRef,
   useState
} from 'react';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {RxAvatar} from 'react-icons/rx';
import {selectMyProfile} from 'redux/profile/selector';
import {BsThreeDots} from 'react-icons/bs';
import {AiFillLike, AiOutlineDelete, AiOutlineLike} from 'react-icons/ai';
import {FaRegCommentDots} from 'react-icons/fa';
import {RiSendPlaneFill} from 'react-icons/ri';
import {BiRepost} from 'react-icons/bi';
import {deletePost} from 'redux/profile/slice';
import {IoCloseOutline} from 'react-icons/io5';

type TypePropsPost = {
   id: string
   message: string,
   likesCount: number
}

export const Post = (props: TypePropsPost) => {
   const profileMyData = useAppSelector(selectMyProfile)

   const [count, setCount] = useState<number>(0)
   const [isLiked, setIsLiked] = useState<boolean>(false)
   const [modalOpen, setModalOpen] = useState<boolean>(false)

   const dispatch = useAppDispatch()

   const onClickLikeHandler = () => {
      setCount(count === 0 ? 1 : count - 1)
      setIsLiked(!isLiked)
   }

   const toggleModal = () => {
      setModalOpen(!modalOpen)
   }

   const deletePostHandler = () => {
      dispatch(deletePost(props.id))
   }

   // function useOutsideClick(callback: () => void) {
   //    const ref = useRef<HTMLDivElement>(null);
   //
   //    useEffect(() => {
   //       const handleClick = (event: MouseEvent) => {
   //          if (ref.current && !ref.current.contains(event.target as Node)) {
   //             callback();
   //          }
   //       };
   //
   //       document.addEventListener('click', handleClick);
   //
   //       return () => {
   //          document.removeEventListener('click', handleClick);
   //       };
   //    }, []);
   //
   //    return ref;
   // }

   return (
      <div className="w-400 pt-5">
         <div className="w-400 pt-5">
            <div className="flex justify-between">
               <div className="flex items-center mb-1">
                  <RxAvatar className="w-7 h-7 mr-1"/>
                  <div>{profileMyData.fullName}</div>
               </div>
               <div className="relative">
                  <button className="flex items-center"
                          onClick={toggleModal}
                  >
                     <BsThreeDots/>
                  </button>
                  {modalOpen && (
                     <div
                        className="w-100 bg-gray-100 absolute top-0 right-0 p-4 rounded-lg shadow">
                        <button className="flex items-center"
                                onClick={deletePostHandler}>
                           <div className="mr-1"><AiOutlineDelete/></div>
                           <p>Delete</p></button>
                        <button className="flex items-center"
                                onClick={toggleModal}>
                           <div className="mr-1"><IoCloseOutline/></div>
                           Close
                        </button>
                     </div>
                  )}
               </div>
            </div>
         </div>
         <hr className="w-400 border-gray-300 mb-1"/>
         {props.message}
         <hr className="w-400 border-gray-300 mt-1 mb-2"/>
         <div className="grid grid-cols-4">
            <button
               onClick={onClickLikeHandler}
               className="h-30 flex items-center justify-center hover:bg-gray-300 hover:rounded-lg">
               <div className="mr-1">{isLiked ? <AiFillLike/> :
                  <AiOutlineLike/>}</div>
               <div className="mr-1">Like</div>
               {props.likesCount + count}
            </button>
            <button
               className="flex items-center justify-center hover:bg-gray-300 hover:rounded-lg">
               <div className="mr-1"><FaRegCommentDots/></div>
               <div>Comment</div>
            </button>
            <button
               className="flex items-center justify-center hover:bg-gray-300 hover:rounded-lg">
               <div className="mr-1"><BiRepost/></div>
               <div>Repost</div>
            </button>
            <button
               className="flex items-center justify-center hover:bg-gray-300 hover:rounded-lg">
               <div className="mr-1"><RiSendPlaneFill/></div>
               <div>Send</div>
            </button>
         </div>
      </div>
   );
};
