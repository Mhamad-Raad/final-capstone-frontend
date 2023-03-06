import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Rating } from '@mui/material';
import { addTrip } from '../redux/tripSlice';

import '../assets/stylesheets/addtrip.css';

const AddTripForm = () => {
  const [addSuccess, setAddSuccess] = useState(false);
  const [addFailed, setAddFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [price, setPrice] = useState('');
  const [rating, setRating] = useState();
  const [destinationCity, setDestinationCity] = useState('');
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const userId = parseInt(user.id, 10);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('price', price);
    formData.append('rating', rating);
    formData.append('destination_city', destinationCity);
    formData.append('description', description);
    formData.append('user_id', userId);
    formData.append('image', image);
    setLoading(true);
    try {
      await dispatch(addTrip(formData));
      setAddSuccess(true);
      setTimeout(() => {
        setAddSuccess(false);
      }, 3000);
    } catch (error) {
      setAddFailed(true);
      setTimeout(() => {
        setAddFailed(false);
      }, 3000);
    } finally {
      setLoading(false);
    }

    setPrice('');
    setRating('');
    setDestinationCity('');
    setImage(null);
    setDescription('');
  };

  return (
    <div className="add-trip-page column">
      <h2 className="trip-header">Add Trip</h2>
      {addSuccess && <p className="success-msg msg">Trip added successfully!</p>}
      {addFailed && <p className="error-msg msg">Failed to add a trip! Pleae try again later</p>}
      {loading && <p className="loading-msg msg">Adding trip...</p>}

      <form onSubmit={handleSubmit} className="add-trip-form column">
        <span className="currencyinput row">
          <input
            type="number"
            className="add-trip-price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            required
          />
          $
        </span>

        <span className="row rating-row">
          <span className="rate-title">Rate: </span>
          <Rating
            defaultValue={2.5}
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
          required
        />

        <span className="image-row row">
          <span className="image-title">
            Image:
          </span>
          <input
            type="file"
            id="image"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </span>

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
