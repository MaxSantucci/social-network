import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectProfileUsers, selectStatusProfile} from 'redux/profile/selector';
import {fetchProfileUsers, fetchStatusProfile} from 'redux/profile/asyncAction';
import avatar from 'assets/avatar.png';
import {BiSolidContact} from 'react-icons/bi';
import {
   AiFillFacebook,
   AiFillGithub,
   AiFillTwitterSquare,
   AiOutlineInstagram,
   AiOutlineYoutube
} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';

export const ProfileUser = () => {
   const {userId} = useParams<{ userId: string }>();

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
               <img
                  className="w-160 h-160 rounded-full"
                  src={profileData.photos.large ? profileData.photos.large : avatar}
                  alt="avatar"/>
            </div>
            <div className="ml-4">
               <div className="text-2xl text-black">{profileData.fullName}</div>
               <div className="text-xs text-black h-4">{status}</div>
               <div className="text-sm text-black mt-2">
                  Actively looking for
                  jobs: {profileData.lookingForAJob ? 'yes' : 'no'}
               </div>
               {profileData.lookingForAJob &&
                  <div className="text-sm text-black">
                     My professional skills: {profileData.lookingForAJobDescription}
                  </div>}
               <div className="text-sm text-black mt-2">About
                  me: {profileData.aboutMe}</div>
            </div>
         </div>
         <div className="mt-5 flex items-center">
            <div className="mr-1"><BiSolidContact/></div>
            Contact info:
         </div>
         <div className="ml-2 flex">
            <div className="mr-2">
               <div className="text-gray-900 flex items-center">
                  <AiFillFacebook className='mr-1'/> Facebook:
               </div>
               <div className="text-gray-900 flex items-center">
                  <CgWebsite className='mr-1'/> Website:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiFillTwitterSquare className='mr-1'/> Twitter:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiOutlineInstagram className='mr-1'/> Instagram:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiOutlineYoutube className='mr-1'/> Youtube:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiFillGithub className='mr-1'/> Github:
               </div>
            </div>
            <div className="flex flex-col">
               <a href={`https://${profileData.contacts.facebook}`}
                  target="_blank" rel="noopener noreferrer">
                  {profileData.contacts.facebook}
               </a>
               <a href={`https://${profileData.contacts.website}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileData.contacts.website}
               </a>
               <a href={`https://${profileData.contacts.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileData.contacts.twitter}
               </a>
               <a href={`https://${profileData.contacts.instagram}`}
                  target="_blank" rel="noopener noreferrer">
                  {profileData.contacts.instagram}
               </a>
               <a href={`https://${profileData.contacts.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileData.contacts.youtube}
               </a>
               <a href={`https://${profileData.contacts.github}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileData.contacts.github}
               </a>
            </div>
         </div>
      </div>
   );
};
