import './App.css';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Home from './components/Home';
import AddTrip from './components/AddTripForm';
import { setToken } from './redux/reducers/registrationSlice';
import Landing from './pages/Landing';
import RootLayout from './components/Root';
// import DeleteTrip from './pages/DeleteTrip';
// import DetailsPage from './pages/DetailsPage';
// import MyResevationsPage from './pages/MyResevationsPage';
// import ReserveTrip from './pages/ReserveTrip';

const App = () => {
  const registration = useSelector((store) => store.registration);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      setToken({
        token,
        user,
      });
    } else if (window.location.pathname !== '/sign-up') {
      navigate('/sign-in');
    }
  }, [registration, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/my-reservations" element={<h1>My Reservations</h1>} />
      </Route>
    </Routes>
  );
};

export default App;
