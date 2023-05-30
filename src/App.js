import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/loginPage';
import Home from './pages/homePage';

const App = () => {
  const [token, setToken] = useState('');

  console.log(token, 'the token')

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
