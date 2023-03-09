import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rating } from '@mui/material';
import { addTrip } from '../redux/tripSlice';
import Loader from './Loader';
import '../assets/stylesheets/addtrip.css';

const AddTripForm = () => {
  const status = useSelector((state) => state.trips.status);

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
    if (!price || !rating || !destinationCity || !image || !description) {
      setAddFailed(true);
      setTimeout(() => {
        setAddFailed(false);
      }, 3000);
      return;
    }

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

  if (status === 'loading') {
    return <Loader />;
  }

  return (
    <section className="add-trip-page">
      <h1>Add a New Trip</h1>
      <h2>Fill out the informtaion below to add a new trip!</h2>
      {addSuccess && <p className="success-msg msg">Trip added successfully!</p>}
      {addFailed && <p className="error-msg msg">Failed to add a trip. Please fill all fields!</p>}
      {loading && <p className="loading-msg msg">Adding trip...</p>}

      <div>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="column">
            <div className="form-group">
              <Rating
                defaultValue={2.5}
                size="large"
                className="rates-trip"
                onChange={(e) => setRating(e.target.value)}
              />
              <span className="row rating-row" />
            </div>
            <div className="form-group form-image">
              <label htmlFor="image">
                <input
                  type="file"
                  id="image"
                  accept=".jpg, .jpeg, .png"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="number">
                <input
                  type="number"
                  className="add-trip-price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
                <span className="row">Price</span>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="text">
                <input
                  type="text"
                  value={destinationCity}
                  onChange={(e) => setDestinationCity(e.target.value)}
                  required
                />
                <span>Destination City</span>
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="text">
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
                <span>Description</span>
              </label>
            </div>

            <button type="submit" className="submit-btn">Add Trip</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddTripForm;
