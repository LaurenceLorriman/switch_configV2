// src/FetchHostnames.js
import React, { useState, useEffect } from "react";
import switchProfiles from "./switchProfiles.json"; // Step 1: Import the JSON file

const FetchHostnames = () => {
  const [hostnames, setHostnames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/restconf");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const extractedHostnames = data.map((item) => item.hostname);
        setHostnames(extractedHostnames);
      } catch (error) {
        console.error(
          "Fetching from API failed, loading from local JSON",
          error
        ); // Step 2a: Log the error
        try {
          // Step 2b: Extract hostnames from switchProfiles.json
          const extractedHostnames = switchProfiles.map(
            (item) => item.hostname
          );
          setHostnames(extractedHostnames);
        } catch (jsonError) {
          setError(jsonError.message); // Handle any errors in processing JSON
        } finally {
          setLoading(false);
        }
      } finally {
        if (!error) setLoading(false); // Ensure loading is set to false if there's no error
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
