import images from '../assets/images.png';

export type DialogsType = {
   id: number
   name: string
}

export type MessagesType = {
   message: string
}

type PostsType = {
   id: number
   message: string
   likesCount: number
}

export type ContactsType = {
   id: number
   name: string
   surname: string
}

export type ProfilePageType = {
   posts: Array<PostsType>
}

export type DialogPageType = {
   dialogs: Array<DialogsType>
   messages: Array<MessagesType>
}

export type ContactPageType = {
   contacts: Array<ContactsType>
}

export type RootStateType = {
   profilePage: ProfilePageType
   dialogsPage: DialogPageType
   contactsPage: ContactPageType
}

export let state: RootStateType = {
   dialogsPage: {
      dialogs: [
         {id: 1, name: 'Jon'},
         {id: 2, name: 'Andrey'},
         {id: 3, name: 'Max'},
         {id: 4, name: 'Franko'},
         {id: 5, name: 'Olga'},
         {id: 6, name: 'Gram'},
      ],
      messages: [
         {message: 'Hello'},
         {message: 'Go learn'},
         {message: 'Typescript'},
      ],
   },
   profilePage: {
      posts: [
         {id: 1, message: 'Hi my name Derek', likesCount: 110},
         {id: 2, message: 'My first post', likesCount: 150}
      ],
   },
   contactsPage: {
      contacts: [
         {id: 1, name: 'Adriano', surname: 'Lambert'},
         {id: 1, name: 'Troy', surname: 'Derson'},
         {id: 1, name: 'Antony', surname: 'Farstepen'},
         {id: 1, name: 'Macej', surname: 'Kowalskiy'},
         {id: 1, name: 'Sara', surname: 'Jakor'},
      ],
   },
}