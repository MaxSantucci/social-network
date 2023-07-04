import {DialogsState} from 'redux/dialogs/type';
import avatar from 'assets/avatar.png';
import {describe, it} from 'vitest';
import dialogs from './slice';

let startState: DialogsState

beforeEach(() => {
   startState = {
      dialogsPage: {
         dialogs: [
            {
               id: '1', name: 'Jon', image: avatar, messages: [
                  {id: '1', isMe: true, message: 'Hello1'},
               ]
            }]
      }
   }
})

describe('dialog test', () => {
   it('should add a new message to the state', () => {
      const action = {
         type: 'dialogs/addMessage',
         payload: {id: '2', isMe: true, message: 'Hello'}
      };

      const newState = dialogs(startState, action);

      expect(newState.dialogsPage.dialogs[0].messages).toHaveLength(1);
      expect(newState.dialogsPage.dialogs[0].messages[0].isMe).toBe(true);
      expect(newState.dialogsPage.dialogs[0].messages[0].message).toBe('Hello1');
      // expect(newState.dialogsPage.dialogs[0].messages[1].message).toBe('Hello');
   });
})