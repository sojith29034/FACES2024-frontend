import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0E535F] text-white pt-6 pb-4 px-4">
      <div className="container mx-auto text-center max-w-96">
        {/* College Name */}
        <h2 className="text-xl font-semibold mb-4">
          Fr. C. Rodrigues Institute of Technology
        </h2>
        
        {/* Address */}
        <p className="text-sm mb-6">
          Agnel Technical Education Complex, Sector 9-A, Vashi, Navi Mumbai, Maharashtra, India, Pin - 400703
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-gray-300" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-2xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
