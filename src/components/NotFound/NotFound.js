import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import img from "../../Image/404-error-page-found_41910-364.jpg";

const NotFound = () => {
    // 404 page not found
    return (
        <div className="container text-center not-found">
            <h1>Page not found</h1>
            <p>The page you requested can't be found. You may want to start from our <Link to='/home'><span>homepage</span></Link> or <Link to='/services'><span>view all course.</span></Link></p>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;