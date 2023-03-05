import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';
import { fetchTrips, deleteTrip } from '../redux/tripSlice';
import '../assets/stylesheets/delete.css';

const DeleteTrip = () => {
  const trips = useSelector((state) => state.trips.trips);
  const dispatch = useDispatch();
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [deleteFailed, setDeleteFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await dispatch(deleteTrip(id));
      setDeleteSuccess(true);
      setTimeout(() => {
        setDeleteSuccess(false);
      }, 3000);
    } catch (error) {
      setDeleteFailed(true);
      setTimeout(() => {
        setDeleteFailed(false);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  const availableTrips = trips.length;

  const message = `We have ${availableTrips} trip${availableTrips !== 1 ? 's' : ''} available.
  ${availableTrips ? 'Select a trip from below to delete!' : 'Add some trips!'}`;

  return (
    <section className="delete-page">
      <div className="content">
        <h1>Available Trips</h1>
        <p className="message">{message}</p>
        {deleteSuccess && <p className="success-msg msg">Trip deleted successfully!</p>}
        {deleteFailed && <p className="error-msg msg">Failed to delete a trip!</p>}
        {loading && <p className="loading-msg msg">Deleting trip...</p>}
        <div className="all-trips">
          {trips.map((trip) => (
            <div className="single-trip" key={trip.id}>
              <img src={trip.image_url} alt={trip.destination_city} />
              <div className="trip-content">
                <h2>{trip.destination_city}</h2>
                <p>
                  $
                  {trip.price}
                </p>
                <button type="button" onClick={() => handleDelete(trip.id)} disabled={loading}>
                  <FaTrashAlt />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeleteTrip;
