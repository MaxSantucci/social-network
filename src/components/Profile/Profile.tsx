import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import ProfileAbout from 'components/Profile/ProfileAbout';

export const Profile = () => {
   return (
      <div className='bg-gray-100 text-custom' style={{ gridArea: "c" }}>
         <ProfileInfo />
         <ProfileAbout/>
      </div>
   );
};
