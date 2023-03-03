import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTrip } from '../redux/tripSlice';

const AddTripForm = () => {
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
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
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="destinationCity">
          Destination City:
          <input
            type="text"
            id="destinationCity"
            value={destinationCity}
            onChange={(e) => setDestinationCity(e.target.value)}
          />
        </label>
      </div>
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
      <div>
        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default AddTripForm;
