import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import { fetchTrips } from '../redux/tripSlice';
import Loader from './Loader';
import '../assets/stylesheets/Details.css';

// the commented code is for future use

const Details = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrips());
  }, [dispatch]);

  const status = useSelector((state) => state.trips.status);
  const trips = useSelector((state) => state.trips.trips);

  if (status === 'loading') {
    return <Loader />;
  }

  const trip = trips.find((trip) => trip.id === +id);

  let img = '';

  if (trip !== undefined && trip?.image_url !== undefined) {
    img = trip?.image_url;
  } else {
    img = 'https://rare-gallery.com/uploads/posts/558972-sky-high-resolution.jpg';
  }

  return (
    <div className="details row">
      <div className="bg_image">
        <img
          src={`${img}`}
          alt="details"
          className="details-img"
        />
        <Link className="back_button" to="/home">
          <IoChevronBackCircleOutline />
        </Link>
      </div>

      <div className="info column">
        <h1 className="info-title">{trip?.destination_city}</h1>
        <p className="quote">Better to see something once than to hear about it a thousand times.</p>
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

        <Link className="home-reserve-btn row" to={`/reserve/${trip?.id}`} data-testid="reservation-link">
          <AiOutlineSetting />
          Reserve
          <BsArrowRightCircle />
        </Link>
      </div>
    </div>
  );
};

export default Details;
