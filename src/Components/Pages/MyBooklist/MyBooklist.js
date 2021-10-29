import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Booklist from '../../Sheared/Booklist/Booklist';

const MyBooklist = () => {
    const [places, setPlaces] = useState([])
    const { user } = useAuth();

    console.log(user.email);

    useEffect(() => {
        fetch(`http://localhost:5000/mybooklist`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setPlaces(data);
        })
    }, [])
    
    const myPlaces = places.filter(plc => plc.email === user.email)
    console.log(myPlaces);
    return (
        <div>
            {
                myPlaces.map(place => <Booklist place={place}></Booklist>)
            }
        </div>
    );
};

export default MyBooklist;