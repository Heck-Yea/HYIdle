// UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newUser = {
      username,
      password
    };
    
    try {
      const response = await axios.post('http://localhost:5000/api/users', newUser);
      setMessage('User created successfully!');
    } catch (error) {
      setMessage('Error creating user!');
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserForm;
