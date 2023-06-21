import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import profile from './profile/slice';
import dialogs from './dialogs/slice';
import users from './users/slice';
import auth from './auth/slice';
import app from './app/slice';

export const store = configureStore({
   reducer: {
      profile,
      dialogs,
      users,
      auth,
      app,
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector