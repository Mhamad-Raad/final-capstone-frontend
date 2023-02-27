// import { useParams } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { AiOutlineSetting } from 'react-icons/ai';
import { BsArrowRightCircle } from 'react-icons/bs';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import './Details.css';

// the commented code is for future use

export default function Details() {
  // const { id } = useParams();

  // const trips = useSelector((state) => state.trips.trips);

  // const trip = trips.find((trip) => trip.id === id);

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
        <button className="back_button" type="button">
          <IoChevronBackCircleOutline />
        </button>
      </div>

      <div className="info column">
        <h1 className="info-title">Details</h1>
        <p className="info-subtitle">subtext</p>
        <div className="box row">
          <p>
            price
          </p>
          <p>
            100$
          </p>
        </div>

        <div className="darkbox row">
          <p>
            price
          </p>
          <p>
            100$
          </p>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </p>

        <button className="reserve-btn row" type="button" onClick={reserveHandler}>
          <AiOutlineSetting />
          Reserve
          <BsArrowRightCircle />
        </button>
      </div>
    </div>
  );
}
