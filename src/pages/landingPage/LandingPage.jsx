
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
    <Sponsors/>
  </div>
  <h3>HIGHLIGHTS</h3>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
  <div style={{ display: 'flex', flexDirection: 'row', gap: '35px' }}>
    <HighLights />
    <HighLights />
  </div>

  <div style={{ display: 'flex', flexDirection: 'row', gap: '35px' }}>
    <HighLights />
    <HighLights />
  </div>
</div>

  </div>
  );
};

export default LandingPage;
