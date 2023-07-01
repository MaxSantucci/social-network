import React from 'react';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import ProfileAbout from 'components/Profile/ProfileAbout/ProfileAbout';

export const Profile = React.memo(() => {
   return (
      <div className="bg-gray-100 text-custom" style={{ gridArea: 'c' }}>
         <ProfileInfo />
         <ProfileAbout />
      </div>
   );
});
