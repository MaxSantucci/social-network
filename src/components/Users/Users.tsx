import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/store';
import {selectTotalCount, selectUsers, selectUsersCurrentPage} from '../../redux/users/selector';
import {followUsers, setCurrentPage, unfollowUsers} from '../../redux/users/slice';
import {fetchUsers} from '../../redux/users/asyncAction';
import {Preloader} from '../common/Preloader/Preloader';
import Pagination from '@mui/material/Pagination';
import {NavLink} from 'react-router-dom';
import avatar from '../../assets/avatar.png';

export const Users = () => {

   const dispatch = useAppDispatch()
   const users = useAppSelector(selectUsers);
   const currentPage = useAppSelector(selectUsersCurrentPage)
   const totalCount = useAppSelector(selectTotalCount)

   useEffect(() => {
      dispatch(fetchUsers({
         currentPage: String(currentPage)
      }))
   }, [currentPage, dispatch])

   const unfollowButtonHandler = (id: string) => {
      dispatch(unfollowUsers(id))
   }
   //
   const followButtonHandler = (id: string) => {
      dispatch(followUsers(id))
   }

   const onChangePage = (page: number) => {
      dispatch(setCurrentPage(page))
      // dispatch(fetchUsers({currentPage: String(currentPage)}))
   }

   const count = Math.round(totalCount / 10)
   console.log(totalCount)

   return (
      <div>
         {users.isFetching ? <Preloader/> : <div>
            {users.users.map(u => {
               return <div key={u.id} className="flex justify-between items-center mb-2">
                  <NavLink to={`/profileUser/${u.id}`}>
                     <div className="flex items-center">
                        <img className="w-34 h-14" src={avatar} alt="avatar"/>
                        <div className='text-black text-lg'>
                           <div>{u.name}</div>
                           <div>Status: {u.status}</div>
                        </div>
                     </div>
                  </NavLink>
                  <div className="pr-5">
                     <div
                        className='w-24 flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-800"'>{u.followed
                        ? <button onClick={() => unfollowButtonHandler(u.id)}>Unfollow</button>
                        : <button onClick={() => followButtonHandler(u.id)}>Follow</button>
                     }</div>
                  </div>
               </div>
            })}
            <Pagination
               className="flex justify-around mt-10"
               count={count}
               variant="outlined"
               shape="rounded"
               page={currentPage}
               onChange={(event, value) => onChangePage(value)}
            />
         </div>
         }
      </div>
   );
};