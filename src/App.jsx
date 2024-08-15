import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader'; 
import LandingPage from './pages/landingPage/LandingPage';
import AboutFaces from './pages/aboutFaces/AboutFaces';
import EventCards from './pages/eventCards/EventCards';
import IndividualCard from './pages/individualCard/IndividualCard';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { AuthProvider } from './AuthContext';

function App() {
  const [loading, setLoading] = useState(false); 

  const location = useLocation();

  useEffect(() => {
 
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, [location]); 

  const Mainframe = ({ element }) => (
    <>
      <AuthProvider>
      <Navbar />
      {element}
      <Footer />
      </AuthProvider>
    </>
  );

  return (
    <>
      {loading ? (
        <Loader /> 
      ) : (
        <Routes>
          <Route path="/" element={<Mainframe element={<LandingPage />} />} />
          <Route path="/aboutFaces" element={<Mainframe element={<AboutFaces />} />} />
          <Route path="/eventCards" element={<Mainframe element={<EventCards />} />} />
          <Route path="/individualCard" element={<Mainframe element={<IndividualCard />} />} />
          <Route path="/profile" element={<Mainframe element={<Profile />} />} />
          <Route path="/login" element={<Mainframe element={<Login />} />} />
        </Routes>
      )}
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  );
}
