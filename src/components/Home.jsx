import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCaretLeft, BsCaretRight } from 'react-icons/bs';

import { fetchTrips } from '../redux/tripSlice';
import DotSeperator from './DotSeperator';
import '../assets/stylesheets/home.css';

const Home = () => {
  const trips = useSelector((state) => state.trips.trips);
  const dispatch = useDispatch();
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(2);

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const handleClickLeft = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 3);
      setEndIndex(endIndex - 3);
    }
  };

  const handleClickRight = () => {
    if (endIndex < trips.length - 1) {
      setStartIndex(startIndex + 3);
      setEndIndex(endIndex + 3);
    }
  };

  const headerDotStyle = {
    marginTop: '25px',
  };

  const itemDotStyle = {
    marginBottom: '10px',
    fontSize: '12px',
  };

  const arrowsEndStyle = {
    backgroundColor: 'grey',
  };

  return (
    <div className="column home-page">
      <div className="home-page-header column">
        <h1 className="home-title">Explore the world</h1>
        <p className="home-subtitle">Find your next adventure</p>
        <DotSeperator style={headerDotStyle}>
          ..........................
        </DotSeperator>
      </div>

      <div className="trip-cards-container row">
        {trips.slice(startIndex, endIndex + 1).map((trip) => (
          <Link to={`/home/${trip.id}`} key={trip.id} className="trip-card">
            <img src={trip.image_url} alt={trip.destination_city} className="home-img" />
            <div className="trip-info">
              <h2>{trip?.destination_city.toUpperCase()}</h2>
              <DotSeperator style={itemDotStyle}>
                ............
              </DotSeperator>
              <p className="home-trip-description">{trip.description}</p>
            </div>
          </Link>
        ))}

      </div>
      <button
        type="button"
        className="arrow-button left-arrow"
        onClick={handleClickLeft}
        style={startIndex === 0 ? arrowsEndStyle : null}
      >
        <BsCaretLeft />
      </button>

      <button
        type="button"
        className="arrow-button right-arrow"
        onClick={handleClickRight}
        style={(endIndex - 1 === trips.length
          || endIndex === trips.length
          || endIndex + 1 === trips.length
          || trips.length === 0
        )
          ? arrowsEndStyle
          : null}
      >
        <BsCaretRight />
      </button>
    </div>
  );
};

export default Home;
