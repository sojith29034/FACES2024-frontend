// src/components/Loader.js
import React from 'react';
import './style/loader.css'; // Optional: For additional styling

const Loader = () => {
  return (
    <div className="loader-container">
{/*       <img src="src\assets\Loader.gif" alt="Loading..." className="loader-gif" /> */}
       <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHZ0b3hkNWJhZzI0enI3MnZ1Ym1wZWFpM3Qwam5wcXFwYXFzbXMzZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/0NOO4C7RWx8eZ7Ed8G/giphy.gif" alt="Loading..." className="loader-gif" />
    </div>
  );
};

export default Loader;
