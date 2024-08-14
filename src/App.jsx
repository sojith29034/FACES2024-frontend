import './App.css';
import { useState, useEffect } from 'react';
import { getEvents, getFeaturedEvents } from './api.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/login/Login.jsx';
import LandingPage from './pages/landingPage/LandingPage';
import AboutFaces from './pages/aboutFaces/AboutFaces';
import EventCards from './pages/eventCards/EventCards';
import IndividualCard from './pages/individualCard/IndividualCard';
import Profile from './pages/profile/Profile';


function App() {
  const [events, setEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventData = await getEvents();
      const featuredEventData = await getFeaturedEvents();
      
      setEvents(eventData);
      setFeaturedEvents(featuredEventData);

      console.log(eventData);
      console.log(featuredEventData);
    };

    fetchEvents();
  }, []);

  // eslint-disable-next-line react/prop-types
  const Mainframe = ({element}) => {
    return (
      <>
        <Navbar />
        {element}
        <Footer />
      </>
    );
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Mainframe element={<LandingPage />} />} />
        <Route path='/aboutFaces' element={<Mainframe element={<AboutFaces />} />} />
        <Route path='/eventCards' element={<Mainframe element={<EventCards />} />} />
        <Route path='/individualCard/:eventCode' element={<Mainframe element={<IndividualCard />} />} />
        <Route path='/profile' element={<Mainframe element={<Profile />} />} />
        <Route path='/login'  element={<Mainframe element={<Login/>} />}/>
      </Routes>
    </Router>
  );
}

export default App;
