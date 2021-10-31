import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';

const MangeBooklist = () => {
    const [booklist, setBooklist] = useState([]);
    const [loading, setLoading] = useState(true);

    // get all booklist place data
    useEffect(() => {
        fetch('https://sheltered-depths-95295.herokuapp.com/booklist')
            .then(res => res.json())
            .then(data => {
                setBooklist(data)
                setLoading(false)
            })
    }, [booklist, loading]);

    // delete place from booklist
    const handleDelete = id => {
        console.log(id);
        fetch(`https://sheltered-depths-95295.herokuapp.com/booklist/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount) {
                    const rest = booklist.filter(service => service._id !== id)
                    setBooklist(rest);
                    alert('Deleted Successfully')
                }
            })
    };

    // update pending data to approved
    const handleApproved = data => {
        data.status = "approved";
        fetch(`https://sheltered-depths-95295.herokuapp.com/approved/${data._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                setLoading(true)
                alert('Request Approved')
            })
    };

    if (loading) {
        return <div>
            <h2 className="text-center my-5">
                <Spinner className='me-2' animation="grow" />Loading...
            </h2>
        </div>
    }
    else {
        if (booklist.length === 0) {
            return <div className="d-flex justify-content-center align-items-center my-4">
                <h2>Nothing Find Hare 😭</h2>
            </div>
        }
        else {
            return (
                <div>
                    <Container>
                        <h2 className='text-center my-4'>Manage All Booklist</h2>
                        <Row>
                            <Col>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">Index</th>
                                            <th scope="col">Place Name</th>
                                            <th scope="col">User Email</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            booklist.map(place => {
                                                return <tr>
                                                    <th scope="row">{booklist.indexOf(place)}</th>
                                                    <td>{place.name}</td>
                                                    <td>{place.email}</td>
                                                    {place.status === 'pending' ? <td className="text-warning">{place.status}</td> : <td className="text-success">{place.status}</td>}
                                                    <td className="d-flex align-items-center">
                                                        <button
                                                            onClick={() => handleDelete(place._id)}
                                                            className='btn btn-danger me-2'>cancel</button>
                                                        <button
                                                            onClick={() => handleApproved(place)}
                                                            className="btn btn-warning">approved</button>
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
};

export default MangeBooklist;