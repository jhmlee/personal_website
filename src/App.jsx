import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css'

const App = () => {
  return (  
  <>
    <Navbar />
    <Home/>
  </> );
}
 
export default App;


