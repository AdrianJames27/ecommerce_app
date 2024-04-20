import React from 'react';
import Pai_Icon from '../assets/Pai_Icon.png';
import { Link } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h2>Home</h2>
            <img src={Pai_Icon} alt='Company Logo' width={'100px'} height={'100px'} />
            <Link to={'/product-pages'} >
                <button>Proceed Shopping</button>
            </Link>
        </div>
    );
}

export default Home;