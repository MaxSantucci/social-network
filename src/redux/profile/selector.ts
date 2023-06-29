import {RootState} from '../store';

export const selectPosts = (state: RootState) => state.profile.profilePage.posts;

export const selectProfileUsers = (state: RootState) => state.profile.profileData;

export const selectMyProfile = ((state: RootState) => state.profile.myProfileData)

export const selectStatusProfile = (state: RootState) => state.profile.status;

