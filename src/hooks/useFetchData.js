import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = "https://the-one-api.dev/v2/";
  const APITOKEN = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    async function fetchData() {
      const url = apiUrl + "/" + "book";
      try {
        const res = await fetch(url);
        const jsonData = await res.json();
        console.log("DATA: ", jsonData);
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return {data, error, loading };
};
