import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';

const About = () => {
    // about page route
    return (
        <div>
            <div
                style={{ background: '#12C1AD' }}
                className="fw-bold py-4  text-white">
                <Container>
                    <h2>About Us</h2>
                </Container>
            </div>
            <Container>
                <Row className="my-5">
                    <Col md={5}>
                        <div className="mb-5">
                            <img className="img-fluid w-100 rounded-3" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fSbcmJsnKRQ2Tho1kufe83HIVQdgd3zo8g&usqp=CAU' alt="" />
                        </div>
                    </Col>
                    <Col md={7}>
                        <div className="mb-5">
                            <h2 className="mb-2">A LITTLE BIT ABOUT US</h2>
                            <p className="">Bangladesh is a land of mystery and intrigue. The country is centuries old and while it has seen many visitors over the years, it is only now starting to experience a commercial tourism boom. In many respects, Bangladesh is a land of opportunity and adventure. All you need do is step out and discover its many mysteries for yourself.There are so many things to be enjoyed here. Perhaps one of the most popular activities is that of sunning yourself on the exquisite white sandy beaches of Cox’s Bazaar and Teknaaf. Both beaches are situated on the eastern coast of the Bay of Bengal and are relatively unspoilt by tourists making them a great place to spend vacation time. Another attraction is the many archaeological sites in the country. They are interesting from a cultural and architectural point of view and can be fascinating to tour.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;