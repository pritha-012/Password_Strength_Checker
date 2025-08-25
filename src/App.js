import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (pwd) => {
    let strength = '';
    const hasUpper = /[A-Z]/.test(pwd);
    const hasNumber = /[0-9]/.test(pwd);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (pwd.length < 6) {
      strength = 'Weak';
    } else if (pwd.length >= 6 && (hasUpper || hasNumber || hasSymbol)) {
      strength = 'Medium';
    } 
    if (pwd.length >= 8 && hasUpper && hasNumber && hasSymbol) {
      strength = 'Strong';
    }

    return strength;
  };

  const handleChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    setStrength(checkStrength(pwd));
  };

  return (
    <div className="container">
      <h1>Password Strength Checker</h1>
      <input 
        type="password" 
        placeholder="Enter password" 
        value={password}
        onChange={handleChange}
      />
      {password && (
        <p className={`strength ${strength.toLowerCase()}`}>
          Strength: {strength}
        </p>
      )}
    </div>
  );
}

export default App;
