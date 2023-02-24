// import { useParams } from 'react-router-dom';
import './Details.css';

// the commented code is for future use

export default function Details() {
  // const { id } = useParams();

  return (
    <div className="details row">
      <div className="bg_image">
        <img
          src="https://images.pexels.com/photos/235985/pexels-photo-235985.jpeg?cs=srgb&dl=pexels-pixabay-235985.jpg&fm=jpg"
          alt="details"
          className="img"
        />
        <button className="back_button" type="button">back</button>
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

        <button className="reserve-btn" type="button">Reserve</button>
      </div>
    </div>
  );
}
