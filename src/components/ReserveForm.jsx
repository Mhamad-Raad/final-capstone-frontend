import { useRef } from 'react';
import '../assets/stylesheets/reserve-form.css';

export default function ReserveForm() {
  const departureCity = useRef();
  const timeRef = useRef();
  const dateRef = useRef();

  const reserveHandler = () => {
    const user = localStorage.getItem('user');
    const data = fetch('http://localhost:4000/api/v1/reservations', {
      method: 'POST',
      body: {
        departure_city: departureCity.current.value,
        time: timeRef.current.value,
        date: dateRef.current.value,
        user_id: user.id,
        trip_id: 0,
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => res.json());

    console.log(data);
  };

  return (
    <div className="reserve__container column">
      <h1 className="reserve_title">Reserve</h1>
      <form className="reserve_form column">
        <select className="departure-city-input" ref={departureCity}>
          <option value="Sulaimaniyah">Sulaimaniyah</option>
          <option value="Erbil">Erbil</option>
        </select>
        <input type="time" ref={timeRef} />
        <input type="date" ref={dateRef} />
        <button type="button" onClick={reserveHandler} className="reserve-btn">
          Reserve
        </button>
      </form>
    </div>
  );
}
