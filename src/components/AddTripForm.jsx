import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from '@mui/material';
import { addTrip } from '../redux/tripSlice';

import '../assets/stylesheets/addtrip.css';

const AddTripForm = () => {
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState();
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
    <div className="add-trip-page column">
      <h2 className="trip-header">Add Trip</h2>
      <form onSubmit={handleSubmit} className="add-trip-form column">
        <span className="currencyinput row">
          <input
            type="number"
            className="add-trip-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
          />
          $
        </span>

        <span className="row rating-row">
          <span className="rate-title">Rate: </span>
          <Rating
            defaultValue={3.5}
            precision={0.5}
            size="large"
            className="rates-trip"
            onChange={(e) => setRating(e.target.value)}
          />
        </span>

        <input
          type="text"
          value={destinationCity}
          onChange={(e) => setDestinationCity(e.target.value)}
          placeholder="Destination City"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />

        <button type="submit">Add Trip</button>
      </form>
    </div>
  );
};

export default AddTripForm;
