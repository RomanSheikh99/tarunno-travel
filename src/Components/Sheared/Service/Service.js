import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Service = ({ service }) => {

    return (
        <Col md={4} sm={6}>
            <Card className='Services-img'>
                <Card.Img
                    
                    variant="top"
                    style={{ maxHeight: '160px' }}
                    src={service.image} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.description.slice(0, 100)}...
                    </Card.Text>
                    <Link
                        to={`/ServiceDetails/${service.id}`}
                        className="text-decoration-none d-flex align-items-center">
                        <span>Learn More</span>
                        <span style={{ fontSize: '12px',marginLeft:'8px',fontWeight:'300' }}>
                            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faGreaterThan}></FontAwesomeIcon>
                        </span>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;