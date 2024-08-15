// src/components/Loader.js
import React from 'react';
import './style/loader.css'; // Optional: For additional styling

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="src\assets\Loader.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
