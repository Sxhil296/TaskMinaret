import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NamazWidget = () => {
  const [prayerTimes, setPrayerTimes] = useState({});

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const response = await axios.get('http://api.aladhan.com/v1/timingsByCity', {
          params: {
            city: 'Saharanpur', // Replace with user's city
            country: 'India', // Replace with user's country
            method: 4, // Method for calculating prayer times (4 is for Ithna Ashari)
          },
        });

        const data = response.data.data.timings;
        setPrayerTimes(data);
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    }

    fetchPrayerTimes();
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Prayer Times</h2>
      <ul>
        <li className='font-bold'>Fajr : {prayerTimes.Fajr}</li>
        <li className='font-bold'>Dhuhr : {prayerTimes.Dhuhr}</li>
        <li className='font-bold'>Asr : {prayerTimes.Asr}</li>
        <li className='font-bold'>Maghrib : {prayerTimes.Maghrib}</li>
        <li className='font-bold'>Isha : {prayerTimes.Isha}</li>
      </ul>
    </div>
  );
};

export default NamazWidget;