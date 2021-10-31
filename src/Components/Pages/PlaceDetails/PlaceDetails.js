import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Button, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const PlaceDetails = () => {
    const { placeID } = useParams();
    const [place, setPlace] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const { user } = useAuth();
    const { register, handleSubmit } = useForm();
    const [address, setAddress] = useState('Dhaka, Bangladesh')


    const onSubmit = address => {
        setAddress(address.address);
    };

    useEffect(() => {
        fetch(`https://sheltered-depths-95295.herokuapp.com/place/${placeID}`)
            .then(res => res.json())
            .then(data => {
                setPlace(data)
                setIsLoading(false)
            })
    }, []);

    const handleAddToBookList = data => {
        data._id = data._id + 1;
        data.email = user.email;
        data.status = "pending";
        data.address = address;

        axios.post('https://sheltered-depths-95295.herokuapp.com/bookList', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert(data.name + ' Add To Booklist')
                    // window.history.back();
                    history.push('/allPlaces')
                }
            })
    };

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center my-4">
            <h2>
                <Spinner className='me-2' animation="grow" />Loading...
            </h2>
        </div>
    }
    else {
        return (
            <div className="my-5">
                <Container>
                    <Row>
                        <Col md={4}>
                            <img className="img-fluid img-thumbnail" src={place.img} alt="" />
                        </Col>
                        <Col md={8}>
                            <h2 className="text-capitalize mb-3">{place.name}</h2>
                            <p className=" text-muted">{place.desc}</p>
                            <h4
                                className='fs-4 mb-3'>Cost For This Journey:
                                <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                    ${place.rate}
                                </span>
                            </h4>
                            <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
                                <h6>Enter Address For Booking</h6>
                                <input
                                    style={{ outline: 'none' }}
                                    className="p-2 rounded-pill border-1 border-secondary text-center"
                                    defaultValue="Dhaka, Bangladesh" {...register("address", { required: true })} />
                                <input
                                    style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                    className="rounded-pill ms-2 border-0 py-2 px-3" type="submit" value="Add" />
                            </form>
                            <Button
                                onClick={() => handleAddToBookList(place)}
                                style={{ background: '#12C1AD', outline: 'none', color: '#fff' }}
                                className="rounded-pill border-0 px-4 py-2">
                                Add To Booking List
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
};

export default PlaceDetails;