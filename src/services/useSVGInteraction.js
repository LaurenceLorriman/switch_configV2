import { useState, useEffect } from "react";

function useSvgInteraction() {
  const [clickedRectId, setClickedRectId] = useState(null);
  const [rectText, setRectText] = useState({});
  const [isPortSelected, setIsPortSelected] = useState(false);
  const [selectedPort, setSelectedPort] = useState(null);
  const [selectedConfig, setSelectedConfig] = useState(null);
  const [portNumber, setPortNumber] = useState(null); // Added state for portNumber

  const handleRectClick = (event) => {
    const rectId = event.target.id;
    if (clickedRectId === rectId) {
      console.log(rectId, "Deselected");
      setClickedRectId(null);
      setIsPortSelected(false);
      setRectText((prevState) => ({ ...prevState, [rectId]: "" }));
      setSelectedPort(null);
      setPortNumber(null); // Update portNumber to null when deselected
    } else {
      console.log(rectId, "Selected");
      setClickedRectId(rectId);
      setIsPortSelected(true);
      setSelectedPort(rectId);
      setPortNumber(rectId); // Update portNumber to the selected rectId
    }
  };

  const handleTextClick = (event) => {
    const textId = event.target.id;
    console.log(textId, "Text Clicked");
    // Implement logic for handling text clicks here
  };

  const handleConfigTileClick = (configName) => {
    if (selectedPort) {
      setRectText((prevState) => ({
        ...prevState,
        [selectedPort]: configName,
      }));
      setSelectedConfig(configName);
    }
  };

  useEffect(() => {
    if (selectedPort && selectedConfig) {
      const configCode = `Config code for ${selectedPort} with ${selectedConfig}`;
      console.log(`Updating switch profile with: ${configCode}`);
      setSelectedPort(null);
      setSelectedConfig(null);
    }
  }, [selectedPort, selectedConfig]);

  return {
    clickedRectId,
    rectText,
    isPortSelected,
    selectedPort,
    selectedConfig,
    portNumber, // Expose portNumber in the returned object
    handleRectClick,
    handleTextClick,
    handleConfigTileClick,
  };
}

export default useSvgInteraction;
