import React from 'react';
import './Footer.css'

const Footer = () => {
    // footer area
    return (
        <div className="bg-black py-4">
            <div className="container text-white d-flex">
                <div className="col-md-4">
                    <small><p>&copy; 2021 SKILL SHARE All Rights Reserved</p></small>
                    <small><p>SKILL SHARE offers open, online courses taught by the world’s leading educators everywhere.</p></small>
                </div>
                <div className="col-md-8">
                    <small>
                        <ul className="d-flex footer footer-ul">
                            <li>Course Catalog</li>
                            <li>Privacy Policy</li>
                            <li>Acceptable Use Policy</li>
                            <li>Payment and Refund Policy</li>
                            <li>COPPA compliance</li>
                        </ul>
                    </small>
                    {/* social icon */}
                    <div className="d-flex social-icon">
                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;