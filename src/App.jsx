import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader'; // Import the Loader component
import LandingPage from './pages/landingPage/LandingPage';
import AboutFaces from './pages/aboutFaces/AboutFaces';
import EventCards from './pages/eventCards/EventCards';
import IndividualCard from './pages/individualCard/IndividualCard';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';

function App() {
  const [loading, setLoading] = useState(false); // Initially, not loading

  const location = useLocation();

  useEffect(() => {
    // Show loader on route change
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [location]); // Runs every time the location (route) changes

  const Mainframe = ({ element }) => (
    <>
      <Navbar />
      {element}
      <Footer />
    </>
  );

  return (
    <>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <Routes>
          <Route path='/' element={<Mainframe element={<LandingPage />} />} />
          <Route path='/aboutFaces' element={<Mainframe element={<AboutFaces />} />} />
          <Route path='/eventCards' element={<Mainframe element={<EventCards />} />} />
          <Route path='/individualCard' element={<Mainframe element={<IndividualCard />} />} />
          <Route path='/profile' element={<Mainframe element={<Profile />} />} />
          <Route path='/login' element={<Mainframe element={<Login />} />} />
        </Routes>
      )}
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
