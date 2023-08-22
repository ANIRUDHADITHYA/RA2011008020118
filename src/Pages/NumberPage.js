import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const NumbersPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const urls = [];
  queryParams.forEach((value) => {
    urls.push(value);
  });

  const [mergedNumbers, setMergedNumbers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchPromises = urls.map(async (url) => {
        try {
          const response = await axios.get(url);
          return response.data.numbers;
        } catch (error) {
          console.log("error");
          return [];
        }
      });

      const numberArrays = await Promise.all(fetchPromises);
      const merged = [...new Set(numberArrays.flat())].sort((a, b) => a - b);
      setMergedNumbers(merged);
    };

    fetchData();
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <h1>Numbers</h1>
      <ul>
        {mergedNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumbersPage;
