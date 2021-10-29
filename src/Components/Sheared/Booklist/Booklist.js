import React from 'react';
import { Col, Container, Row, Button} from 'react-bootstrap';

const Booklist = ({ place }) => {
    console.log(place?.address);
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <img className="img-fluid img-thumbnail" src={place.img} alt="" />
                    </Col>
                    <Col md={9}>
                        <h2 className="text-capitalize mb-0">{place.name}</h2>
                        <span style={{fontSize: '8px'}} className="bg-warning py-1 mb-4 text-capitalize px-2 fw-bold rounded-pill text-center">{place.status}...</span>
                        <p className=" text-muted text-capitalize">From : {place?.address}</p>
                        <h4
                            className='fs-4 mb-3'>
                            <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                ${place.rate}
                            </span>
                        </h4>
                        <div className="d-flex align-items-center g-3">
                        <Button
                            // onClick={() => handleAddToBookList(place)}
                            style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                            className="rounded-pill border-0 px-4 py-2 me-3">
                            Delete
                        </Button>
                        <Button
                            // onClick={() => handleAddToBookList(place)}
                            style={{ background: 'transparent', outline: 'none', color: '#000' }}
                            className="rounded-pill border-1 border-secondary px-4 py-2">
                            Update
                        </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booklist;