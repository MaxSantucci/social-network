import {UsersState, UsersType} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers} from './asyncAction';

const initialState: UsersState = {
   usersPage: {
      users: [],
      currentPage: 1,
      isFetching: false,
      totalCount: 0
   },
   status: 'idle',
   error: null,
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      followUsers: (state, action: PayloadAction<string>) => {
         const userId = action.payload
         state.usersPage.users = state.usersPage.users.map(el => {
            if (el.id === userId) {
               return {...el, followed: true}
            }
            return el
         })
      },
      unfollowUsers: (state, action: PayloadAction<string>) => {
         const userId = action.payload
         state.usersPage.users = state.usersPage.users.map(el => {
            if (el.id === userId) {
               return {...el, followed: false}
            }
            return el
         })
      },
      setUsers: (state, action: PayloadAction<UsersType[]>) => {
         state.usersPage.users = action.payload
      },
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.usersPage.currentPage = action.payload;
      },
      toggleIsFetching: (state, action: PayloadAction<boolean>) => {
         state.usersPage.isFetching = action.payload
      }
   },
   extraReducers: (builder) => {
      builder
          .addCase(fetchUsers.pending, (state) => {
             state.usersPage.isFetching = true
          })
          .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<{items: UsersType[], totalCount: number}>) => {
             state.status = 'succeeded';
             state.usersPage.users = action.payload.items;
             state.usersPage.totalCount = action.payload.totalCount
             state.usersPage.isFetching = false
          })
          .addCase(fetchUsers.rejected, (state, action) => {
             state.status = 'failed';
             state.error = action.error.message ?? 'Something went wrong';
             state.usersPage.isFetching = false
          });
   }
})

export const {followUsers, unfollowUsers, setCurrentPage, toggleIsFetching} = usersSlice.actions;

export default usersSlice.reducer;







