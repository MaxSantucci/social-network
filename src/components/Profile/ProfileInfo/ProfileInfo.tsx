import React, {ChangeEvent, useEffect, useState} from 'react';
import avatar from '../../../assets/avatar.png';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectStatusProfile} from 'redux/profile/selector';

import {
   fetchMyProfileUsers,
   fetchStatusProfile,
   fetchUpdateStatus
} from 'redux/profile/asyncAction';

export const ProfileInfo = () => {
   const dispatch = useAppDispatch()
   const status = useAppSelector(selectStatusProfile) || ''

   const userId = useAppSelector((state) => state.auth.data?.id)

   const [editMode, setEditMode] = useState<boolean>(false)
   const [newStatus, setNewStatus] = useState<string>(status)

   console.log(userId)

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
      <div className="p-2.5">
         <img className="w-50 h-20" src={avatar} alt="avatar"/>
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
                  onDoubleClick={activateEditModeHandler}
               >{status ? ' ' + status : ' -'}</span>
               </div>
            }
         </div>
      </div>
   );
};

