import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './components/RegisterForm';
import Login from './components/LoginForm';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <div>
        <p>howdy</p>
        <nav>
          <button><Link to="/register">Register</Link></button>
          <button><Link to="/login">Login</Link></button>
          <button><Link to="/game">Game</Link></button>
        </nav>

        <Routes>
          {/* Define your routes */}
          <Route path="/register" element={<UserForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<div>Welcome to the Idle Game!</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;