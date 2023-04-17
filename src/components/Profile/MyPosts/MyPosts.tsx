import React, {ChangeEvent, useState} from 'react';
import {Post} from './Post/Post';
import {useDispatch, useSelector} from 'react-redux';
import {addPost} from '../../../redux/profile/slice';
import {selectPosts} from '../../../redux/profile/selectors';
import {useAppDispatch} from '../../../redux/store';


export const MyPosts = () => {
   let [post, setPost] = useState<string>("")
   const dispatch = useAppDispatch()
   const posts = useSelector(selectPosts);
   // console.log(useAppDispatch)
   let postsElement = posts.map((p) => {
      return (
         <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
         />
      )
   })

   const addPostHandler = () => {
      dispatch(addPost(post))
      setPost('')
   }

   const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setPost(event.currentTarget.value)
   }

   return (
      <div>
         <h3 className="p-2.5">My post</h3>
         <div className="p-2.5">
            <div>
               <textarea value={post} onChange={onPostChangeHandler}></textarea>
            </div>
            <div>
               <button
                  onClick={addPostHandler}
                  className="rounded-lg bg-blue-900 text-amber-50"
               >
                  Add post
               </button>
            </div>
         </div>
         <div className="mt-2.5">
            {postsElement}
         </div>
      </div>
   );
};
