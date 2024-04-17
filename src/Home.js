import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
    const isMobile = window.innerWidth < 768;

    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>
            <div className={isMobile ? 'link-container vertical-links' : 'link-container horizontal-links'}>
                <Link to="/page1"><button>Go to Page 1</button></Link>
                <Link to="/page2"><button>Go to Page 2</button></Link>
            </div>
        </div>
    );
}


export default Home;
