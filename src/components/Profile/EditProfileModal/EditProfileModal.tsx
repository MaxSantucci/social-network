import React from 'react';
import {GrFormClose} from 'react-icons/gr';
import {useAppSelector} from 'redux/store';
import {selectMyProfile} from 'redux/profile/selector';
import {useForm} from 'react-hook-form';


type EditProfileModalTypeProps = {
   closeModal: () => void
}

export const EditProfileModal: React.FC<EditProfileModalTypeProps> = ({closeModal}) => {
   const profileMyData = useAppSelector(selectMyProfile)

   const { register, handleSubmit } = useForm();

   const onSubmit = (data: any) => {
      // Handle form submission here
      console.log(data); // Example: Logging form data to the console
   };

   return (
      <div>
         <div className='z-50 bg-gray-100 w-700 max-w-full rounded-lg'>
            <div className="flex justify-between items-center pt-3 mb-3">
               <span className="text-black mx-auto text-xl font-normal">Edit profile</span>
               <div className='flex items-center'>
                  <button
                     className="flex justify-center bg-gray-200 rounded-full items-center w-8 h-8 mr-3 hover:bg-gray-300"
                     onClick={closeModal}><GrFormClose className="w-6 h-6 text-black" /></button>
               </div>
            </div>
            <button
               className="flex justify-center bg-gray-200 rounded-full items-center w-8 h-8 mr-3 hover:bg-gray-300"
               onClick={handleSubmit(onSubmit)} // Add this line
            >
               <GrFormClose className="w-6 h-6 text-black" />
            </button>
            <hr className="w-700 border-gray-300 mb-1"/>
            <div>

               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="text-2xl text-black">
                     <input type="text" {...register('fullName')} />
                  </div>
                  <div className="text-sm text-black mt-2">
                     Actively looking for jobs:
                     <input type="checkbox" {...register('lookingForAJob')} />
                  </div>
                  {/* Continue registering the remaining form fields */}
                  {/* ... */}
                  <button type="submit">Save</button>
               </form>
               <div className="text-2xl text-black">{profileMyData.fullName}</div>
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
            </div>
         </div>
      </div>
   );
};

