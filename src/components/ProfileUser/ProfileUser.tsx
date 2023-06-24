import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectProfileUsers, selectStatusProfile} from 'redux/profile/selectors';
import {fetchProfileUsers, fetchStatusProfile} from 'redux/profile/asyncAction';
import avatar from 'assets/avatar.png';


export const ProfileUser = () => {
   const {userId} = useParams<{ userId: string }>();
   console.log(userId)
   const dispatch = useAppDispatch();
   const profileData = useAppSelector(selectProfileUsers);
   const status = useAppSelector(selectStatusProfile)

   useEffect(() => {
      dispatch(fetchProfileUsers({userId}))
      dispatch(fetchStatusProfile({userId}))
   }, [userId]);

   return (
      <div>
         <div className="flex">
            <div>
               <img className="w-100 h-120" src={avatar} alt="avatar"/>
            </div>
            <div className="ml-4">
               <div className="text-2xl text-black">{profileData.fullName}</div>
               <div className="text-xs text-black h-4">{status}</div>
               <div className="text-sm text-black mt-2">
                  Actively looking for jobs: {profileData.lookingForAJob}
               </div>
               <div className="text-sm text-black">
                  Description of desired
                  job: {profileData.lookingForAJobDescription}
               </div>
               <div className="text-sm text-black mt-2">About
                  me: {profileData.aboutMe}</div>
            </div>
         </div>
         <div className="mt-5">Contact info:</div>
         <div className="text-gray-900 flex">Facebook:
            <a
               href={profileData.contacts.facebook}
               className="text-black font-normal ml-2"
               target="_blank"
            >
               {profileData.contacts.facebook}
            </a>
         </div>
         <div className="text-black">Website:
            <a
               href={profileData.contacts.website}
               className="text-black font-normal ml-2"
               target="_blank"
            >
               {profileData.contacts.website}
            </a>
         </div>
         <div className="text-black">Twitter:
            <a
               href={profileData.contacts.twitter}
               className="text-black font-normal ml-2"
               target="_blank"
            >
               {profileData.contacts.twitter}
            </a>
         </div>
         <div className="text-black">Instagram:
            <a
               href={profileData.contacts.instagram}
               className="text-black font-normal ml-2"
               target="_blank"
            >
               {profileData.contacts.instagram}
            </a>
         </div>
         <div className="text-black">Youtube:
            <a
               href={profileData.contacts.youtube}
               className="text-black font-normal ml-2"
               target="_blank"
            >
               {profileData.contacts.youtube}
            </a>
         </div>
         <div className="text-black">Github:
            <a
               href={profileData.contacts.github}
               className="text-black font-normal ml-2"
               target="_blank"
            >
               {profileData.contacts.github}
            </a>
         </div>
      </div>
   );
};
