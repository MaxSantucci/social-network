import React from 'react';
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

   let postsElement = props.posts.map((p) => {
      return (
         <Post
            key={p.id}
            message={p.message}
            likesCount={p.likesCount}
         />
      )
   })

   return (
      <div>
         <h3 className="p-2.5">My post</h3>
         <div className="p-2.5">
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button className="rounded-lg bg-blue-900 text-amber-50">Add post</button>
            </div>
         </div>
         <div className="mt-2.5">
            {postsElement}
         </div>
      </div>
   );
};
