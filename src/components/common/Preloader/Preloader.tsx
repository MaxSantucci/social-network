import React from 'react';
import preloader from '../../../assets/spin.svg';

export const Preloader = () => {
   return (
      <div className='bg-gray-100 flex justify-around mt-5'>
         <img src={preloader} alt="preloader"/>
      </div>
   );
};