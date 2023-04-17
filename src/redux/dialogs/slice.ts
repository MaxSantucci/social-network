import avatar from '../../assets/avatar.png';
import {v1} from 'uuid';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AddMessageActionType, DialogsState} from './type';


const initialState: DialogsState = {
   dialogsPage: {
      dialogs: [
         {
            id: v1(), name: 'Jon', image: avatar, messages: [
               {id: v1(), isMe: true, message: 'Hello1'},
               {id: v1(), isMe: true, message: 'Go learn1'},
               {id: v1(), isMe: false, message: 'Typescript1'},
            ]
         },
         {
            id: v1(), name: 'Andrey', image: avatar, messages: [
               {id: v1(), isMe: true, message: 'Hello2'},
               {id: v1(), isMe: true, message: 'Go learn2'},
               {id: v1(), isMe: false, message: 'Typescript2'},
            ]
         },
         {
            id: v1(), name: 'Max', image: avatar, messages: [
               {id: v1(), isMe: true, message: 'Hello'},
               {id: v1(), isMe: true, message: 'Go learn'},
               {id: v1(), isMe: true, message: 'Typescript'},
            ]
         },
         {
            id: v1(), name: 'Franko', image: avatar, messages: [
               {id: v1(), isMe: true, message: 'Hello'},
               {id: v1(), isMe: false, message: 'Go learn'},
               {id: v1(), isMe: true, message: 'Typescript'},
            ]
         },
         {
            id: v1(), name: 'Olga', image: avatar, messages: [
               {id: v1(), isMe: false, message: 'Hello'},
               {id: v1(), isMe: true, message: 'Go learn'},
               {id: v1(), isMe: true, message: 'Typescript'},
            ]
         },
         {
            id: v1(), name: 'Gram', image: avatar, messages: [
               {id: v1(), isMe: true, message: 'Hello'},
               {id: v1(), isMe: true, message: 'Go learn'},
               {id: v1(), isMe: true, message: 'Typescript'},
            ]
         },
      ],
   }
}

export const dialogsSlice = createSlice({
   name: 'dialogs',
   initialState,
   reducers: {
      addMessage: (state, action: PayloadAction<AddMessageActionType>) => {
         const {userId, message} = action.payload
         const dialogs = state.dialogsPage.dialogs.map(el => {
            if (el.id === userId) {
               const newMessage = {id: v1(), isMe: true, message}
               const updateNewMessage = [...el.messages, newMessage]
               return {...el, messages: updateNewMessage}
            }
            return el
         })
         return {
            ...state,
            dialogsPage: {
               ...state.dialogsPage,
               dialogs,
            }
         }
      }
   }
})

export const {addMessage} = dialogsSlice.actions;

export default dialogsSlice.reducer;


// case ADD_MESSAGE:
//    const dialogs = state.dialogsPage.dialogs.map((el: { id: any; messages: any; }) => {
//       if (el.id === action.userId) {
//          const newMessage = {id: v1(), message: action.message}
//          const updateNewMessage = [...el.messages, newMessage]
//          return {...el, messages: updateNewMessage}
//       }
//       return el
//    })
//    const updateState = {
//       ...state,
//       dialogsPage: {
//          ...state.dialogsPage,
//          dialogs: dialogs
//       }
//    }
//    state = updateState
//    break;
// export let addMessageActionCreator = (userId: string, message: string) => ({
//    type: ADD_MESSAGE,
//    userId: userId,
//    message: message
// } as const)