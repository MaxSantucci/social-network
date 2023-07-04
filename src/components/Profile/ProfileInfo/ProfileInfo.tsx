import React, {ChangeEvent, useEffect, useState} from 'react';
import avatar from '../../../assets/avatar.png';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectMyProfile, selectStatusProfile} from 'redux/profile/selector';

import {
   fetchMyProfileUsers,
   fetchStatusProfile,
   fetchUpdateStatus
} from 'redux/profile/asyncAction';

export const ProfileInfo = () => {
   const dispatch = useAppDispatch()
   const status = useAppSelector(selectStatusProfile) || ''
   const profileMyData = useAppSelector(selectMyProfile)

   const userId = useAppSelector((state) => state.auth.data?.id)

   const [editMode, setEditMode] = useState<boolean>(false)
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

   return (
      <div className="p-2.5 flex">
         <img className="w-100 h-130" src={avatar} alt="avatar"/>
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
                        type="text"/>
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
               Actively looking for jobs: {profileMyData.lookingForAJob}
            </div>
            <div className="text-sm text-black">
               Description of desired
               job: {profileMyData.lookingForAJobDescription}
            </div>
            <div className="text-sm text-black mt-2">About me: {profileMyData.aboutMe}</div>
         </div>
      </div>
   );
};
