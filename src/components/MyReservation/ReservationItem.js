import React from 'react';

export default function ReservationItem() {
  return (
    <li className='reservation-item row'>
      <div className='column'>
        <h2 className='destination-city'>Destination city</h2>
        <h3 className='departure-city'>Departure city</h3>
      </div>
      <h2 className="reservation-date">Reservation date</h2>
    </li>
  );
}
