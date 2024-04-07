import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import CityTable from '../components/CityTable';

// Sample city data, replace with actual data fetching logic
const sampleCities = [
  { name: 'New York', country: 'USA' },
  { name: 'London', country: 'UK' },
  { name: 'Tokyo', country: 'Japan' },
  { name: 'Patna', country: 'India' },
  { name: 'Delhi', country: 'India' },
  { name: 'Bhagalpur', country: 'India' },
  // Add more cities or fetch from an API
];

const HomePage = () => {
  const [cities, setCities] = useState(sampleCities);
  const [filteredCities, setFilteredCities] = useState(sampleCities);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cities data if fetching from an API
    // setCities(fetchedCities);
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = cities.filter(city => 
      city.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleSelectCity = (city) => {
    // Navigate to the WeatherPage of the selected city
    navigate(`/weather/${city.name}`);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <CityTable cities={filteredCities} onSelectCity={handleSelectCity} />
    </div>
  );
};

export default HomePage;
