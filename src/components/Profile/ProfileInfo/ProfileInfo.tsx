import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
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
} from 'components/Profile/EditProfileModal/EditProfileModal';import {BiSolidPencil} from 'react-icons/bi';
import {useParams} from 'react-router-dom';

export const ProfileInfo = () => {
   const dispatch = useAppDispatch()
   const status = useAppSelector(selectStatusProfile) || ''
   const profileMyData = useAppSelector(selectMyProfile)
   // const userId = useAppSelector((state) => state.auth.data?.id)
   const {userId} = useParams<{ userId: string }>();

   const [editMode, setEditMode] = useState<boolean>(false)
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
   const [newStatus, setNewStatus] = useState<string>(status)

   const modalRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      setNewStatus(status)
   }, [status])

   useEffect(() => {
      if(userId) {
         dispatch(fetchMyProfileUsers({userId: userId.toString()}))
         dispatch(fetchStatusProfile({userId: userId.toString()}))
      }
   }, [userId, dispatch])

   const handleClickOutside = (event: any) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
         console.log('click3')
         setIsModalOpen(false);
      }
   };

   useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, []);

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
      if (e.target.files && e.target.files.length) {
         dispatch(fetchSavePhoto(e.target.files[0]))
      }
   }

   const openModal = () => {
      setIsModalOpen(true);
   };

   const closeModal = () => {
      setIsModalOpen(false);
      if(userId) {
         dispatch(fetchMyProfileUsers({userId: userId.toString()}))
      }
   };

   return (
      <div
         className="p-2.5 flex">
         <div className="relative inline-block group">
            <img
               className="w-160 h-160 rounded-full"
               src={profileMyData.photos.large ? profileMyData.photos.large : avatar}
               alt="avatar"/>
            <label htmlFor="file-upload"
                   className="custom-file-upload cursor-pointer absolute right-2 top-3/4">
               <div
                  className="flex justify-center bg-gray-200 rounded-full items-center w-8 h-8 hover:bg-gray-300">
                  <MdAddPhotoAlternate className="w-6 h-6"/>
               </div>
            </label>
            <input
               id="file-upload"
               type="file"
               className="hidden"
               onChange={onMainPhotoSelected}
            />
         </div>
         <div className="ml-4 relative">
            <div className="text-2xl text-black">{profileMyData.fullName}</div>
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
                  className="text-black text-1xl"
                  onDoubleClick={activateEditModeHandler}
               >{status ? ' ' + status : ' -'}</span>
                  </div>
               }
            </div>
            <div className="text-sm text-black mt-2">
               Actively looking for
               jobs: {profileMyData.lookingForAJob ? 'yes' : 'no'}
            </div>
            {profileMyData.lookingForAJob &&
               <div className="text-sm text-black">
                  My professional skills: {profileMyData.lookingForAJobDescription}
               </div>}
            <div className="text-sm text-black mt-2 mb-1">About
               me: {profileMyData.aboutMe}</div>
            <div className="w-120 bg-gray-200 rounded-lg flex items-center hover:bg-gray-300">
               <BiSolidPencil className='text-black ml-2'/>
               <button
                  className="text-black ml-1"
                  onClick={openModal}
               >Edit profile
               </button>
            </div>
            {isModalOpen && (
               <div
                  className="fixed w-full h-full top-0 left-0 bg-opacity-50 bg-black z-10 flex justify-center overflow-y-auto">
                  <div className='mt-36'>
                     <div ref={modalRef}>
                        <EditProfileModal closeModal={closeModal}/>
                     </div>
                  </div>
               </div>
            )}
         </div>
      </div>
   );
};

