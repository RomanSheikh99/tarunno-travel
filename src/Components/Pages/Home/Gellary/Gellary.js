import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Gellary = () => {
    return (
        <div>
            <Container>
                <h2 className="text-center my-3">Our Gellary</h2>
                <Row className='g-0'>
                    <Col md={4}>
                        <img src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-04.jpg" className="img-fluid h-100  w-100  " alt="" />
                    </Col>
                    <Col md={4}>
                        <img src="https://www.top10bd.com/wp-content/uploads/2019/08/bandorban.jpg" className="img-fluid h-100  w-100 " alt="" />
                    </Col>
                    <Col md={4}>
                        <img src="https://blog.flyticket.com.bd/wp-content/uploads/2019/06/sajek-valley-1-1.jpg" className="img-fluid h-100  w-100  " alt="" />
                    </Col>
                </Row>
                <Row className='g-0'>
                    <Col md={7}>
                        <img src="https://3.bp.blogspot.com/-hcPw4nWGEuY/V-Ep5LOC7sI/AAAAAAAAF9U/74yvOMfzVKcwveyKJ8Hb0aM27KFT5ZY6ACEw/s1600/photo%2B5e.JPG" className="img-fluid h-100  w-100 " alt="" />
                    </Col>
                    <Col md={5}>
                        <img src="https://nomadparadise.com/wp-content/uploads/2021/04/bangladesh-places-07-1024x683.jpg" className="img-fluid h-100  w-100  " alt="" />
                    </Col>
                </Row>
                <Row className='g-0'>
                    <Col md={6}>
                        <Row className="g-0">
                            <Col md={6}>
                                <img src="https://topinbangladesh.com/wp-content/uploads/2020/03/Chittagong-Hill-Tracts.jpg" className="img-fluid h-100  w-100  " alt="" />
                            </Col>
                            <Col md={6}>
                                <img src="https://i.pinimg.com/originals/d6/22/30/d62230082be580cd40d54b17fac7817c.jpg" className="img-fluid h-100  w-100  " alt="" />
                            </Col>
                        </Row>
                        <Row className="g-0">
                            <Col md={7}>
                                <img src="https://2.bp.blogspot.com/-Dw6B95Tjtcg/VnSEyLaDZbI/AAAAAAAAAM8/pj9Kb16qtnU/s1600/Saint%2BMartins.jpg" className="img-fluid h-100  w-100  " alt="" />
                            </Col>
                            <Col md={5}>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUkz-N2fU5vEA9U8f9nYrG-FRNBe891l-fw&usqp=CAU" className="img-fluid h-100  w-100  " alt="" />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={6}>
                        <img src="https://cdn.trell.co/w=640,h=640,fit=scale-down/format=webp,quality=50/user-images/images/orig/Ap3eecd5kMLk5mqoUCG4SLvq7zsFtvrS.jpg" className="img-fluid h-100  w-100  " alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Gellary;