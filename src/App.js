import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <Router>
      <div>
        {/* Add any shared header or navigation components here */}
        <Routes>
          <Route path="/weather/:cityName" element={<WeatherPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
