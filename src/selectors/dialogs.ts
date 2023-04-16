import {DialogPageType, DialogsType} from '../redux/store';

export const getMessagesByUserId = (userId: string, store: DialogsType[]) => {
   const userDialog = store.find(el => el.id === userId)
   return userDialog ? userDialog.messages : null
}