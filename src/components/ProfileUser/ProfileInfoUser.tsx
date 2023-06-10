import React, {useEffect, useState} from 'react';
import avatar from '../../assets/avatar.png';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { selectProfileUsers } from '../../redux/profile/selectors';
import {fetchProfileUser} from '../../redux/users/slice';

export const ProfileInfoUser = () => {
   //
   const dispatch = useAppDispatch();
   const profileData = useAppSelector(selectProfileUsers);

   // const [profileData, setProfileData] = useState<ProfileUsersType | null>(null);


   useEffect(() => {
      dispatch(fetchProfileUser())
   }, [dispatch]);


   return (
      <div>
         <img className="w-100 h-100" src={avatar} alt="avatar" />

         <div className="text-black mt-5">{profileData?.fullName}</div>

         <div className="text-black mt-5">
            Actively looking for jobs: {profileData?.lookingForAJob}
         </div>
         <div className="text-black">
            Description of desired job: {profileData?.lookingForAJobDescription}
         </div>

         <div className="text-black mt-5">About me: {profileData?.aboutMe}</div>

         <div className="mt-5">Contacts</div>
         <div className="text-black">Facebook: {profileData?.contacts.facebook}</div>
         <div className="text-black">Website: {profileData?.contacts.website}</div>
         <div className="text-black">Twitter: {profileData?.contacts.twitter}</div>
         <div className="text-black">Instagram: {profileData?.contacts.instagram}</div>
         <div className="text-black">Youtube: {profileData?.contacts.youtube}</div>
         <div className="text-black">Github: {profileData?.contacts.github}</div>
      </div>
   );
};

// const fetchProfileUser = async (userId: string) => {
//    try {
//       const response = await profileUsersAPI.getUserProfile(userId);
//       setProfileData(response.data)
//    } catch (error) {
//       console.error(error);
//    }
// };
// if (userId) {
//    fetchProfileUsers(userId).then(r => r);
// }