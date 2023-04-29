import {RootState} from '../store';

export const selectPosts = (state: RootState) => state.profile.profilePage.posts;
