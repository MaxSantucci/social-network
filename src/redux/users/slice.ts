import {UsersState, UsersType} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchUsers} from "./asyncAction";

const initialState: UsersState = {
   usersPage: {
      users: [],
   },
   status: 'idle',
   error: null
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
      // getUsersStart(state) {
      //    state.isLoading = true;
      //    state.error = null;
      // },
      // getUsersSuccess(state, action) {
      //    state.isLoading = false;
      //    state.usersPage.users = action.payload;
      // },
      // getUsersFailure(state, action) {
      //    state.isLoading = false;
      //    state.error = action.payload;
      // }
   },
   extraReducers: (builder) => {
      builder
          .addCase(fetchUsers.pending, (state) => {
             state.status = 'loading';
          })
          .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UsersType[]>) => {
             state.status = 'succeeded';
             state.usersPage.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
             state.status = 'failed';
             state.error = action.error.message ?? 'Something went wrong';
          });
   }
})

export const {followUsers, unfollowUsers, setUsers} = usersSlice.actions;

export default usersSlice.reducer;







