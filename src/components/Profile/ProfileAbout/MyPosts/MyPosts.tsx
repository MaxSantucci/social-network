import React from 'react';
import {Post} from 'components/Profile/ProfileAbout/MyPosts/Post/Post';
import {addPost} from 'redux/profile/slice';
import {selectPosts} from 'redux/profile/selector';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {Navigate} from 'react-router-dom';
import {selectIsAuth} from 'redux/auth/selector';
import {AddMessageForm} from 'components/Form/AddMessageForm';


export const MyPosts = () => {
   const dispatch = useAppDispatch()
   const posts = useAppSelector(selectPosts);
   const isAuth = useAppSelector(selectIsAuth)

   let postsElement = posts.map((p) => {
      return (
         <Post
            key={p.id}
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
         />
      )
   })

   const addPostHandler = (post: string) => {
      dispatch(addPost(post))
   }

   if(!isAuth) {
      return <Navigate to='/login'/>
   }

   return (
      <div className='col-span-2'>
         <div className="w-400 p-2.5 flex justify-center">
            <AddMessageForm
               addPostHandler={addPostHandler}
               textButton='Add post'
               placeholder="What's on your mind?"
            />
         </div>
         <div className="mt-2.5 flex">
            <div className=''>
               {postsElement}
            </div>
         </div>
      </div>
   );
};
