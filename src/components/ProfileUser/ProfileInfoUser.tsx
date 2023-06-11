import React, {useEffect} from 'react';
import avatar from '../../assets/avatar.png';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { selectProfileUsers } from '../../redux/profile/selectors';
import {fetchProfileUsers} from '../../redux/profile/asyncAction';
import {useParams} from 'react-router-dom';

export const ProfileInfoUser = () => {
   const { userId } = useParams<{ userId: string }>();
   const dispatch = useAppDispatch();
   const profileData = useAppSelector(selectProfileUsers);


   useEffect(() => {
      dispatch(fetchProfileUsers({userId}))
   }, [userId, dispatch]);

   return (
      <div>
         <img className="w-100 h-100" src={avatar} alt="avatar" />

         <div className="text-2xl text-black mt-5">{profileData.fullName}</div>

         <div className="text-black mt-5">
            Actively looking for jobs: {profileData.lookingForAJob}
         </div>
         <div className="text-black">
            Description of desired job: {profileData.lookingForAJobDescription}
         </div>

         <div className="text-black mt-5">About me: {profileData.aboutMe}</div>

         <div className="mt-5">Contacts</div>
         <div className="text-black">Facebook: {profileData.contacts.facebook}</div>
         <div className="text-black">Website: {profileData.contacts.website}</div>
         <div className="text-black">Twitter: {profileData.contacts.twitter}</div>
         <div className="text-black">Instagram: {profileData.contacts.instagram}</div>
         <div className="text-black">Youtube: {profileData.contacts.youtube}</div>
         <div className="text-black">Github: {profileData.contacts.github}</div>
      </div>
   );
};