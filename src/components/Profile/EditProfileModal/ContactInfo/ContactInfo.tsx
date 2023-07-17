import React from 'react';

type ContactInfoProps = {
   register: any
   name: string
   nameRegister: string
}

export const ContactInfo: React.FC<ContactInfoProps> = ({register, name, nameRegister}) => {
   return (
      <div className="flex ml-2">
         <div className="w-254 mb-2 h-40 pt-2 pl-2">
            {name}:
         </div>
         <div>
            <input
               className="w-300 h-40 rounded-lg p-2 resize-none pr-8"
               {...register(`contacts.${nameRegister}`)}
               type="text"/>
         </div>
      </div>
   );
};

{/*<label htmlFor={key}>{key}:</label>*/}
{/*<div className="h-40 pt-2 pl-2">Full name:</div>*/}
