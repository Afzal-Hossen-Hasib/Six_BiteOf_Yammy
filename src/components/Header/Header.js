import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='navigation-menu'>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        <Link to="/reviews">Reviews</Link>
                        <Link to="/dashboard">Dashboard</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;