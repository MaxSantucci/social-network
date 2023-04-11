import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {store} from './redux/state';

let rerenderEntireTree = () => {
   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
         <App
            store={store}
         />
      </React.StrictMode>,
   )
}

store.subscriber(rerenderEntireTree)
rerenderEntireTree()