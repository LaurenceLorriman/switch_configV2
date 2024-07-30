import React, { useState } from "react";
import { Image, Container } from "react-bootstrap";
import "../styles/custom.css";
import theme from "../styles/theme.js";

// Define the new paths for each tile
const tilePaths = {
  Management: "../images/imgs/Tiles/SVG/ManagementTile.svg",
  RLI: "../images/imgs/Tiles/SVG/CoreTile.svg",
  VPLS1: "../images/imgs/Tiles/SVG/VPLS1Tile.svg",
  VPLS2: "../images/imgs/Tiles/SVG/VPLS2Tile.svg",
  "INTERNET-PRIMARY": "../images/imgs/Tiles/SVG/Int1Tile.svg",
  "INTERNET-SECONDARY": "../images/imgs/Tiles/SVG/Int2Tile.svg",
  "INTERNET-TERTIARY": "../images/imgs/Tiles/SVG/Int3Tile.svg",
  SAT: "../images/imgs/Tiles/SVG/SatTile.svg",
  XSITE: "../images/imgs/Tiles/SVG/CrossSiteTile.svg",
  CRYPTO: "../images/imgs/Tiles/SVG/CryptoTile.svg",
  "Switch-Uplink": "../images/imgs/Tiles/SVG/SwitchUplinkTile.svg",
  "ESX-Uplink": "../images/imgs/Tiles/SVG/ESXTile.svg",
  Default: "", // Ensure this path is provided as per your application logic
  Shut: "../images/imgs/Tiles/SVG/ShutdownTile.svg",
};
const DraggableOptions = ({ setSelectedConfig }) => {
  const [clickedId, setClickedId] = useState(null);
  const [selectedPort, setSelectedPort] = useState(null); // State for selected port
  const [selectedVlan, setSelectedVlan] = useState(null); // State for selected VLAN

  const handleClick = (event) => {
    const { id, dataset } = event.target;
    if (clickedId === id) {
      // Deselecting the tile
      setClickedId(null);
      setSelectedPort(null);
      setSelectedVlan(null);
      setSelectedConfig(null); // Pass null or an empty object to indicate deselection
      console.log(`Deselected: ${id}`);
    } else {
      // Selecting the tile
      setClickedId(id);
      setSelectedPort(dataset.port);
      setSelectedVlan(dataset.vlan);
      setSelectedConfig({ id, port: dataset.port, vlan: dataset.vlan }); // Pass the selected configuration to the parent component
      console.log(
        `Selected: ${id}, Port: ${dataset.port}, VLAN: ${dataset.vlan}`
      );
    }
  };

  return (
    <Container
      className="grid-container p-4 rounded"
      style={{ background: theme.dark2 }}
    >
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "Management" ? "clicked" : ""
        }`}
        id="Management"
        data-port="MAN"
        data-vlan="10"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["Management"]}
        alt="Management"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "RLI" ? "clicked" : ""
        }`}
        id="RLI"
        data-port="RLI"
        data-vlan="13"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["RLI"]}
        alt="MoD Core Network"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "VPLS1" ? "clicked" : ""
        }`}
        id="VPLS1"
        data-port="VPLS1"
        data-vlan="301"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["VPLS1"]}
        alt="VPLS 1"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "VPLS2" ? "clicked" : ""
        }`}
        id="VPLS2"
        data-port="VPLS2"
        data-vlan="401"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["VPLS2"]}
        alt="VPLS 2"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "INTERNET-PRIMARY" ? "clicked" : ""
        }`}
        id="INTERNET-PRIMARY"
        data-port="INTERNET-PRIMARY"
        data-vlan="100"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["INTERNET-PRIMARY"]}
        alt="INTERNET PRIMARY"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "INTERNET-SECONDARY" ? "clicked" : ""
        }`}
        id="INTERNET-SECONDARY"
        data-port="INTERNET-SECONDARY"
        data-vlan="101"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["INTERNET-SECONDARY"]}
        alt="INTERNET SECONDARY"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "INTERNET-TERTIARY" ? "clicked" : ""
        }`}
        id="INTERNET-TERTIARY"
        data-port="INTERNET-TERTIARY"
        data-vlan="102"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["INTERNET-TERTIARY"]}
        alt="INTERNET TERTIARY"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "SAT" ? "clicked" : ""
        }`}
        id="SAT"
        data-port="SAT"
        data-vlan="104"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["SAT"]}
        alt="SAT"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "XSITE" ? "clicked" : ""
        }`}
        id="XSITE"
        data-port="XSITE"
        data-vlan="110"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["XSITE"]}
        alt="Cross Site"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "CRYPTO" ? "clicked" : ""
        }`}
        id="CRYPTO"
        data-port="CRYPTO"
        data-vlan="14"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["CRYPTO"]}
        alt="CRYPTO"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "Switch-Uplink" ? "clicked" : ""
        }`}
        id="Switch-Uplink"
        data-port="SwitchUplink"
        data-vlan="Switch-Uplink"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["Switch-Uplink"]}
        alt="Switch Uplink"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "ESX-Uplink" ? "clicked" : ""
        }`}
        id="ESX-Uplink"
        data-port="EsxUplink"
        data-vlan="ESX-Uplink"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["ESX-Uplink"]}
        alt="ESX Uplink"
        rounded
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "Default" ? "clicked" : ""
        }`}
        id="Default"
        data-port="Default"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["Default"]}
      />
      <Image
        className={`override optionsDrag tile-image ${
          clickedId === "Shut" ? "clicked" : ""
        }`}
        id="Shut"
        data-port="Shut"
        data-vlan="999"
        draggable="true"
        onClick={handleClick}
        src={tilePaths["Shut"]}
        alt="Shutdown"
        rounded
      />
    </Container>
  );
};

export default DraggableOptions;
