// Login.js

import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleToggle = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login or signup logic here
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        <p onClick={handleToggle} className="toggle-link">
          {isSignUp ? 'Already have an account? Login here' : 'Don\'t have an account? Sign up here'}
        </p>
      </form>
    </div>
  );
};

export default Login;
