import {UsersPageType, UsersState, UsersType} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchSetFollow, fetchSetUnfollow, fetchUsers} from './asyncAction';

const initialState: UsersState = {
   usersPage: {
      items: [],
      currentPage: 1,
      isFetching: false,
      totalCount: 0
   },
   status: 'idle',
   error: null,
   followingInProgress: []
}

export const usersSlice = createSlice({
   name: 'users',
   initialState,
   reducers: {
      followUsers: (state, action: PayloadAction<number>) => {
         const userId = action.payload
         state.usersPage.items = state.usersPage.items.map(el => {
            if (el.id === userId) {
               return {...el, followed: true}
            }
            return el
         })
      },
      unfollowUsers: (state, action: PayloadAction<number>) => {
         const userId = action.payload
         state.usersPage.items = state.usersPage.items.map(el => {
            if (el.id === userId) {
               return {...el, followed: false}
            }
            return el
         })
      },
      setUsers: (state, action: PayloadAction<UsersType[]>) => {
         state.usersPage.items = action.payload
      },
      setCurrentPage: (state, action: PayloadAction<number>) => {
         state.usersPage.currentPage = action.payload;
      },
      toggleIsFetching: (state, action: PayloadAction<boolean>) => {
         state.usersPage.isFetching = action.payload
      },
      followingInProgress: (state, action: PayloadAction<{ userId: number, followingInProgress: boolean }>) => {
         const {userId, followingInProgress} = action.payload
         if(followingInProgress) {
            state.followingInProgress.push(userId)
         } else {
            state.followingInProgress = state.followingInProgress.filter(el => el !== userId)
         }
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UsersPageType>) => {
            state.status = 'succeeded';
            state.usersPage.items = action.payload.items;
            state.usersPage.totalCount = action.payload.totalCount
         })
         .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Something went wrong';
         })
         .addCase(fetchSetFollow.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchSetFollow.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.followingInProgress = state.followingInProgress.filter(el => el !== action.meta.arg.userId)
         })
         .addCase(fetchSetFollow.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Something went wrong';
            state.followingInProgress = state.followingInProgress.filter(el => el !== action.meta.arg.userId)
         })
         .addCase(fetchSetUnfollow.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(fetchSetUnfollow.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.followingInProgress = state.followingInProgress.filter(el => el !== action.meta.arg.userId)
         })
         .addCase(fetchSetUnfollow.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message ?? 'Something went wrong';
            state.followingInProgress = state.followingInProgress.filter(el => el !== action.meta.arg.userId)
         });
   }
})

export const {followUsers, unfollowUsers, setCurrentPage, toggleIsFetching, followingInProgress} = usersSlice.actions;

export default usersSlice.reducer;







