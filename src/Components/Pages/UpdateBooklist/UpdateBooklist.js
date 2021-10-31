import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

const UpdateBooklist = () => {
    const [places, setPlaces] = useState([])
    const { booklistId } = useParams();
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        fetch(`https://sheltered-depths-95295.herokuapp.com/mybooklist`)
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    const updatePlace = places.find(place => place._id == booklistId)

    const onSubmit = data => {
        updatePlace.address = data.address;
        fetch(`https://sheltered-depths-95295.herokuapp.com/mybooklist/${booklistId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatePlace)
        })
            .then(res => res.json())
            .then(data => {
                alert('updated data')
                window.history.back();
            })
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center">
            <form className="add-place-container" onSubmit={handleSubmit(onSubmit)}>
                <h2>{updatePlace?.name}</h2>
                <p>Change Your Address</p>
                <input defaultValue={updatePlace?.address} {...register("address")} />
                <input style={{ background: '#12C1AD', color: '#fff' }} type="submit" value="Update Now"/>
            </form>
        </div>
    );
};

export default UpdateBooklist;