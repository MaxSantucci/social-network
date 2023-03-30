import avatar from '../assets/avatar.png';

export type DialogsType = {
   id: number
   name: string
   image: string
}

export type MessagesType = {
   id: number
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
         {id: 1, name: 'Jon', image: avatar},
         {id: 2, name: 'Andrey', image: avatar},
         {id: 3, name: 'Max', image: avatar},
         {id: 4, name: 'Franko', image: avatar},
         {id: 5, name: 'Olga', image: avatar},
         {id: 6, name: 'Gram', image: avatar},
      ],
      messages: [
         {id: 1, message: 'Hello'},
         {id: 2, message: 'Go learn'},
         {id: 3, message: 'Typescript'},
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