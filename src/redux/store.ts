import avatar from '../assets/avatar.png';
import {v1} from 'uuid';
import {addPostActionCreator, profileReducer} from './profile-reducer';
import {addMessageActionCreator, dialogsReducer} from './dialogs-reducer';

export type DialogsType = {
   id: string
   name: string
   image?: string
   messages: Array<MessagesType>
}

export type MessagesType = {
   id: string
   message: string
}

type PostsType = {
   id: string
   message: string
   likesCount: number
}

export type ContactsType = {
   id: string
   name: string
   surname: string
}

export type ProfilePageType = {
   posts: Array<PostsType>
}

export type DialogPageType = {
   dialogs: Array<DialogsType>
}

export type ContactPageType = {
   contacts: Array<ContactsType>
}

export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogPageType
   contactsPage: ContactPageType
}

export type StoreType = {
   _state: RootStateType
   getState: () => RootStateType
   _callSubscriber: () => void
   subscriber: (observer: () => void) => void
   dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addMessageActionCreator>


export let store: StoreType = {
   _state: {
      dialogsPage: {
         dialogs: [
            {
               id: v1(), name: 'Jon', image: avatar, messages: [
                  {id: v1(), message: 'Hello1'},
                  {id: v1(), message: 'Go learn1'},
                  {id: v1(), message: 'Typescript1'},
               ]
            },
            {
               id: v1(), name: 'Andrey', image: avatar, messages: [
                  {id: v1(), message: 'Hello2'},
                  {id: v1(), message: 'Go learn2'},
                  {id: v1(), message: 'Typescript2'},
               ]
            },
            {
               id: v1(), name: 'Max', image: avatar, messages: [
                  {id: v1(), message: 'Hello'},
                  {id: v1(), message: 'Go learn'},
                  {id: v1(), message: 'Typescript'},
               ]
            },
            {
               id: v1(), name: 'Franko', image: avatar, messages: [
                  {id: v1(), message: 'Hello'},
                  {id: v1(), message: 'Go learn'},
                  {id: v1(), message: 'Typescript'},
               ]
            },
            {
               id: v1(), name: 'Olga', image: avatar, messages: [
                  {id: v1(), message: 'Hello'},
                  {id: v1(), message: 'Go learn'},
                  {id: v1(), message: 'Typescript'},
               ]
            },
            {
               id: v1(), name: 'Gram', image: avatar, messages: [
                  {id: v1(), message: 'Hello'},
                  {id: v1(), message: 'Go learn'},
                  {id: v1(), message: 'Typescript'},
               ]
            },
         ],
      },
      profilePage: {
         posts: [
            {id: v1(), message: 'Hi my name Derek', likesCount: 110},
            {id: v1(), message: 'My first post', likesCount: 150}
         ],
      },
      contactsPage: {
         contacts: [
            {id: v1(), name: 'Adriano', surname: 'Lambert'},
            {id: v1(), name: 'Troy', surname: 'Derson'},
            {id: v1(), name: 'Antony', surname: 'Farstepen'},
            {id: v1(), name: 'Macej', surname: 'Kowalskiy'},
            {id: v1(), name: 'Sara', surname: 'Jakor'},
         ],
      },
   },
   getState() {
      return this._state
   },
   _callSubscriber() {
      console.log('State changed')
   },
   subscriber(observer) {
      this._callSubscriber = observer
   },
   dispatch(action) {

      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

      this._callSubscriber()
   }
}


