import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaShoppingCart, FaGraduationCap } from 'react-icons/fa';

const Course = (props) => {
    // destructuring
    const { url, title, category, duration, available, description, price } = props.course || {};

    return (
        // card section
        <div className="col-md-6 mb-5">
            <Row xs={1} md={2}>
                {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: '34rem' }}>

                            <img src={url} alt="" />
                            <h4 className="p-2"><FaGraduationCap /> {category}</h4>
                            <Card.Body>
                                <Card.Title><h1 style={{ color: "#a51c30" }}>{title}</h1></Card.Title>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <div className="d-flex justify-content-around">
                                    <h6>{price}</h6>
                                    <h6>{duration}</h6>
                                    <h6>{available}</h6>
                                </div>
                                <div className="text-center mt-4">

                                    <button
                                        className="about-btn me-5"><FaShoppingCart style={{ fontSize: '25px' }} /> ADD To Cart</button>
                                    <button className="about-btn">More Details..</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    );
};

export default Course;