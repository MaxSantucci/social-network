import React from 'react';
import { ProfileInfo } from 'components/Profile/ProfileInfo/ProfileInfo';
import {fireEvent,screen, render} from '@testing-library/react';
import {Provider} from 'react-redux';
import {store} from 'redux/store';
import '@testing-library/jest-dom';



test('renders without crashing', () => {
   render(<Provider store={store}>
      <ProfileInfo/>
   </Provider>);
});

test('input value is updated correctly', () => {
   render(<Provider store={store}>
      <ProfileInfo/>
   </Provider>);

   const inputElement = screen.getByRole('textbox', { name: 'status-input' }) as HTMLInputElement;

   fireEvent.change(inputElement, { target: { value: 'New status' } });

   expect(inputElement.value).toBe('New status');
});


test('edit mode is activated on double click', () => {
   render(<Provider store={store}>
      <ProfileInfo/>
   </Provider>);

   const statusElement = screen.queryByText(/status/i);

   // @ts-ignore
   fireEvent.doubleClick(statusElement);

   const inputElement = screen.getByRole('textbox');
   expect(inputElement).toBeInTheDocument();
});

test('edit mode is deactivated on blur', () => {
   render(<Provider store={store}>
      <ProfileInfo/>
   </Provider>);

   const statusElement = screen.queryByText(/status/i);

   // @ts-ignore
   fireEvent.doubleClick(statusElement);

   const inputElement = screen.getByRole('textbox');
   fireEvent.blur(inputElement);

   expect(inputElement).not.toBeInTheDocument();
});

