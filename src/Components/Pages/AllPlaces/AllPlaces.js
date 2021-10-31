import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Service from '../../Sheared/Place/Place';

const AllPlaces = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // get all places data
    useEffect(() => {
        fetch('https://sheltered-depths-95295.herokuapp.com/places')
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
                setIsLoading(false)
            })
    }, []);
    
    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center my-4">
        <h2>
        <Spinner className='me-2' animation="grow" />Loading...
        </h2>
    </div>
    }
    else {
        return (
            <div>
                <div
                    style={{ background: '#12C1AD' }}
                    className="fw-bold py-4  text-white">
                    <Container>
                        <h2>All The Beautyfull Places</h2>
                    </Container>
                </div>
                <Container>
                    <Row className="g-4 my-3">
                        {
                            places.map(service => <Service
                                key={service._id}
                                service={service}>
                            </Service>)
                        }
                    </Row>
                </Container>
            </div>
        );
    }
};

export default AllPlaces;