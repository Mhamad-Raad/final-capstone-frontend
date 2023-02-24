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

      <div className="info">
        <h1>Details</h1>
        <p>Details</p>
      </div>
    </div>
  );
}
