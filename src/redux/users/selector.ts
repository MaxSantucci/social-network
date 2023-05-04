import {RootState} from '../store';

export const selectUsers = (state: RootState) => state.users.usersPage;

export const selectUsersCurrentPage = (state: RootState) => state.users.usersPage.currentPage;