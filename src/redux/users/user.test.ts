import {UsersState} from 'redux/users/type';
import {describe, it} from 'vitest'
import users, {followUsers} from './slice';
import {fetchUsers} from 'redux/users/asyncAction';

let startState: UsersState

beforeEach(() => {
   startState={
      usersPage: {
         items: [
            {id: 1, name: 'User',followed: false, uniqueUrlName: "Das", avatar: '', status: 'Hello'},
            {id: 2, name: 'User 2',followed: false, uniqueUrlName: "Georgi", avatar: '', status: 'I free'}
         ],
         currentPage: 1,
         isFetching: false,
         totalCount: 2
      },
      status: 'idle',
      error: null,
      followingInProgress: []
   }
})

describe('user test', () => {
   it('updates state correctly on fetchUsers.fulfilled', () => {
      const usersPage = [
         { id: 1, name: 'User 1' },
         { id: 2, name: 'User 2' },
      ];

      const action = {type: fetchUsers.fulfilled.type, payload: {items: usersPage, totalCount: usersPage.length}};

      const expectedState = {
         usersPage: {
            items: usersPage,
            currentPage: 1,
            isFetching: false,
            totalCount: usersPage.length,
         },
         status: 'succeeded' as const,
         error: null,
         followingInProgress: [],
      };

      const newState = users(startState, action);

      expect(newState).toEqual(expectedState);
      expect(newState.status).toEqual('succeeded');
   });
   it('should update the followed status of a user', () => {
      const userId = 2;
      const action = followUsers(userId);

      const expectedState = {
         usersPage: {
            items: [
               {id: 1, name: 'User',followed: false, uniqueUrlName: "Das", avatar: '', status: 'Hello'},
               {id: 2, name: 'User 2',followed: true, uniqueUrlName: "Georgi", avatar: '', status: 'I free'}
            ],
            currentPage: 1,
            isFetching: false,
            totalCount: 2,
         },
         status: 'idle',
         error: null,
         followingInProgress: [],
      };

      const newState = users(startState, action);

      expect(newState).toEqual(expectedState);
      expect(newState.usersPage.items[1].followed).toBe(true);
   });
})
