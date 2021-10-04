import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    // banner area
    return (
        <div className="banner-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center text-area">
                            <h4 className="text-white">Professional Development for Educators</h4>
                            <h1 className="title">
                                Because the Best Educators <br /> Never Stop Learning
                            </h1>
                            <p className="text-white text-center mt-3">
                                Lifelong learning and professional development for educators go hand-in-hand with <br /> Canvas Network's open, online courses, taught by experts and institutions <br /> worldwide.
                            </p>
                            {/* link button */}
                            <Link to='/about'>
                                <button className="mt-3 btn">About Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;