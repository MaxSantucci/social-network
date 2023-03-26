import React from 'react';
import {MyPosts, PostsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

type ProfilePropsType = {
   state: {
      posts: Array<PostsType>,
   },
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className='bg-gray-100 text-custom' style={{ gridArea: "c" }}>
         <ProfileInfo />
         <MyPosts posts={props.state.posts}/>
      </div>
   );
};
