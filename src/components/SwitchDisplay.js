// components/SwitchDisplay.js
import React, { useState, useEffect } from "react";

const SwitchDisplay = ({ selectedSwitch }) => {
  const [switchHtml, setSwitchHtml] = useState("");

  useEffect(() => {
    if (selectedSwitch) {
      fetchSwitchHtml(selectedSwitch);
    }
  }, [selectedSwitch]);

  const fetchSwitchHtml = async (switchType) => {
    try {
      const response = await fetch(`/static/switches/${switchType}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const html = await response.text();
      setSwitchHtml(html);
    } catch (error) {
      console.error("Error fetching switch HTML:", error);
    }
  };

  return (
    <div
      className="demo"
      id="demo"
      dangerouslySetInnerHTML={{ __html: switchHtml }}
    ></div>
  );
};

export default SwitchDisplay;
