import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import services from '../../../utilities/services';

const ServiceDetails = () => {
    const { serviceID } = useParams();

    const displayService = services.find(service => service.id === parseFloat(serviceID))

    return (
        <div className="my-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <img className="img-fluid img-thumbnail" src={displayService.img} alt="" />
                    </Col>
                    <Col md={8}>
                        <h2 className="text-capitalize mb-3">{displayService.name}</h2>
                        <p className=" text-muted">{displayService.desc}</p>
                        <h4
                            className='fs-4 mb-3'>Cost For This Test:
                            <span style={{ color: '#12C1AD', marginLeft: '8px' }}>
                                ${displayService.cost}
                            </span>
                        </h4>
                        <Button
                            style={{ background: '#12C1AD', outline: 'none' }}
                            className="rounded-pill border-0 px-4 ">
                            <Link
                                style={{ color: '#fff', textDecoration: "none" }}
                                to='/welldone'>
                                Take This Test
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceDetails;