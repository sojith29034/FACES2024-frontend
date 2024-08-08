import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faChair, faTag } from '@fortawesome/free-solid-svg-icons';
import './eventcard.css';

const eventsData = {
  day1: {
    sports: [
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      // Add more sports events for day 1
    ],
    cultural: [
      { title: 'Dance Performance', time: '03:00 pm', location: 'Hall', seats: '50/100', price: '500/-', image: './src/assets/image.png' },
      { title: 'Dance Performance', time: '03:00 pm', location: 'Hall', seats: '50/100', price: '500/-', image: './src/assets/image.png' },
      { title: 'Dance Performance', time: '03:00 pm', location: 'Hall', seats: '50/100', price: '500/-', image: './src/assets/image.png' },
      { title: 'Dance Performance', time: '03:00 pm', location: 'Hall', seats: '50/100', price: '500/-', image: './src/assets/image.png' },
      // Add more cultural events for day 1
    ],
  },
  day2: {
    sports: [
      { title: 'Basketball (Mens)', time: '11:00 am', location: 'Court', seats: '12/24', price: '250/-', image: './src/assets/image.png' },
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      { title: 'Basketball (Mens)', time: '11:00 am', location: 'Court', seats: '12/24', price: '250/-', image: './src/assets/image.png'},
      { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', seats: '10/20', price: '200/-', image: './src/assets/image.png' },
      // Add more sports events for day 2
    ],
    cultural: [
      { title: 'Art Exhibition', time: '02:00 pm', location: 'Gallery', seats: '30/50', price: '300/-', image: './src/assets/image.png' },
      { title: 'Art Exhibition', time: '02:00 pm', location: 'Gallery', seats: '30/50', price: '300/-', image: './src/assets/image.png' },
      { title: 'Art Exhibition', time: '02:00 pm', location: 'Gallery', seats: '30/50', price: '300/-', image: './src/assets/image.png' },
      // Add more cultural events for day 2
    ],
  },
  day3: {
    sports: [
      { title: 'Volleyball (Mixed)', time: '01:00 pm', location: 'Beach', seats: '15/30', price: '150/-', image: './src/assets/image.png' },
      { title: 'Volleyball (Mixed)', time: '01:00 pm', location: 'Beach', seats: '15/30', price: '150/-', image: './src/assets/image.png' },
      { title: 'Volleyball (Mixed)', time: '01:00 pm', location: 'Beach', seats: '15/30', price: '150/-', image: './src/assets/image.png' },
      { title: 'Volleyball (Mixed)', time: '01:00 pm', location: 'Beach', seats: '15/30', price: '150/-', image: './src/assets/image.png' },
      // Add more sports events for day 3
    ],
    cultural: [
      { title: 'Music Concert', time: '07:00 pm', location: 'Theatre', seats: '100/200', price: '700/-', image: './src/assets/image.png' },
      { title: 'Music Concert', time: '07:00 pm', location: 'Theatre', seats: '100/200', price: '700/-', image: './src/assets/image.png' },
      { title: 'Music Concert', time: '07:00 pm', location: 'Theatre', seats: '100/200', price: '700/-', image: './src/assets/image.png' },
      { title: 'Music Concert', time: '07:00 pm', location: 'Theatre', seats: '100/200', price: '700/-', image: './src/assets/image.png' },
      // Add more cultural events for day 3
    ],
  },
};

const EventCards = () => {
  const [currentDay, setCurrentDay] = useState('day1');
  const [currentCategory, setCurrentCategory] = useState('sports');
  const [flip, setFlip] = useState(false);
  const [slide, setSlide] = useState('');

  const handleDayChange = (day) => {
    if (day !== currentDay) {
      setFlip(true);
      setTimeout(() => {
        setCurrentDay(day);
        setFlip(false);
      }, 600); // Duration of the flip animation
    }
  };

  const handleCategoryChange = (category) => {
    if (category !== currentCategory) {
      const direction = category === 'sports' ? 'slide-right' : 'slide-left';
      setSlide(direction);
      setTimeout(() => {
        setCurrentCategory(category);
        setSlide('');
      }, 600); // Duration of the slide animation
    }
  };

  return (
    <div className="event-cards-container">
      <div className="day-selector">
        <button onClick={() => handleDayChange('day1')} className={currentDay === 'day1' ? 'active' : ''}>DAY 1</button>
        <button onClick={() => handleDayChange('day2')} className={currentDay === 'day2' ? 'active' : ''}>DAY 2</button>
        <button onClick={() => handleDayChange('day3')} className={currentDay === 'day3' ? 'active' : ''}>DAY 3</button>
      </div>
      <div className="category-selector">
        <button onClick={() => handleCategoryChange('sports')} className={currentCategory === 'sports' ? 'active' : ''}>Sports</button>
        <button onClick={() => handleCategoryChange('cultural')} className={currentCategory === 'cultural' ? 'active' : ''}>Cultural</button>
      </div>
      <div className={`event-cards-wrapper ${currentCategory === 'sports' ? '' : 'hidden'}`}>
        <div className={`event-cards ${flip ? 'flip' : slide}`}>
          {eventsData[currentDay][currentCategory].map((event, index) => (
            <div className="event-card" key={index}>
              <div className="event-card-content">
                <div className="event-card-details">
                  <h3>{event.title}</h3>
                  <div className="event-info">
                    <p><FontAwesomeIcon icon={faClock} /> {event.time}</p>
                    <p><FontAwesomeIcon icon={faChair} /> {event.seats}</p>
                  </div>
                  <div className="event-info">
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {event.location}</p>
                    <p><FontAwesomeIcon icon={faTag} /> {event.price}</p>
                  </div>
                </div>
                <div className="event-card-image">
                  <img src={event.image} alt={event.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCards;
