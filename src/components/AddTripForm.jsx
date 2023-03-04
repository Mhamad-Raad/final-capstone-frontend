import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from '@mui/material';
import { addTrip } from '../redux/tripSlice';

import '../assets/stylesheets/addtrip.css';

const AddTripForm = () => {
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState();
  const [destinationCity, setDestinationCity] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userId = parseInt(user.id, 10);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('destination_city', destinationCity);
    formData.append('description', description);
    formData.append('user_id', userId);
    formData.append('image', image);
    dispatch(addTrip(formData));
    setPrice('');
    setRating('');
    setDestinationCity('');
    setImage(null);
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

        <div>
          <label htmlFor="image">
            Image:
            <input
              type="file"
              id="image"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </label>
        </div>

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
