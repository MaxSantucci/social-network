import React, {useEffect} from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {useNavigate} from 'react-router-dom';

export const Profile = () => {
   // const navigate = useNavigate();
   // const userId = 2; // Replace with the actual userId value
   // useEffect(() => {
   //    if (userId) {
   //       navigate(`/profile/${userId}`);
   //    }
   // }, [userId])

   return (
      <div className='bg-gray-100 text-custom' style={{ gridArea: "c" }}>
         <ProfileInfo />
         <MyPosts />
      </div>
   );
};
