export const ADD_MESSAGE = 'ADD-MESSAGE';

export type MessagesType = {
   id: string
   isMe: boolean
   message: string
}

export type Type = {
   id: string
   name: string
   image?: string
   messages: MessagesType[]
}

export type DialogPageType = {
   dialogs: Type[]
}


export type DialogsState = {
   dialogsPage: DialogPageType
}

export type AddMessageActionType = {
   type: typeof ADD_MESSAGE;
   userId?: string;
   message: string;
}


