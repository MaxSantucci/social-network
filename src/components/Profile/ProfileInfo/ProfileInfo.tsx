import React, {ChangeEvent, useEffect, useState} from 'react';
import avatar from '../../../assets/avatar.png';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectStatusProfile} from 'redux/profile/selectors';
import {useParams} from 'react-router-dom';
import {
   fetchProfileUsers,
   fetchStatusProfile,
   fetchUpdateStatus
} from 'redux/profile/asyncAction';

export const ProfileInfo = () => {
   const dispatch = useAppDispatch()
   const status = useAppSelector(selectStatusProfile) || ''

   const [editMode, setEditMode] = useState<boolean>(false)
   const [newStatus, setNewStatus] = useState<string>(status)

   let userId = useParams<{ userId: string }>();

   console.log(userId)

   useEffect(() => {
      dispatch(fetchProfileUsers(userId))
      dispatch(fetchStatusProfile(userId))
   }, [dispatch])

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

