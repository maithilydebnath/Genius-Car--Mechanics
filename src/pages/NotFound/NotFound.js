import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notFound.jpg';

const NotFound = () => {
    return (
        <div>
            <h2>Error 404 : Page Not Found</h2>
            <img src={notFound} alt="" srcset="" className="m-2" />
            <br />
            <Link to="/"><button>Go Back</button> </Link>
        </div>
    );
};

export default NotFound;