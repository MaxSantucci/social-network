import React from 'react';
import {ContactsType} from '../../redux/state';
import avatar from '../../assets/avatar.png';

type ContactPropsType = {
   state: {
      contacts: Array<ContactsType>
   }
}

export const Contact = (props: ContactPropsType) => {

   let contactsMap = props.state.contacts.map(c => {
      return (
         <a href='/' key={c.id} >
            <div className='text-black flex mb-3'>
               <img className='w-18 h-6 rounded-2xl' src={avatar} alt="avatar"/>
               <div className='ml-2'>{c.name} </div>
               <div className='ml-1'>{c.surname}</div>
            </div>
         </a>
      )
   })

   return (
      <div className='w-30 pt-5 pl-5'>
         <div className='text-2xl mb-5'>Contacts</div>
         <div>{contactsMap}</div>
      </div>
   );
};
