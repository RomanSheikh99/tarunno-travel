import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useServices from '../../../../Hooks/useServices';
import Service from '../../../Sheared/Service/Service';

const Services = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
                setIsLoading(false)
            })
    }, []);
    
    if(isLoading){
        return <div className="d-flex justify-content-center align-items-center my-4">
            <h2>
            <Spinner className='me-2' animation="grow" />Loading...
            </h2>
        </div>
    } else {
        return (
            <div className="my-5">
                <Container>
                    <Row>
                        <h2 className="mt-4 p-0"> Our <span className="fw-bold">Services</span></h2>
                        <div
                            style={{ marginBottom: '16px', height: '3px', width: '220px', background: '#12C1AD' }}
                        >
                        </div>
                        <p>We are committed to provide affordable services, without any compromise on <br /> the quality of service – so that you are able to remain happy.</p>
                    </Row>
                    <Row className="g-4">
                        {
                            places.map((service, index) => {
                                if (index < 6) {
                                    return <Service
                                        key={service._id}
                                        service={service}>
                                    </Service>
                                }
                            })
                        }
                    </Row>
                </Container>
            </div>
        );
    }
    
};

export default Services;