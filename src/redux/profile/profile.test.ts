import {addPost, deletePost} from 'redux/profile/slice';
import profile from './slice';
import {v1} from 'uuid';
import {ProfileState} from 'redux/profile/type';
import {describe, it} from 'vitest'
import {createAction} from '@reduxjs/toolkit';

let startState: ProfileState

beforeEach(() => {
   startState = {
      profilePage: {
         posts: [
            {
               id: v1(),
               message: 'Recursion is a powerful concept in JavaScript programming...',
               likesCount: 11,
            },
            {
               id: v1(),
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
         userId: 0,
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
         userId: 0,
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

describe('useCounter hook', () => {
   it('should add a new post to the state', () => {
      const newPostMessage = 'New Post Message';
      const action = addPost(newPostMessage);

      // Act: Invoke the reducer function
      const newState = profile(startState, action);

      // Assert: Check the resulting state
      expect(newState.profilePage.posts.length).toBe(3); // Expecting one more post to be added
      expect(newState.profilePage.posts[0].message).toBe(newPostMessage); // Expecting the new post to be at the beginning
      expect(newState.profilePage.posts[0].likesCount).toBe(0); // Expecting likesCount to be initialized to 0
   });
   it('should delete a post', () => {
      // Arrange
      const initialState = {
         profilePage: {
            posts: [
               {
                  id: 'post1',
                  message: 'Recursion is a powerful concept in JavaScript programming...',
                  likesCount: 11,
               },
               {
                  id: 'post2',
                  message: 'A REST API (Representational State Transfer Application Programming Interface)...',
                  likesCount: 15,
               },
            ],
         },
         // Rest of the initial state
      };
      const action = { payload: 'post1' };

      // Act
      const newState = deletePost(initialState, deletePost(action.payload));

      // Assert
      expect(newState.profilePage.posts.length).toBe(1);
      expect(newState.profilePage.posts[0].id).toBe('post2');
   });
});
