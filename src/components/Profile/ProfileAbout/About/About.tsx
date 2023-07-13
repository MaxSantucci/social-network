import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {
   selectMyProfile,
} from 'redux/profile/selector';
import {
   fetchMyProfileUsers,
   fetchStatusProfile
} from 'redux/profile/asyncAction';
import {BiSolidContact} from 'react-icons/bi';
import {
   AiFillFacebook, AiFillGithub,
   AiFillTwitterSquare,
   AiOutlineInstagram, AiOutlineYoutube
} from 'react-icons/ai';
import {CgWebsite} from 'react-icons/cg';

const About = () => {
   const userId = useAppSelector((state) => state.auth.data?.id)
   console.log(userId)

   const profileMyData = useAppSelector(selectMyProfile)

   const dispatch = useAppDispatch();

   useEffect(() => {
      // @ts-ignore
      dispatch(fetchMyProfileUsers({userId: userId}))
      // @ts-ignore
      dispatch(fetchStatusProfile({userId: userId}))
   }, [dispatch, userId]);

   return (
      <div className='col-span-1'>
         <div className="mt-5 flex items-center">
            <div className="mr-1"><BiSolidContact/></div>
            Contact info:
         </div>
         <div className="ml-2 flex">
            <div className="mr-2">
               <div className="text-gray-900 flex items-center">
                  <AiFillFacebook className='mr-1'/> Facebook:
               </div>
               <div className="text-gray-900 flex items-center">
                  <CgWebsite className='mr-1'/> Website:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiFillTwitterSquare className="mr-1"/> Twitter:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiOutlineInstagram className='mr-1'/> Instagram:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiOutlineYoutube className='mr-1'/> Youtube:
               </div>
               <div className="text-gray-900 flex items-center">
                  <AiFillGithub className='mr-1'/> Github:
               </div>
            </div>
            <div className="flex flex-col">
               <a href={`https://${profileMyData.contacts.facebook}`}
                  target="_blank" rel="noopener noreferrer">
                  {profileMyData.contacts.facebook}
               </a>
               <a href={`https://${profileMyData.contacts.website}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileMyData.contacts.website}
               </a>
               <a href={`https://${profileMyData.contacts.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileMyData.contacts.twitter}
               </a>
               <a href={`https://${profileMyData.contacts.instagram}`}
                  target="_blank" rel="noopener noreferrer">
                  {profileMyData.contacts.instagram}
               </a>
               <a href={`https://${profileMyData.contacts.youtube}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileMyData.contacts.youtube}
               </a>
               <a href={`https://${profileMyData.contacts.github}`}
                  target="_blank"
                  rel="noopener noreferrer">
                  {profileMyData.contacts.github}
               </a>
            </div>
         </div>
      </div>
   );
};

export default About;