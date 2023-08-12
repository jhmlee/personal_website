import resume from '../assets/mason_lee_resume.pdf';
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const[hover, setHover] = useState(false);

    const navigation = [
        {name: 'about', href: '/about'},
        {name: 'projects', href: '/projects'}
    ]
    return (
        <>
        <nav className="navbar">
            <div className="navName"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            <Link to ="/"
            style = {{fontSize: "36px",
            color: hover ? "#3B60E4" : "#302B27"}}>Mason Lee</Link>
            </div>
            <div className="links">
                <ul>
                {navigation.map((link) => (
                <li key={link.name} >
                <NavLink
                    key={link.name}
                    to={link.href}
                    activeClassName="active"
                >
                {link.name}
                </NavLink>
                </li>
    ))}
                <li><Link to={resume} className='navLinks'target="_blank" rel="noreferrer">resume</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet />
        </>
        
    );
}
 
export default Navbar;