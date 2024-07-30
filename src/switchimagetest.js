// Adapted into the React context
import React, { useState, useEffect } from "react";

const useSwitchConfig = () => {
  const [switchPorts, setSwitchPorts] = useState([]);
  const [currentPortConfig, setCurrentPortConfig] = useState([]);

  useEffect(() => {
    // This will run once on mount, similar to document.ready
    getPorts();
  }, []);

  const getPorts = () => {
    const Ports = document.getElementsByClassName("port");
    let switchPortsArr = [];
    for (let i = 0; i < Ports.length; i++) {
      switchPortsArr.push(Ports[i].id);
    }
    setSwitchPorts(switchPortsArr);
  };

  const fetchSwitchList = async () => {
    // Fetch the list of switches from your backend
  };

  const renderPortConfig = async (switchAddress) => {
    // Fetch the switch configuration
    // Update state accordingly
  };

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = `${data}-${Date.now()}`;
    ev.target.appendChild(nodeCopy);
  };

  return {
    allowDrop,
    drag,
    drop,
    fetchSwitchList,
    renderPortConfig,
  };
};
