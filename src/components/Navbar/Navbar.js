import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Image/logo.png';

const Navbar = () => {

    const cart = <i class="fas fa-cart-plus"></i>;

    // menu bar
    return (
        <div className="navbar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-img">
                            <Link to='/home'><img className="w-100 pt-2" src={logo} alt="" /></Link>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container pt-2">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About</li>
                                </Link>
                                <Link to="/Services" className="items">
                                    <li>services</li>
                                </Link>
                                <Link to="/contact" className="items">
                                    <li>Contact us</li>
                                </Link>
                                <li className="items">{cart} 0</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;