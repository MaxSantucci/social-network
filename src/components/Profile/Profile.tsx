import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {
   return (
      <div className='bg-gray-100 text-custom' style={{ gridArea: "c" }}>
         <ProfileInfo />
         <MyPosts />
      </div>
   );
};
