import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    // contact section route
    return (
        <div className='py-4'>
            <Container>
                <Row className="py-4">
                    <Col md={8}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12223.50308212751!2d91.41044538032206!3d24.37889570082873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751445418320993%3A0x4aac154dd6283b1f!2sHabiganj!5e0!3m2!1sen!2sbd!4v1635626950491!5m2!1sen!2sbd" style={{width:'100%',height:"300px",borderRadius:'20px'}}></iframe>
                    </Col>
                    <Col md={4}>
                        <h4>Contact Us</h4>
                        <div
                            style={{ marginBottom: '16px', height: '3px', width: '120px', background: '#12C1AD' }}
                        >
                        </div>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                            Habiganj, Sylhet.
                        </span>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faPhoneAlt}></FontAwesomeIcon>
                            +880 1833923107
                        </span>
                        <span
                            className="d-flex gap-2 mt-4 align-items-center">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            dev.romansheikh@gmail.com
                        </span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;