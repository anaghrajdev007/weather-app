import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherCard from '../components/WeatherCard';
import useWeather from '../hooks/useWeather';

const WeatherPage = () => {
  let { cityName } = useParams(); // useParams hook to extract parameters
  const { weather, error } = useWeather(cityName);

  // Conditional rendering based on loading/error states
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  // Render weather information
  return (
    <div>
      <WeatherCard weather={weather} />
    </div>
  );
};

export default WeatherPage;
