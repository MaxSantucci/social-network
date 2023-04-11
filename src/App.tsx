import './App.css'
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import React from 'react';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {StoreType} from './redux/state';
import {Contact} from './components/Contact/Contact';
import News from './components/News/News';

type RootStateType = {
   store: StoreType
}

function App(props: RootStateType) {
   const state = props.store.getState()
   return (
      <BrowserRouter>
         <div className="grid grid-cols-2 grid-rows-[60px,1fr] grid-cols-[2fr,10fr] min-h-screen"
              style={{gridTemplateAreas: '\'h h h\' \'n c f\''}}
         >
            <Header/>
            <Navbar/>
            <div className="bg-gray-100 text-custom" style={{gridArea: 'c'}}>
               <Routes>
                  <Route path="/profile" element={
                     <Profile
                        state={state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                     />
                  }/>
                  <Route path="/dialogs" element={
                     <Dialogs
                        state={state.dialogsPage}
                        dispatch={props.store.dispatch.bind(props.store)}
                     />
                  }/>
                  <Route path="/news" element={<News/>}/>
                  <Route path='*' element={<div>Error</div>}/>
               </Routes>
            </div>
            <div className="bg-gray-200 text-custom" style={{gridArea: 'f', width: 175}}>
               <Contact state={state.contactsPage}/>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
