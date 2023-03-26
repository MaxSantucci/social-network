import './App.css'
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import React from 'react';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ContactPageType, DialogPageType, ProfilePageType} from './redux/state';
import {Contact} from './components/Contact/Contact';

interface RootStateType {
   state: {
      profilePage: ProfilePageType,
      dialogsPage: DialogPageType,
      contactsPage: ContactPageType,
   }
}


function App(props: RootStateType) {

   return (
      <BrowserRouter>
         <div className="grid grid-cols-2 grid-rows-[60px,1fr] grid-cols-[2fr,10fr] min-h-screen"
              style={{gridTemplateAreas: '\'h h h\' \'n c f\''}}
         >
            <Header/>
            <Navbar/>
            <div className="bg-gray-100 text-custom" style={{gridArea: 'c'}}>
               <Routes>
                  <Route path="/profile" element={<Profile state={props.state.profilePage}/>}/>
                  <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
               </Routes>
            </div>
            <div className="bg-gray-200 text-custom" style={{gridArea: 'f', width: 175}}>
               <Contact state={props.state.contactsPage}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
