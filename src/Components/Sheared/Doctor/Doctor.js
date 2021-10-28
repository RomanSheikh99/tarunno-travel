import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Doctor = ({doctor}) => {
    return (
        <Col md={4} sm={6}>
            <Link to={`/DoctorProfile/${doctor.id}`}>
                <div style={{ overflow: 'hidden' }} className="position-relative doctor-card">
                    <div
                        style={{ background: '#ddd', overflow: 'hidden' }}
                        className="d-flex align-items-center justify-content-center rounded-2">
                        <img
                            style={{ height: '460px' }}
                            className='img-fluid'
                            src={doctor.image} alt=""
                        />
                    </div>
                    <div
                        className="doctor-details align-items-end justify-content-center rounded-2">
                        <div className="text-center text-black">
                            <h2 className='text-capitalize '>{doctor.name}</h2>
                            <h6 className=''>{doctor.degree}</h6>
                        </div>
                    </div>
                </div>
            </Link>
        </Col>
    );
};

export default Doctor;