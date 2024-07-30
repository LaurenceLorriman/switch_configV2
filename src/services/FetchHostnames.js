// src/FetchHostnames.js
import React, { useState, useEffect } from "react";

const FetchHostnames = () => {
  const [hostnames, setHostnames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/restconf");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Extract hostnames
        const extractedHostnames = data.map((item) => item.hostname);
        setHostnames(extractedHostnames);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Hostnames</h1>
      <ul>
        {hostnames.map((hostname, index) => (
          <li key={index}>{hostname}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchHostnames;
