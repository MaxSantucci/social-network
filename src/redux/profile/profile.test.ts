import {addPost, deletePost} from 'redux/profile/slice';
import profile from './slice';
import {ProfileState} from 'redux/profile/type';
import {describe, it} from 'vitest'

let startState: ProfileState

beforeEach(() => {
   startState = {
      profilePage: {
         posts: [
            {
               id: '1',
               message: 'Recursion is a powerful concept in JavaScript programming...',
               likesCount: 11,
            },
            {
               id: '2',
               message: 'A REST API (Representational State Transfer Application Programming Interface)...',
               likesCount: 15,
            },
         ],
      },
      myProfileData: {
         data: '',
         aboutMe: '',
         contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
         },
         lookingForAJob: false,
         lookingForAJobDescription: '',
         fullName: '',
         userId: '',
         photos: {
            small: '',
            large: '',
         }
      },
      profileData: {
         data: '',
         aboutMe: '',
         contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: '',
         },
         lookingForAJob: false,
         lookingForAJobDescription: '',
         fullName: '',
         userId: '',
         photos: {
            small: '',
            large: '',
         }
      },
      statusLoading: 'idle',
      error: null,
      isFetching: false,
      status: '',
   };
});

describe('profile test', () => {
   it('should add a new post to the state', () => {
      const newPostMessage = 'React';
      const action = addPost(newPostMessage);

      const newState = profile(startState, action);

      expect(newState.profilePage.posts.length).toBe(3);
      expect(newState.profilePage.posts[0].message).toBe(newPostMessage);
      expect(newState.profilePage.posts[0].likesCount).toBe(0);
   });
   it('should delete a post', () => {
      const action = deletePost('1');

      const newState = profile(startState, action);

      expect(newState.profilePage.posts.length).toBe(1);
      expect(newState.profilePage.posts[0].id).toBe('2');
   });
   it('should not change the number of posts', function () {
      const action = deletePost('100');

      const newState = profile(startState, action);

      expect(newState.profilePage.posts.length).toBe(2);
      expect(newState.profilePage.posts[0].id).toBe('1');
   });
});
