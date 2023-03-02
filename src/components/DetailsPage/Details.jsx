import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { fetchTrips } from '../../redux/tripSlice';
import '../../assets/stylesheets/Details.css';

// the commented code is for future use

export default function Details() {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const status = useSelector((state) => state.trips.status);
  const trips = useSelector((state) => state.trips.trips);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  console.log(trips);

  const trip = trips.find((trip) => {
    console.log(trip.id);
    return trip.id === +id;
  });

  console.log(trip);

  const reserveHandler = () => {
    // route to reserve page
  };

  return (
    <div className="details row">
      <div className="bg_image">
        <img
          src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg"
          alt="details"
          className="img"
        />
        <Link className="back_button" to="/home">
          <IoChevronBackCircleOutline />
        </Link>
      </div>

      <div className="info column">
        <h1 className="info-title">{trip?.destination_city}</h1>
        <div className="box row">
          <p>
            Price
          </p>
          <p>
            {`${trip?.price} $`}
          </p>
        </div>

        <div className="darkbox row">
          <p>
            Ratings
          </p>
          <p>
            {`${trip?.rating}/5`}
          </p>
        </div>

        <p className="description">
          {trip?.description}
        </p>

        <button className="home-reserve-btn row" type="button" onClick={reserveHandler}>
          <AiOutlineSetting />
          Reserve
          <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
}