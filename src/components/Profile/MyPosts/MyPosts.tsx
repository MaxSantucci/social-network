import React, {ChangeEvent, MouseEvent, useState} from 'react';
import {Post} from './Post/Post';
import {v1} from 'uuid';
import {ActionsType, addPostActionCreator} from '../../../redux/state';

export type PostsType = {
   id: string
   message: string
   likesCount: number
}

type MyPostsTypeProps = {
   posts: Array<PostsType>
   dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsTypeProps) => {

   let [post, setPost] = useState<string>("")

   let postsElement = props.posts.map((p) => {
      return (
         <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
         />
      )
   })

   const addPostHandler = () => {
      props.dispatch(addPostActionCreator(post))
      setPost('')
      console.log(post)
   }

   const onPostChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setPost(event.currentTarget.value)
   }

   return (
      <div>
         <h3 className="p-2.5">My post</h3>
         <div className="p-2.5">
            <div>
               <textarea
                  value={post}
                  onChange={onPostChangeHandler}
               >
               </textarea>
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
