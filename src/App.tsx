import './App.css'
import {Header} from 'components/Header/Header';
import {Navbar} from 'components/Navbar/Navbar';
import {Profile} from 'components/Profile/Profile';
import React, {useEffect} from 'react';
import {Dialogs} from 'components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Contact} from 'components/Contact/Contact';
import News from './components/News/News';
import {Error} from 'components/Error/Error';
import {Users} from 'components/Users/Users';
import {ProfileUser} from 'components/ProfileUser/ProfileUser';
import {Login} from 'components/Login/Login';
import {Chat} from 'components/Dialogs/Chat/Chat';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {Preloader} from 'components/common/Preloader/Preloader';
import {fetchInitialize} from 'redux/app/slice';

function App() {
   const dispatch = useAppDispatch()
   const initialized = useAppSelector((state) => state.app.initialized)

   useEffect(() => {
      dispatch(fetchInitialize())
   }, [])

   if(!initialized) {
      return <Preloader/>
   }

   return (
      <BrowserRouter>
         <div
            className="grid grid-cols-2 grid-rows-[60px,1fr] grid-cols-[2fr,10fr] min-h-screen"
            style={{gridTemplateAreas: '\'h h h\' \'n c f\''}}
         >
            <Header/>
            <Navbar/>
            <div className="bg-gray-100 text-custom" style={{gridArea: 'c'}}>
               <Routes>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/profileUser/:userId" element={<ProfileUser/>}/>
                  <Route path="/dialogs" element={<Dialogs/>}>
                     <Route path=":userId" element={<Chat/>}/>
                  </Route>
                  <Route path="/users" element={<Users/>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/*" element={<Error/>}/>
               </Routes>
            </div>
            <div className="bg-gray-200 text-custom"
                 style={{gridArea: 'f', width: 175}}>
               <Contact/>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
