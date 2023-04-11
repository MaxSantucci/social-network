import {DialogPageType} from '../redux/state';

export const getMessagesByUserId = (userId: string, store: DialogPageType) => {
   const userDialog = store.dialogs.find(el => el.id === userId)
   return userDialog ? userDialog.messages : null
}