import React from 'react';
import avatar from '../../../assets/avatar.png';
import {ProfileStatus} from './ProfileStatus';
import {useAppDispatch, useAppSelector} from '../../../redux/store';
import {selectStatusProfile} from '../../../redux/profile/selectors';

export const ProfileInfo = () => {

   return (
      <div className='p-2.5'>
         <img className='w-50 h-20' src={avatar} alt="avatar"/>
         <ProfileStatus
            // status='Hi'
         />
      </div>
   );
};

