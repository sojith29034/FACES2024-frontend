
import Poster from '../../assets/Poster.jpg';
import Dposter from '../../assets/D-poster.jpg';
import '../landingPage/LandingPage.css'
import HighLights from './HighLights';
import Sponsors from '../../components/Sponsors';

const LandingPage = () => {
  return (
  <div className='bg-[#032A33]'>

   <div className="fullscreen-image">
  <img 
    src={Dposter} 
    srcSet={`${Poster} 768w, ${Dposter} 1024w`} 
    sizes="(max-width: 768px) 100vw, 100vh"
    alt="Poster" 
  />
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
