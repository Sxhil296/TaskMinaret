import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [englishDate, setEnglishDate] = useState('');
  const [hijriDate, setHijriDate] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://api.aladhan.com/v1/gToH');
        const data = response.data.data;
        setEnglishDate(data.gregorian.date);
        setHijriDate(data.hijri.date);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Calendar</h2>
      <div>
        <p className="text-lg mb-1">Eng Date: {englishDate}</p>
        <p className="text-lg">Hijri Date: {hijriDate}</p>
      </div>
    </div>
  );
};

export default Calendar;
