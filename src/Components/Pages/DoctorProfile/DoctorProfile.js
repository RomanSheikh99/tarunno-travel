import React from 'react';
import { Col, Container, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import doctors from '../../../utilities/doctors'

const DoctorProfile = () => {
    const { doctorID } = useParams();
    
    const displayDoctors = doctors.find(doctor => doctor.id === parseInt(doctorID));
    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col md={4} sm={6}>
                        <img className="img-fluid img-thumbnail"
                            src={displayDoctors.image} alt="" />
                    </Col>
                    <Col md={8} sm={6}>
                        <h2 className="text-capitalize mb-3">{displayDoctors.name}</h2>
                        <h4>Degrees: {displayDoctors.degree}</h4>
                        <h4>Nationality: {displayDoctors.nationality}</h4>
                        <h4>age: {displayDoctors.age}</h4>
                        <h4
                            className='fs-4 mb-3'>Doctor Visiting Cost:
                            <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                ${displayDoctors.salary}
                            </span>
                        </h4>
                        <Button
                            style={{ background: '#12C1AD', outline: 'none' }}
                            className="rounded-pill border-0 px-4 ">
                            <Link
                                style={{ color: '#fff', textDecoration: "none" }}
                                to='/welldone'>
                                Call For Appointment 
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DoctorProfile;