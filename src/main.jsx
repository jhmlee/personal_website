import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter ([
  {element: <Navbar /> ,
   children: [{
    path: '/',
    element: <App />,
  }, 
  {
    path: '/about',
    element: <About />,
  }]}
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
