import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { Login } from './Login';

describe('Login', () => {
   const mockStore = configureStore([]);
   let store: any;

   beforeEach(() => {
      store = mockStore({
         auth: {
            isAuth: false,
            error: null,
            captchaUrl: null
         }
      });
   });

   it('renders login form with email and password fields', () => {
      render(
         <Provider store={store}>
            <MemoryRouter>
               <Login />
            </MemoryRouter>
         </Provider>
      );

      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Password')).toBeInTheDocument();
      expect(screen.getByLabelText('Remember me')).toBeInTheDocument();
   });

   it('displays error messages for invalid form inputs', () => {
      render(
         <Provider store={store}>
            <MemoryRouter>
               <Login />
            </MemoryRouter>
         </Provider>
      );

      fireEvent.click(screen.getByText('Login'));

      expect(screen.getByText('To log in get registered')).toBeInTheDocument();
      expect(screen.getByText('Password: free')).toBeInTheDocument();
   });

   it('submits form with valid input', () => {
      render(
         <Provider store={store}>
            <MemoryRouter>
               <Login />
            </MemoryRouter>
         </Provider>
      );

      fireEvent.change(screen.getByLabelText('Email'), {
         target: { value: 'test@example.com' }
      });
      fireEvent.change(screen.getByLabelText('Password'), {
         target: { value: 'password123' }
      });
      fireEvent.click(screen.getByLabelText('Remember me'));

      fireEvent.click(screen.getByText('Login'));
   });
});
