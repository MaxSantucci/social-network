import {v1} from 'uuid';

const ADD_MESSAGE = 'ADD-MESSAGE'

export const dialogsReducer = (state: any, action: any) => {
   switch (action.type) {
      case ADD_MESSAGE:
         const dialogs = state.dialogsPage.dialogs.map((el: { id: any; messages: any; }) => {
            if (el.id === action.userId) {
               const newMessage = {id: v1(), message: action.message}
               const updateNewMessage = [...el.messages, newMessage]
               return {...el, messages: updateNewMessage}
            }
            return el
         })
         const updateState = {
            ...state,
            dialogsPage: {
               ...state.dialogsPage,
               dialogs: dialogs
            }
         }
         state = updateState
         break;
   }

   return state
}

export let addMessageActionCreator = (userId: string, message: string) => ({
   type: ADD_MESSAGE,
   userId: userId,
   message: message
} as const)