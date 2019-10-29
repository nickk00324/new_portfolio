import React from 'react';
import './Navbar.css';

const Navbar = ({displayNewCategory}) => {
    return(
        <nav className='main-nav'>
            <button onClick={() => displayNewCategory('art')} className="nav-button">art</button>
            <button onClick={() => displayNewCategory('design')} className="nav-button">design</button>
            <button onClick={() => displayNewCategory('links')} className="nav-button">links</button>
            <button onClick={() => displayNewCategory('all')} className="nav-button">all</button>
        </nav>
    );
}

export default Navbar;