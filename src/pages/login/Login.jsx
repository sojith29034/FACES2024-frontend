import React, { useState } from 'react';
import './login.css';

function Login() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Roll Number:', rollNumber);
    console.log('Password:', password);
    // Handle form submission logic here
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
       
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className='Sbutton' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
