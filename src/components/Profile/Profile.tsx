import React from 'react';
import {MyPosts, PostsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType} from '../../redux/state';

type ProfilePropsType = {
   state: {
      posts: Array<PostsType>,
   },
   dispatch: (action: ActionsType) => void
};

export const Profile = (props: ProfilePropsType) => {
   return (
      <div className='bg-gray-100 text-custom' style={{ gridArea: "c" }}>
         <ProfileInfo />
         <MyPosts
            posts={props.state.posts}
            dispatch={props.dispatch}
         />
      </div>
   );
};
