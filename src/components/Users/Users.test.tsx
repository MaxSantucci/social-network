import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // Assuming you have a Redux store set up
import { setCurrentPage } from 'redux/users/slice';
import { Users } from './Users';
import {store} from 'redux/store';
import '@testing-library/jest-dom';
import {fetchSetFollow, fetchSetUnfollow} from 'redux/users/asyncAction';

// Mock Redux store
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
   ...jest.requireActual('react-redux'),
   useAppDispatch: () => mockDispatch,
   useAppSelector: jest.fn(),
}));

describe('Users component', () => {
   beforeEach(() => {
      jest.clearAllMocks();
   });

   test('renders users and pagination', () => {
      const users = [
         { id: 1, name: 'John', status: 'Active', followed: false },
         { id: 2, name: 'Jane', status: 'Inactive', followed: true },
      ];
      const totalCount = 20;
      const currentPage = 2;

      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(users);
      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(currentPage);
      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(totalCount);

      render(
         <Provider store={store}>
            <Users />
         </Provider>
      );

      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('Jane')).toBeInTheDocument();

      expect(screen.getByRole('button', { name: 'Page 2' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Page 3' })).toBeInTheDocument();
   });

   test('dispatches setCurrentPage when pagination page is changed', () => {
      const currentPage = 1;

      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce([]);
      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(currentPage);

      render(
         <Provider store={store}>
            <Users />
         </Provider>
      );

      fireEvent.click(screen.getByRole('button', { name: 'Page 2' }));

      expect(mockDispatch).toHaveBeenCalledWith(setCurrentPage(2));
   });

   test('dispatches fetchSetFollow when follow button is clicked', () => {
      const users = [
         { id: 1, name: 'John', status: 'Active', followed: false },
      ];
      const currentPage = 1;

      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(users);
      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(currentPage);

      render(
         <Provider store={store}>
            <Users />
         </Provider>
      );

      fireEvent.click(screen.getByRole('button', { name: 'Follow' }));

      expect(mockDispatch).toHaveBeenCalledWith(fetchSetFollow({ userId: 1 }));
   });

   test('dispatches fetchSetUnfollow when unfollow button is clicked', () => {
      const users = [
         { id: 1, name: 'John', status: 'Active', followed: true },
      ];
      const currentPage = 1;

      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(users);
      jest.spyOn(require('react-redux'), 'useAppSelector').mockReturnValueOnce(currentPage);

      render(
         <Provider store={store}>
            <Users />
         </Provider>
      );

      fireEvent.click(screen.getByRole('button', { name: 'Unfollow' }));

      expect(mockDispatch).toHaveBeenCalledWith(fetchSetUnfollow({ userId: 1 }));
   });
});
