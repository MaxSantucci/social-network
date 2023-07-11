import './App.css'
import {Header} from 'components/Header/Header';
import {Navbar} from 'components/Navbar/Navbar';
import React, {lazy, Suspense, useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Contact} from 'components/Contact/Contact';
import {News} from 'components/News/News';
import {Error} from 'components/Error/Error';
import {ProfileUser} from 'components/ProfileUser/ProfileUser';
import {Chat} from 'components/Dialogs/Chat/Chat';
import {useAppDispatch, useAppSelector} from 'redux/store';
import {Preloader} from 'components/common/Preloader/Preloader';
import {fetchInitialize} from 'redux/app/slice';
import {Music} from 'components/Music/Music';
import {Settings} from 'components/Settings/Settings';

const Dialogs = lazy(() => import('components/Dialogs/Dialogs').then(module => ({default: module.Dialogs})));
const Profile = lazy(() => import('components/Profile/Profile').then(module => ({default: module.Profile})));
const Login = lazy(() => import('components/Login/Login').then(module => ({default: module.Login})));
const Users = lazy(() => import('components/Users/Users').then(module => ({default: module.Users})));


function App() {
   const dispatch = useAppDispatch()
   const initialized = useAppSelector((state) => state.app.initialized)

   useEffect(() => {
      dispatch(fetchInitialize())
   }, [])

   if (!initialized) {
      return <Preloader/>
   }

   return (
      <BrowserRouter>
         <div
            className="grid grid-cols-2 grid-rows-[60px,1fr] grid-cols-[2fr,10fr] min-h-screen"
            style={{gridTemplateAreas: '\'h h h\' \'n c f\''}}>
            <Header/>
            <Navbar/>
            <div className="bg-gray-100 text-custom" style={{gridArea: 'c'}}>
               <Routes>
                  <Route path="/login" element={
                     <Suspense fallback={<Preloader/>}>
                        <Login/>
                     </Suspense>}/>
                  {/*<Route path="/social-network" element={<Navigate to="/profile" />}/>*/}
                  <Route path="/profile" element={
                     <Suspense fallback={<Preloader/>}>
                        <Profile/>
                     </Suspense>}/>
                  <Route path="/profileUser/:userId" element={<ProfileUser/>}/>
                  <Route path="/dialogs" element={
                     <Suspense fallback={<Preloader/>}>
                        <Dialogs/>
                     </Suspense>}>
                     <Route path=":userId" element={<Chat/>}/>
                  </Route>
                  <Route path="/users" element={
                     <Suspense fallback={<Preloader/>}>
                        <Users/>
                     </Suspense>}/>
                  <Route path="/news" element={<News/>}/>
                  <Route path="/music" element={<Music/>}/>
                  <Route path="/settings" element={<Settings/>}/>
                  <Route path="/*" element={<Error/>}/>
               </Routes>
            </div>
            <div className="bg-gray-200 w-175 text-custom"
                 style={{gridArea: 'f'}}>
               <Contact/>
            </div>
         </div>
      </BrowserRouter>
   )
}

export default App
