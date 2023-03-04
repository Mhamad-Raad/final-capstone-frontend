import { useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTrips } from '../redux/tripSlice';

import '../assets/stylesheets/reserve-form.css';

export default function ReserveForm() {
  const user = JSON.parse(localStorage.getItem('user'));

  const departureCity = useRef('');
  const timeRef = useRef('');
  const dateRef = useRef('');
  const tripIdRef = useRef('');

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

  const reserveHandler = () => {
    if (tripIdRef.current.value === '' || departureCity.current.value === ''
      || timeRef.current.value === '' || dateRef.current.value === '') {
      window.alert('Please fill all the fields');
      return;
    }

    const token = localStorage.getItem('token');

    fetch('http://localhost:4000/api/v1/reservations', {
      method: 'POST',
      body: JSON.stringify({
        user_id: user.id,
        departure_city: departureCity.current.value,
        date: dateRef.current.value,
        time: timeRef.current.value,
        trip_id: tripIdRef.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  };

  const destination = trip?.destination_city[0].toUpperCase() + trip?.destination_city.slice(1);

  return (
    <div className="reserve__container column">
      {trip !== undefined ? <h1 className="reserve_title">{destination}</h1> : <h1 className="reserve_title">Reserve</h1>}
      {trip !== undefined && (
        <p className="reserve_subtitle">
          {`${trip?.destination_city} - ${trip?.description}`}
        </p>
      )}
      <form className="reserve_form column">
        <div className="first-row row">
          <input
            className="username"
            type="username"
            name="username"
            defaultValue={user.name}
            required
          />

          <select className="trip-input" ref={tripIdRef}>
            <option value="" selected>Select</option>
            {
              trips?.map((t) => (
                <option
                  value={t?.id}
                  selected={t?.id === trip?.id}
                  key={t?.id}
                >
                  {t.destination_city}
                </option>
              ))
            }
            <option value="Sulaimaniyah">Sulaimaniyah</option>
            <option value="Erbil">Erbil</option>
          </select>
        </div>
        <select className="departure-city-input" ref={departureCity}>
          <option value="" selected>Select Departure City</option>
          <option value="Sulaimaniyah">Sulaimaniyah</option>
          <option value="Erbil">Erbil</option>
        </select>
        <input type="time" ref={timeRef} required />
        <input type="date" ref={dateRef} required />
        <button type="button" onClick={reserveHandler} className="reserve-btn">
          Reserve
        </button>
      </form>
    </div>
  );
}
