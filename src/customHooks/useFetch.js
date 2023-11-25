import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const resp = await axios.get(url);
      if (resp) {
        setLoading(false);
        setData(resp.data);
      } else {
        setError('unable to retive the data');
      }
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return [loading, error, data];
};

export default useFetch;
