import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Navbar from './components/Navbar.jsx'
import Projects from './components/Projects.jsx'
import Home from './components/Home.jsx'

const router = createBrowserRouter ([
  {element: <Navbar /> ,
   children: [{
    path: '/',
    element: <Home />,
  }, 
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/projects',
    element: <Projects />
  }]}
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='background'>
    <div class="main_bg"></div>
            <div class="main_bg layer1"></div>
            <div class="main_bg layer 2"></div>
    </div>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
