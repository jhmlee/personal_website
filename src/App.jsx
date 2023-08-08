import { useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.css'

const App = () => {
  return (  
  <>
    <Navbar />
    <p>Testing this oasdfasdfut</p>
    <Link to="profile" >profile page</Link>
  </> );
}
 
export default App;


