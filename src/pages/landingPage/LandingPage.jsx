import React from 'react';
import Poster from '../../assets/Poster.jpg';
import '../landingPage/LandingPage.css'
import HighLights from './HighLights';
import Sponsors from '../../components/Sponsors';

const LandingPage = () => {
  return (<div>
    <div className="fullscreen-image">
      <img src={Poster} alt="Poster" />
      </div>

    <div>
      SPONSORS
    </div>
     <HighLights />
    </div>

    

  
  );
};

export default LandingPage;
