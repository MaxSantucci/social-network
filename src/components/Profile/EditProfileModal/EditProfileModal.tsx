import React, {useState} from 'react';
import {GrFormClose} from 'react-icons/gr';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {selectMyProfile} from 'redux/profile/selector';
import {SubmitHandler, useForm} from 'react-hook-form';
import {TextareaAutosize} from '@mui/material';
import {fetchSaveProfile} from 'redux/profile/asyncAction';
import {ProfileUsersType} from 'redux/profile/type';
import {ContactInfo} from 'components/Profile/EditProfileModal/ContactInfo/ContactInfo';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

type EditProfileModalTypeProps = {
   closeModal: () => void
}

export const EditProfileModal: React.FC<EditProfileModalTypeProps> = ({closeModal}) => {
   const dispatch = useAppDispatch()
   const profileMyData = useAppSelector(selectMyProfile)

   const validationSchema = yup.object().shape({
      fullName: yup.string().required('Full name is required'),
      lookingForAJobDescription: yup
         .string()
         .when('lookingForAJob', {
            is: true,
            then: yup.string().required('Skills are required when looking for a job'),
         }),
      aboutMe: yup.string().required('About me is required'),
   });

   const [isLookingForJob, setIsLookingForJob] = useState<boolean>(false);

   const {register, handleSubmit} = useForm<ProfileUsersType>({
      resolver: yupResolver(validationSchema),
      defaultValues: {
         fullName: profileMyData.fullName,
         lookingForAJob: profileMyData.lookingForAJob,
         lookingForAJobDescription: profileMyData.lookingForAJobDescription,
         aboutMe: profileMyData.aboutMe,
         contacts: {
            facebook: profileMyData.contacts.facebook,
            website: profileMyData.contacts.website,
            twitter: profileMyData.contacts.twitter,
            instagram: profileMyData.contacts.instagram,
            youtube: profileMyData.contacts.youtube,
            github: profileMyData.contacts.github,
         },
      },
   });

   const onSubmit: SubmitHandler<ProfileUsersType> = (data: ProfileUsersType) => {
      closeModal()
      dispatch(fetchSaveProfile(data))
   };

   const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setIsLookingForJob(event.target.checked);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <div
            className="z-50 bg-gray-100 w-700 max-w-full rounded-lg text-black">
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
            <div className="flex">
               <div className="w-6/12">
                  <div className="h-40 pt-2 pl-2">Full name:</div>
                  <div className="h-40 pt-2 pl-2">Actively looking for jobs:
                  </div>
                  <div className="h-40 pt-2 pl-2">My professional skills:</div>
                  <div className="h-40 pt-2 pl-2">About me:</div>
               </div>
               <div className="ml-2">
                  <TextareaAutosize
                     className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
                     placeholder="Write your full name"
                     {...register('fullName')}
                  ></TextareaAutosize>
                  <div className="h-30 text-sm text-black">
                     <input
                        className="w-6 h-6"
                        type="checkbox"
                        {...register('lookingForAJob')}
                        checked={isLookingForJob}
                        onChange={handleCheckboxChange}
                     />
                  </div>
                  <TextareaAutosize
                     className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
                     placeholder="Write your skills"
                     {...register('lookingForAJobDescription',)}
                     disabled={!isLookingForJob}
                  ></TextareaAutosize>
                  <TextareaAutosize
                     className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
                     placeholder="Write about yourself"
                     {...register('aboutMe')}
                  ></TextareaAutosize>
               </div>
            </div>
            <div className="mt-4 mb-2 text-custom pt-2 pl-2">
               <div>Contact info:</div>
            </div>
            <ContactInfo
               register={register}
               name='Facebbok'
               nameRegister='facebook'/>
            <ContactInfo
               register={register}
               name='Website'
               nameRegister='website'/>
            <ContactInfo
               register={register}
               name='Twitter'
               nameRegister='twitter'/>
            <ContactInfo
               register={register}
               name='Instagram'
               nameRegister='instagram'/>
            <ContactInfo
               register={register}
               name='Youtube'
               nameRegister='youtube'/>
            <ContactInfo
               register={register}
               name='Github'
               nameRegister='github'/>
            <button
               className="w-668 h-40 rounded-lg font-medium text-blue-800 ml-4 mr-4 mb-4 bg-button hover:bg-button_hover"
               type="submit">Edit your About info
            </button>
         </div>
      </form>
   );
};


