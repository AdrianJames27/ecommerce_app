import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return(
        <nav>
            <li><Link to={'/'} >Home</Link></li>
            <li><Link to={'/my-cart'} >My Cart</Link></li>
        </nav>
    );
}

export default Navigation;