import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Header} from "./components/Header";

function App() {

  return (
    <div className="App">
       <header>
          <img src="assets/logo.png" alt="logo"/>
       </header>
       <Header />
    </div>
  )
}

export default App
