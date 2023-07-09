import React, {ChangeEvent, useEffect, useState} from 'react';
import avatar from '../../../assets/avatar.png';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectMyProfile, selectStatusProfile} from 'redux/profile/selector';

import {
   fetchMyProfileUsers,
   fetchSavePhoto,
   fetchStatusProfile,
   fetchUpdateStatus
} from 'redux/profile/asyncAction';
import {MdAddPhotoAlternate} from 'react-icons/md';
import {
   EditProfileModal
} from 'components/Profile/EditProfileModal/EditProfileModal';

export const ProfileInfo = () => {
   const dispatch = useAppDispatch()
   const status = useAppSelector(selectStatusProfile) || ''
   const profileMyData = useAppSelector(selectMyProfile)

   const userId = useAppSelector((state) => state.auth.data?.id)

   const [editMode, setEditMode] = useState<boolean>(false)
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [newStatus, setNewStatus] = useState<string>(status)

   useEffect(() => {
      setNewStatus(status)
   }, [status])

   useEffect(() => {
      if(userId) {
         dispatch(fetchMyProfileUsers({userId: userId.toString()}))
         dispatch(fetchStatusProfile({userId: userId.toString()}))
      }
   }, [userId, dispatch])

   const activateEditModeHandler = () => {
      setEditMode(true)
   }

   const deactivateEditModeHandler = () => {
      setEditMode(false)
      dispatch(fetchUpdateStatus(newStatus))
   }

   const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setNewStatus(e.currentTarget.value)
   }

   const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
      if(e.target.files && e.target.files.length) {
         dispatch(fetchSavePhoto(e.target.files[0]))
      }
   }

   const openModal = () => {
      setIsModalOpen(true);
   };

   return (
      <div className="p-2.5 flex">
        <div className='relative inline-block group'>
           <img
              className="w-160 h-160 rounded-full"
              src={profileMyData.photos.large ? profileMyData.photos.large : avatar}
              alt="avatar"/>
           <label htmlFor="file-upload" className="custom-file-upload cursor-pointer absolute right-2 top-3/4">
              <div className="flex justify-center bg-gray-300 rounded-full items-center w-8 h-8">
                 <MdAddPhotoAlternate className='w-6 h-6' />
              </div>
           </label>
           <input
              id="file-upload"
              type="file"
              className="hidden"
              onChange={onMainPhotoSelected}
           />
        </div>
         <div className="ml-4">
            <div className="text-2xl text-black">{profileMyData.fullName}</div>
            {/*<div className="text-xs text-black h-4">{status}</div>*/}
            <div>
               {editMode
                  ? <div>
                     <input
                        value={newStatus}
                        onChange={onChangeStatusHandler}
                        onBlur={deactivateEditModeHandler}
                        type="text"
                        data-testid="status-input"/>
                  </div>
                  : <div>
               <span
                  className='text-black text-1xl'
                  onDoubleClick={activateEditModeHandler}
               >{status ? ' ' + status : ' -'}</span>
                  </div>
               }
            </div>
            <div className="text-sm text-black mt-2">
               Actively looking for jobs: {profileMyData.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div className="text-sm text-black">
               Description of desired
               job: {profileMyData.lookingForAJobDescription}
            </div>
            <div className="text-sm text-black mt-2 mb-1">About me: {profileMyData.aboutMe}</div>
            <div className='w-100 bg-gray-300 rounded-lg'>
               <button
                  className='bg-gray-300 text-black ml-3'
                  onClick={openModal}
               >Edit profile</button>
            </div>
            {isModalOpen && <EditProfileModal />}
         </div>
      </div>
   );
};

