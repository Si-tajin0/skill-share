import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    // contact section
    return (
        <div>
            <div className="contact-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 my-5">
                            <div className="text-center text-area">
                                <h1 className="title">
                                    Search Our Academy Resources
                                </h1>
                                {/* selected form */}
                                <Form.Select size="lg">
                                    <option>Open entry and open access. Open entry for learners around the globe and continual access to course content after the course end date.</option>
                                    <option>Open platform and ecosystem. Open platform to integrate and innovate with third-party tools.</option>
                                    <option>Open data. Open, de-identified Canvas Network data for researchers to analyze and synthesize.</option>
                                </Form.Select>
                                <p className="text-white text-center mt-3">
                                    share Skill is an open space for educators to share, experiment, analyze, and create.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className="text-center">
                <h1 style={{ color: '#a51c30' }}>Contact us</h1>
                <h3>How to get Help in Share skill</h3>
                <p style={{ color: "#a51c30" }}>Log in to see support option</p>
            </div>
            <div className="container my-5">
                {/* login form */}
                <Form>
                    <Row className="mb-3">
                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button className='about-btn' variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;