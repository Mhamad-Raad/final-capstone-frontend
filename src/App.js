import './App.css';
import { Route, useNavigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Signup from './pages/Signup';
import SignIn from './pages/SignIn';
import Home from './components/Home';
import AddTrip from './components/AddTripForm';
import { setToken } from './redux/reducers/sessionSlice';
import Landing from './pages/Landing';
import RootLayout from './components/Root';
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
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <Route path="/" element={<Landing />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/" element={<RootLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/add-trip" element={<AddTrip />} />
        <Route path="/trips/:id" element={<DetailsPage />} />
        <Route path="/delete-trip" element={<DeleteTrip />} />
        <Route path="/home/:id/reserve" element={<ReserveTrip />} />
        <Route path="/my-reservations" element={<MyResevationsPage />} />
      </Route>
    </Routes>
  );
};

export default App;
