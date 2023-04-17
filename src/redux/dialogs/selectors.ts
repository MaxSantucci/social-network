import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectDialogs = (state: RootState) => state.dialogs.dialogsPage.dialogs;

export const getMessagesByUserId = (userId: string | undefined) =>  // need fix this code
   createSelector(selectDialogs, (dialogs) => {
      const dialog = dialogs.find(i => i.id === userId)
      return dialog ? dialog.messages : null
   })
