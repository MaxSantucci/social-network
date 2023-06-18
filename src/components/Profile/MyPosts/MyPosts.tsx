import React from 'react';
import {Post} from './Post/Post';
import {addPost} from 'redux/profile/slice';
import {selectPosts} from 'redux/profile/selectors';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {Navigate} from 'react-router-dom';
import {selectIsAuth} from 'redux/auth/selector';
import {AddMessageForm} from 'components/Dialogs/Chat/AddMessageForm';


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

   if(!isAuth) return <Navigate to='/login'/>

   return (
      <div>
         <h3 className="p-2.5">My post</h3>
         <div className="p-2.5">
            <AddMessageForm
               addPostHandler={addPostHandler}
               textButton='Add post'
            />
         </div>
         <div className="mt-2.5">
            {postsElement}
         </div>
      </div>
   );
};
