import './App.css';
import {
  Route, useNavigate, Routes, useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Home from './components/Home';
import AddTrip from './components/AddTripForm';
import { setToken } from './redux/reducers/sessionSlice';
import Landing from './pages/Landing';
import DeleteTrip from './pages/DeleteTrip';
import DetailsPage from './pages/DetailsPage';
import MyResevationsPage from './pages/MyResevationsPage';
import ReserveTrip from './pages/ReserveTrip';

const unProtectedRoutes = [
  '/sign-in',
  '/sign-up',
  '/',
];

const App = () => {
  const session = useSelector((store) => store.session);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!session.token || !session.user) {
      const token = (localStorage.getItem('token') !== null);
      const user = (localStorage.getItem('user') !== null);

      if (token && user) {
        dispatch(
          setToken({
            token,
            user,
          }),
        );
        if (unProtectedRoutes.includes(location.pathname)) {
          navigate('/home');
        }
      } else if (location.pathname !== '/sign-up' && location.pathname !== '/') {
        navigate('/sign-in');
      }
    } else if (unProtectedRoutes.includes(location.pathname)) {
      navigate('/home');
    }
  }, []);

  return (
    <Routes>
      <Route exact path="/sign-up" element={<Signup />} />
      <Route exact path="/sign-in" element={<SignIn />} />
      <Route exact path="/home/:id/reserve" element={<ReserveTrip />} />
      {/* <Route exact path="/trips" element={<Trips />} /> */}
      <Route exact path="/reservations" element={<MyResevationsPage />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/home/:id" element={<DetailsPage />} />
      <Route exact path="/add-trip" element={<AddTrip />} />
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/delete-trip" element={<DeleteTrip />} />
    </Routes>
  );
};

export default App;
