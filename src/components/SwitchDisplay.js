import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify"; // Ensure you have installed dompurify

const SwitchDisplay = ({ selectedSwitch }) => {
  const [switchHtml, setSwitchHtml] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (selectedSwitch) {
      fetchSwitchHtml(selectedSwitch);
    }
  }, [selectedSwitch]);

  const fetchSwitchHtml = async (switchType) => {
    setIsLoading(true);
    setError("");
    try {
      const response = await fetch(`/static/switches/${switchType}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const html = await response.text();
      setSwitchHtml(DOMPurify.sanitize(html)); // Sanitize HTML
    } catch (error) {
      console.error("Error fetching switch HTML:", error);
      setError("Failed to load content. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div
      className="demo"
      id="demo"
      dangerouslySetInnerHTML={{ __html: switchHtml }}
    ></div>
  );
};

export default SwitchDisplay;
