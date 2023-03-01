import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip } from '../redux/tripSlice';

const AddTripForm = () => {
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const userId = user.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        const tripData = {
            price,
            rating,
            destination_city: destinationCity,
            description,
            user_id: userId,
        };
        dispatch(addTrip(tripData));
        setPrice('');
        setRating('');
        setDestinationCity('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="price">
                    Price:
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="rating">
                    Rating:
                </label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="destinationCity">
                    Destination City:
                </label>
                <input
                    type="text"
                    id="destinationCity"
                    value={destinationCity}
                    onChange={(e) => setDestinationCity(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="description">
                    Description:
                </label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <button type="submit">Add Trip</button>
        </form>
    );
};

export default AddTripForm;
