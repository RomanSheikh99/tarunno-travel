import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import Booklist from '../../Sheared/Booklist/Booklist';

const MyBooklist = () => {
    const [places, setPlaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://sheltered-depths-95295.herokuapp.com/mybooklist`)
            .then(res => res.json())
            .then(data => {
                setPlaces(data)
                setIsLoading(false)
            })
    }, [])
    
    const handleDelete = id => {
        const confirmation = window.confirm('Are You Sure To Delete')
        if (confirmation) {
            const url = `https://sheltered-depths-95295.herokuapp.com/mybooklist/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restPlace = places.filter(place => place._id !== id);
                        setPlaces(restPlace)
                        setIsLoading(false)
                    }
                })
        }
    };

    const myPlaces = places.filter(plc => plc.email === user.email)

    if (isLoading) {
        return <div className="d-flex justify-content-center align-items-center my-4">
            <h2>
                <Spinner className='me-2' animation="grow" />Loading...
            </h2>
        </div>
    }
    else {
        if (myPlaces.length === 0) {
            return <div className="d-flex justify-content-center align-items-center my-4">
                <h2>Nothing Find Hare 😭</h2>
            </div>
        }
        else {
            return (
                <div>
                    {
                        myPlaces.map(place => <Booklist key={place._id} handleDelete={handleDelete} place={place}></Booklist>)
                    }
                </div>
            )
        }
        
    }
    
};

export default MyBooklist;