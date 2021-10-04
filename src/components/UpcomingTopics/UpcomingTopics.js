import React from 'react';
import { Form } from 'react-bootstrap';
import './UpcomingTopics.css';

const UpcomingTopics = () => {
    return (
        <div className="upcoming-topics">
            <div className="container">
                <h1 style={{ fontSize: '60px' }}>Up Coming topics</h1>
            </div>
            <div className="container">
                <ul className="topics">
                    <li className="topic-tag">CAREER DEVELOPMENT</li>
                    <li className="topic-tag">STRATEGIC MANAGEMENT</li>
                    <li className="topic-tag">DATA MINING</li>
                    <li className="topic-tag">MEDICINE</li>
                    <li className="topic-tag">SOCIOLOGY</li>
                    <li className="topic-tag">ECONOMICS</li>
                    <li className="topic-tag">SELF-IMPROVEMENT</li>
                    <li className="topic-tag">DATA VISUALIZATION</li>
                    <li className="topic-tag">DATA SCIENCE</li>
                    <li className="topic-tag">PUBLIC POLICY</li>
                    <li className="topic-tag">FINANCE</li>
                    <li className="topic-tag">PROFESSIONAL DEVELOPMENT</li>
                    <li className="topic-tag">DIGITAL MARKETING</li>
                    <li className="topic-tag">HEALTHCARE</li>
                    <li className="topic-tag">BIG DATA</li>
                </ul>
            </div>
            <div className="subscribe">
                <div>
                    <h1>Get updates on new courses.</h1>
                    <Form.Control size="lg" type="text" placeholder="Email Address" />
                    <div className="subscribe-btn">
                        <button className="about-btn mt-3">SUBSCRIBE</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default UpcomingTopics;