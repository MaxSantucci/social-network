import React from 'react';
import {MyPosts} from 'components/Profile/ProfileAbout/MyPosts/MyPosts';
import About from 'components/Profile/ProfileAbout/About/About';

const ProfileAbout = () => {
   return (
      <div className="grid grid-cols-3 p-5f">
         <About/>
         <MyPosts/>
      </div>
   );
};

export default ProfileAbout;