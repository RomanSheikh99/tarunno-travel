import React from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Booklist = ({ place, handleDelete }) => {
    
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <img className="img-fluid img-thumbnail" src={place.img} alt="" />
                    </Col>
                    <Col md={9}>
                        <h2 className="text-capitalize mb-0">{place.name}</h2>
                        {place.status == 'pending'?<span style={{ fontSize: '8px' }} className="bg-warning py-1 mb-4 text-capitalize px-2 fw-bold rounded-pill text-center">{place.status}...</span>:<span style={{ fontSize: '8px' }} className="bg-success py-1 mb-4 text-capitalize px-2 fw-bold rounded-pill text-center">{place.status}...</span>}
                        <p className=" text-muted text-capitalize">From : {place?.address}</p>
                        <h4
                            className='fs-4 mb-3'>
                            <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                ${place.rate}
                            </span>
                        </h4>
                        
                        <div className="d-flex align-items-center">
                            <Button
                                onClick={() => handleDelete(place._id)}
                                style={{ background: 'none', outline: 'none', color: '#000' }}
                                className="rounded-pill border-2 border-secondary px-4 py-2 me-3">
                                Delete
                            </Button>
                            <Link
                                to={`/updateBooklist/${place._id}`}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="text-decoration-none rounded-pill px-4 py-2">
                                Update
                            </Link>
                        </div>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booklist;