import React, {useEffect, useState} from 'react';
import {profileUsersAPI} from '../../api/httpClientRequest';
import {ProfileUsersType} from '../../redux/profile/type';
import avatar from '../../assets/avatar.png';
import {Preloader} from '../common/Preloader/Preloader';
import {useParams} from 'react-router-dom';

export const ProfileInfoUser = () => {

   const [profileData, setProfileData] = useState<ProfileUsersType | null>(null);
   const [isLoading, setIsLoading] = useState<boolean>(true)
   const {userId} = useParams<{ userId: string }>()

   useEffect(() => {
      const fetchProfileUsers = async (userId: string) => {
         setIsLoading(true)
         try {
            const response = await profileUsersAPI.getUserProfile(userId);
            setProfileData(response.data)
            setIsLoading(false)
         } catch (error) {
            console.error(error);
         }
      };
      if (userId) {
         fetchProfileUsers(userId).then(r => r);
      }
   }, []);

   return (
      <div>
         {isLoading && <Preloader/>}
         {profileData && <div>
            <img className="w-100 h-100" src={avatar} alt="avatar"/>

            <div className="text-black mt-5">{profileData?.fullName}</div>

            <div className="text-black mt-5">
               Actively looking for jobs: {profileData?.lookingForAJob}
            </div>
            <div className="text-black">
               Description of desired job: {profileData?.lookingForAJobDescription}
            </div>

            <div className="text-black mt-5">About me: {profileData?.aboutMe}</div>

            <div className="mt-5">Contacts</div>
            <div className="text-black">Facebook: {profileData?.facebook}</div>
            <div className="text-black">Website: {profileData?.website}</div>
            <div className="text-black">Twitter: {profileData?.twitter}</div>
            <div className="text-black">Instagram: {profileData?.instagram}</div>
            <div className="text-black">Youtube: {profileData?.youtube}</div>
            <div className="text-black">Github: {profileData?.github}</div>
         </div>
         }
      </div>
   );
};
