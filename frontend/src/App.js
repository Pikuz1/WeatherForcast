import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  const [date, setDate] = useState(new Date());
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000/weather';
      console.log(`Fetching weather data from: ${backendUrl}`);

      const response = await axios.post(backendUrl, {
        date: date.toISOString().split('T')[0], // Format date to YYYY-MM-DD
        location
      });
      setWeatherData(response.data);
      setError(null); // Clear previous errors
    } catch (error) {
      setError('Error fetching weather data');
      console.error('Error fetching weather data', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  const getChartData = () => {
    if (!weatherData) return {};

    const labels = weatherData.hourly.time;
    const temperatures = weatherData.hourly.temperature_2m;

    return {
      labels: labels,
      datasets: [
        {
          label: 'Temperature (°C)',
          data: temperatures,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }
      ]
    };
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GreenHeat Weather Dashboard</h1>
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <DatePicker selected={date} onChange={(date) => setDate(date)} className="p-2 border rounded"/>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Enter Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="p-2 border rounded w-full"
        />
      </div>
      <button onClick={fetchWeatherData} className="bg-blue-500 text-white p-2 rounded">Fetch Weather</button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {weatherData && (
        <div className="mt-4">
          <h2 className="text-xl font-bold">Weather Forecast</h2>
          <Line data={getChartData()} />
        </div>
      )}
    </div>
  );
}

export default App;
