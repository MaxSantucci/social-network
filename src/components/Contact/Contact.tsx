import React from 'react';
import avatar from '../../assets/avatar.png';
import {v1} from 'uuid';


export const Contact = () => {

   let contact = [
      {id: v1(), name: 'Adriano', surname: 'Lambert'},
      {id: v1(), name: 'Troy', surname: 'Derson'},
      {id: v1(), name: 'Antony', surname: 'Farstepen'},
      {id: v1(), name: 'Macej', surname: 'Kowalskiy'},
      {id: v1(), name: 'Sara', surname: 'Jakor'},
   ]

   let contactsMap = contact.map(c => {
      return (
         <a href="/" key={c.id}>
            <div className="text-black flex mb-3">
               <img className="w-18 h-6 rounded-2xl" src={avatar} alt="avatar"/>
               <div className="ml-2">{c.name} </div>
               <div className="ml-1">{c.surname}</div>
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
