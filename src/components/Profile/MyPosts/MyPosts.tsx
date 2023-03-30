import React, {ChangeEvent, useState} from 'react';
import {Post} from './Post/Post';

export type PostsType = {
   id: number
   message: string
   likesCount: number
}

type MyPostsTypeProps = {
      posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsTypeProps) => {

   let [post, setPost] = useState('')

   let postsElement = props.posts.map((p) => {
      return (
         <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
         />
      )
   })

   const onClickAddPostHandler = () => {
      if (post.trim()) {
         const newPost: PostsType = {
            id: props.posts.length + 1,
            message: post,
            likesCount: 0,
         }
         // let newAdd = [newPost, ...props.posts]
         props.posts.unshift(newPost);
         setPost('');
      }
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
                  onClick={onClickAddPostHandler}
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
