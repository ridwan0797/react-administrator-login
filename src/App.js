import React, { useState } from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './pages/loginPage';
import Home from './pages/homePage';
import { useLocation } from 'react-router-dom';
import Layout from './layout/LayoutPage';

const App = () => {
  const [token, setToken] = useState('');
  
  const location = useLocation();
  const shouldRenderLayout = !location.pathname.includes('/login'); // Cek apakah rute saat ini bukan "/login"

  console.log(token, 'token')


  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login  setToken={setToken} />} />

        {shouldRenderLayout && (
          <Route path="/*" element={<Layout><Home /></Layout>} />
        )}
      </Routes>
    </div>
  );
};


export default App;
