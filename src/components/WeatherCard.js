import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const WeatherCard = ({ weather }) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Weather in {weather.name}
      </Typography>
      <Typography variant="h5" component="h2">
        {Math.round(weather.main.temp - 273.15)}°C
      </Typography>
      <Typography color="textSecondary">
        Humidity: {weather.main.humidity}%
      </Typography>
      <Typography variant="body2" component="p">
        {weather.weather[0].description}
      </Typography>
    </CardContent>
  </Card>
);

export default WeatherCard;
