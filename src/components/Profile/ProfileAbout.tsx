import React from 'react';
import {MyPosts} from 'components/Profile/MyPosts/MyPosts';
import About from 'components/Profile/About';

const ProfileAbout = () => {
   return (
      <div className="flex">
         <About/>
         <MyPosts/>
      </div>
   );
};

export default ProfileAbout;