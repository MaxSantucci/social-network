import {configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import profile from './profile/slice';
import dialogs from './dialogs/slice';

export const store = configureStore({
   reducer: {
      profile,
      dialogs,
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();