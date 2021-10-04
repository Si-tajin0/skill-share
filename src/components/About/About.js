import React from 'react';
import './about.css';

const About = () => {
    return (
        <div>
            {/* Bout section */}
            <div className="about-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center text-area">
                                <h4 className="text-white">Remove Restrictions, Revolutionize Learning</h4>
                                <h1 className="title">
                                    Open Minds Open Doors
                                </h1>
                                <p className="text-white text-center mt-3">
                                    Share Skill is an open space for educators to share, experiment, analyze, and create.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="container text-danger">
                <h1>OUR MISSION:</h1>
                <h3>To promote OPENNESS, INNOVATION, and EXPERIMENTATION in education by providing educators access to professional development courses and programs that will help them thrive and succeed in their careers.</h3>

            </div>
            <hr className="mx-5" />
            <div className="container">
                <h4>To Canvas Network ‘open’ means:</h4>
                <ul>
                    <li>Open entry and open access. Open entry for learners around the globe and continual access to course content after the course end date.</li>
                    <li>Open content. Open licensing options and content sharing to Canvas Commons where other instructors reuse, revise, remix, retain, and redistribute content.</li>
                    <li>Open platform and ecosystem. Open platform to integrate and innovate with third-party tools.</li>
                    <li>Open data. Open, de-identified Canvas Network data for researchers to analyze and synthesize.</li>
                    <li>Platform neutrality. Your course. Your goals. Your way. We provide the platform for open innovation and experimentation.</li>
                </ul>
            </div>

        </div>
    );
};

export default About;