

import React, { useEffect, useRef } from 'react';
import '../landingPage/HighLight.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faCalendarAlt, faMoneyBill } from '@fortawesome/free-solid-svg-icons';

const HighLights = () => {
  const sportsContainerRef = useRef(null);
  const culturalContainerRef = useRef(null);

  const events = [
    {
      category: 'sports',
      items: [
        { title: 'Football (Mens)', time: '10:00 am', location: 'Turf', date: '10/20', fee: '200/-' },
        { title: 'Basketball', time: '12:00 pm', location: 'Court', date: '10/21', fee: '150/-' },
        { title: 'Tennis', time: '2:00 pm', location: 'Court', date: '10/22', fee: '100/-' },
      ],
    },
    {
      category: 'cultural',
      items: [
        { title: 'Dance Competition', time: '4:00 pm', location: 'Auditorium', date: '10/20', fee: '50/-' },
        { title: 'Singing Contest', time: '6:00 pm', location: 'Stage', date: '10/21', fee: '100/-' },
        { title: 'Drama', time: '8:00 pm', location: 'Theatre', date: '10/22', fee: '75/-' },
      ],
    },
  ];

  const handleCardClick = (title) => {
    alert(`Clicked on: ${title}`);
  };

  return (
    <>    
    <div className="landing-page">
    {/* <div className="blob1"></div> */}
      <h2>HIGHLIGHTS</h2>
      {events.map((eventCategory, index) => (
        <div key={index}>
          <h2>{eventCategory.category === 'sports' ? "SPORTS" : "CULTURAL"}</h2>
          <div
            className="card-container flex animate-marquee"
            ref={eventCategory.category === 'sports' ? sportsContainerRef : culturalContainerRef}
          >
            {eventCategory.items.map((item, idx) => (
              <div
                className="card"
                key={idx}
                onClick={() => handleCardClick(item.title)}
              >
                <div className="small-box">
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p><FontAwesomeIcon icon={faClock} /> {item.time}</p>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {item.location}</p>
                    <p><FontAwesomeIcon icon={faCalendarAlt} /> {item.date}</p>
                    <p><FontAwesomeIcon icon={faMoneyBill} /> {item.fee}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    {/* <div className="blob2"></div> */}
    </div>
    </>
  );
};

export default HighLights;
