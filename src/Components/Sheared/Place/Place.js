import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Place = ({ service, index}) => {
    return (
        <Col md={4} sm={6}>
            <Card className='places-img'>
                <Card.Img
                    
                    variant="top"
                    style={{ maxHeight: '160px' }}
                    src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {service.desc.slice(0, 100)}...
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <h4>${service.rate}</h4>
                        <Link
                            to={`/placeDetails/${service._id}`}
                            className="text-decoration-none btn btn-outline-dark d-flex align-items-center">
                            Book Now
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;