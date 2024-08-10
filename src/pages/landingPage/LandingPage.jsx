
import Poster from '../../assets/Poster.jpg';
import '../landingPage/LandingPage.css'
import HighLights from './HighLights';
import Sponsors from '../../components/Sponsors';

const LandingPage = () => {
  return (
  <div>
    <div className="fullscreen-image">
      <img src={Poster} alt="Poster" />
    </div>

    <div>
      <Sponsors />
    </div>

    <div>
      <HighLights />
    </div>
  </div>

  );
};

export default LandingPage;
