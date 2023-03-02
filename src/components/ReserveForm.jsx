import '../assets/stylesheets/reserve-form.css';

export default function ReserveForm() {
  const reserveHandler = () => {
    // route to reserve page
  };

  return (
    <div className="reserve__container column">
      <h1 className="reserve_title">Reserve</h1>
      <form className="reserve_form column">
        <select className="departure-city-input">
          <option value="Sulaimaniyah">Sulaimaniyah</option>
          <option value="Erbil">Erbil</option>
        </select>
        <input type="time" />
        <input type="date" />
        <button type="submit" onClick={reserveHandler} className="reserve-btn">
          Reserve
        </button>
      </form>
    </div>
  );
}
