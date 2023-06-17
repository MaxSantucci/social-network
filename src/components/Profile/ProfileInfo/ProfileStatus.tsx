import React, {ChangeEvent, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {selectStatusProfile} from '../../../redux/profile/selectors';
import {
   fetchProfileUsers,
   fetchStatusProfile,
   fetchUpdateStatus
} from '../../../redux/profile/asyncAction';
import {useParams} from 'react-router-dom';

export const ProfileStatus = () => {
   const {userId} = useParams<{ userId: string }>();
   const dispatch = useAppDispatch()
   const status = useAppSelector(selectStatusProfile) || ''

   const [editMode, setEditMode] = useState<boolean>(false)
   const [newStatus, setNewStatus] = useState<string>(status)

   useEffect(() => {
      dispatch(fetchProfileUsers({userId}))
      dispatch(fetchStatusProfile({userId}))
   }, [status])

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
      <div>
         {editMode
            ? <div>
               <input
                  value={newStatus}
                  onChange={onChangeStatusHandler}
                  onBlur={deactivateEditModeHandler}
                  type="text"
               />
            </div>
            : <div>
               <span
                  onDoubleClick={activateEditModeHandler}

               >{status ? ' ' + status : ' -'}</span>
            </div>
         }
      </div>
   );
};