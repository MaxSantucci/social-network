import { addPost } from 'redux/profile/slice';
import profile from './slice';
import { v1 } from 'uuid';
import {ProfileState} from 'redux/profile/type';

let startState: {};

beforeEach(() => {
   startState = {
      myProfileData: null,
      profileData: null,
      statusLoading: false,
      error: null,
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
   };
});

test('profile', () => {
   it('should add a new post to the state', () => {
      // Arrange: Set up the initial state and action
      const newPostMessage = 'New Post Message';
      const action = addPost(newPostMessage);

      // Act: Invoke the reducer function
      const newState = profile(startState, action);

      // Assert: Check the resulting state
      expect(newState.profilePage.posts.length).toBe(3); // Expecting one more post to be added
      expect(newState.profilePage.posts[0].message).toBe(newPostMessage); // Expecting the new post to be at the beginning
      expect(newState.profilePage.posts[0].likesCount).toBe(0); // Expecting likesCount to be initialized to 0
   });
});
