import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeather = (cityName) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!cityName) return;

    const fetchWeather = async () => {
      try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=421dfe36b97fc2dbbc056bd475be20ea
        `);
        setWeather(data);
      } catch (err) {
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, [cityName]);

  return { weather, error };
};

export default useWeather;
