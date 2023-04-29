import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectUsers} from '../../redux/users/selector';
import {followUsers, unfollowUsers} from '../../redux/users/slice';
import axios from 'axios';
import {fetchUsers} from "../../redux/users/asyncAction";


export const Users = () => {

   const dispatch = useAppDispatch()
   const users = useAppSelector(selectUsers);

   useEffect(() => {
      dispatch(fetchUsers({}))
      console.log(fetchUsers)
   }, [dispatch])

   const unfollowButtonHandler = (id: string) => {
      dispatch(unfollowUsers(id))
   }
   //
   const followButtonHandler = (id: string) => {
      dispatch(followUsers(id))
   }

   return (
      <div>
         {users.map(u => {
            return <div key={u.id} className="flex justify-between items-center mb-2">
               <div className="flex items-center">
                  <img className="w-34 h-14" src={u.avatar} alt="avatar"/>
                  <div className="text-black flex flex-col content-center	">
                     <div className="font-semibold">
                        <span>{u.lastName} </span>
                        <span>{u.firstName} </span>

                     </div>
                     <div>
                        <span>{u.position}</span>
                     </div>
                     <div>
                        <span>{u.location.city}, </span>
                        <span>{u.location.country}</span>
                     </div>
                  </div>
               </div>
               <div className="pr-5">
                  <div
                     className='w-24 flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-800"'>{u.followed
                     ? <button onClick={() => unfollowButtonHandler(u.id)}>Unfollow</button>
                     : <button onClick={() => followButtonHandler(u.id)}>Follow</button>
                  }</div>
               </div>
            </div>
         })}
      </div>
   );
};