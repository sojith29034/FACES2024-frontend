import './AboutFaces.css';
import Umang from '../../assets/umang.png';


const AboutFaces = () => {
  return (
    <div className="body bg-[#032A33]">
      <div className="blob1"></div>
      
      <div className="about-umang">
        <img className="umang" src={Umang} alt={Umang} />
        <h2>About Umang</h2>
        <p>
          about umang : Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vestibulum ultricies libero ex, non porttitor est auctor vitae. Proin
          vestibulum malesuada urna ut euismod. Donec eget ullamcorper sapien,
          id posuere neque. Ut leo augue, semper sit amet gravida ac, hendrerit
          facilisis mauris. Sed tincidunt sed lectus sed rutrum.
        </p>
      </div>

      <div className="about-faces">
        <img className="faces" src={Umang} alt={Umang} />
        <h2>About Faces</h2>
        <p>
          about faces : fLorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vestibulum ultricies libero ex, non porttitor est auctor vitae.
          Proin vestibulum malesuada urna ut euismod. Donec eget ullamcorper
          sapien, id posuere neque. Ut leo augue, semper sit amet gravida ac,
          hendrerit facilisis mauris. Sed tincidunt sed lectus sed rutrum.
        </p>
      </div>
      
      <div className="blob2"></div>
    </div>
  );
};

export default AboutFaces;
