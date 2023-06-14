import React, {useState} from 'react';

type ProfileStatusProps = {
   status: string
}

export const ProfileStatus: React.FC<ProfileStatusProps> = ({status}) => {
   const [editMode, setEditMode] = useState<boolean>(false)

   const activateEditModeHandler = () => {
      setEditMode(true)
   }

   const activateViewModeHandler = () => {
      setEditMode(false)
   }

   return (
      <div>
         {editMode
            ?
            <div>
               <input
                  value={status}
                  onBlur={activateViewModeHandler}
                  type="text"
               />
            </div>
            : <div>
               <span
                  onDoubleClick={activateEditModeHandler}
               >{status}</span>
            </div>
         }
      </div>
   );
};