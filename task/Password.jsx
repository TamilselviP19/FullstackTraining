import React, { useState } from 'react';

export default function Password() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const checkStrength = (pwd) => {
    const lengthCheck = pwd.length >= 8;
    const uppercaseCheck = (pwd.match(/[A-Z]/g) || []).length >= 2;
    const lowercaseCheck = (pwd.match(/[a-z]/g) || []).length >= 2;
    const numberCheck = /\d/.test(pwd);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(pwd);

    if (
      lengthCheck &&
      uppercaseCheck &&
      lowercaseCheck &&
      numberCheck &&
      specialCharCheck
    ) {
      setMessage('✅ Strong password');
    } else {
      setMessage('❌ Weak password. Must include:\n' +
        '- At least 8 characters\n' +
        '- 2 uppercase letters\n' +
        '- 2 lowercase letters\n' +
        '- 1 number\n' +
        '- 1 special character');
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setPassword(val);
    checkStrength(val);
  };

  return (
    <div>
      <h3>Password Strength Checker</h3>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={handleChange}
      />
      <pre>{message}</pre>
    </div>
  );
}