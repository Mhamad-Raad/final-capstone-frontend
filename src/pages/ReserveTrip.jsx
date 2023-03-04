import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchTrips } from '../redux/tripSlice';
import ReserveForm from '../components/ReserveForm';
import '../assets/stylesheets/reserve.css';

export default function ReserveTrip() {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const status = useSelector((state) => state.trips.status);
  const trips = useSelector((state) => state.trips.trips);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  const trip = trips.find((trip) => trip.id === +id);

  const style = trip !== undefined
    ? {
      backgroundImage: `url(${trip?.image_url})`,
    }
    : {
      background:
      "url('https://rare-gallery.com/uploads/posts/558972-sky-high-resolution.jpg') no-repeat center center fixed",
    };

  return (
    <>
      <div className="reserve-bg">
        <div className="reserve-img" style={style} />
      </div>
      <ReserveForm trip={trip} trips={trips} />
    </>
  );
}
