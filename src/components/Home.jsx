import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrips } from '../redux/tripSlice';

const Home = () => {
  const trips = useSelector((state) => state.trips.trips);
  const status = useSelector((state) => state.trips.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {trips.length > 0 && trips.map((trip) => (
        <div key={trip.id}>
          <Link to={`/home/${trip.id}`}>
            <h2>{trip.destination_city}</h2>
            <p>{trip.description}</p>
            <p>{trip.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
