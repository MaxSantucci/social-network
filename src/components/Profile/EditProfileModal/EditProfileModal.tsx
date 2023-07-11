import React from 'react';
import {GrFormClose} from 'react-icons/gr';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectMyProfile} from 'redux/profile/selector';
import {useForm} from 'react-hook-form';
import {TextareaAutosize} from '@mui/material';
import {fetchSaveProfile} from 'redux/profile/asyncAction';


type EditProfileModalTypeProps = {
   closeModal: () => void
}

export const EditProfileModal: React.FC<EditProfileModalTypeProps> = ({closeModal}) => {
   const dispatch = useAppDispatch()
   const profileMyData = useAppSelector(selectMyProfile)

   const { register, handleSubmit } = useForm();

   const onSubmit = (data: any) => {
      dispatch(fetchSaveProfile(data))
   };

   return (
      <div>
         <div className="z-50 bg-gray-100 w-700 max-w-full rounded-lg">
            <div className="flex justify-between items-center pt-3 mb-3">
               <span className="text-black mx-auto text-xl font-normal">Edit profile</span>
               <div className="flex items-center">
                  <button
                     className="flex justify-center bg-gray-200 rounded-full items-center w-8 h-8 mr-3 hover:bg-gray-300"
                     onClick={closeModal}><GrFormClose
                     className="w-6 h-6 text-black"/></button>
               </div>
            </div>
            <hr className="w-700 border-gray-300 mb-4"/>
            <div className='flex'>
               <div>
                  <div className='h-40 pt-2 pl-2'>Full name:</div>
                  <div className='h-40 pt-2 pl-2'>Actively looking for jobs:</div>
                  <div className='h-40 pt-2 pl-2'>My professional skills:</div>
               </div>
               <form className='ml-2' onSubmit={handleSubmit(onSubmit)}>
                  <TextareaAutosize
                     className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
                     placeholder="Write your full name"
                     {...register('message')}
                  ></TextareaAutosize>
                  <div className="h-30 text-sm text-black">
                     <input className='w-6 h-6' type="checkbox" {...register('lookingForAJob')} />
                  </div>
                  <TextareaAutosize
                     className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
                     placeholder="Write your skills"
                     {...register('message')}
                  ></TextareaAutosize>
                  <button type="submit">Save</button>
               </form>
            </div>
         </div>
      </div>
   );
};

