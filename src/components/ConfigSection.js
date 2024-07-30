import React, { useState, useEffect } from "react";
import { Form, Button, Card, Dropdown, Row, Col } from "react-bootstrap";
import SwitchDisplay from "./SwitchDisplay";
import SvgM3X8 from "./SvgM3X8";
import SvgM3X24 from "./SvgM3X24";
import theme from "../theme";
import { getConfig } from "../services/RestConfService";
import ConfigViewer from "./ConfigViewer";
import axios from "axios"; // Import axios

const ConfigSection = () => {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [configOutcome, setConfigOutcome] = useState("");
  const [selectedHostname, setSelectedHostname] = useState("");
  const [hostnames, setHostnames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [configViewerVisible, setConfigViewerVisible] = useState(true);
  const handleSwitchChange = (event) => {
    const selectedValue = event.target.value;
    // Assuming 'setSelectedSwitch' updates the state to reflect the current selection
    setSelectedSwitch(selectedValue);
  };

  // Function to check if the server is running
  const isServerRunning = async (url) => {
    try {
      await axios.get(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  // Function to load data from switchProfiles.json
  // Adjusted for React, assuming switchProfiles.json is public/switchProfiles.json
  const loadDataFromFile = async () => {
    try {
      const response = await fetch(
        process.env.PUBLIC_URL + "/switchProfiles.json"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    console.log("useEffect triggered in ConfigSection");
    const fetchData = async () => {
      setLoading(true);
      console.log("Fetching data...");
      const serverUrl = "http://127.0.0.1:5000/restconf"; // Example server URL
      try {
        console.log(`Checking if server at ${serverUrl} is running...`);
        if (await isServerRunning(serverUrl)) {
          console.log("Server is running. Fetching data...");
          const response = await axios.get(serverUrl);
          console.log("Data fetched from server:", response.data);
          const extractedHostnames = response.data.map((item) => item.hostname);
          console.log("Extracted hostnames:", extractedHostnames);
          setHostnames(extractedHostnames);
        } else {
          console.log("Server is not running. Loading data from file...");
          const data = await loadDataFromFile();
          console.log("Data loaded from file:", data);
          const extractedHostnames = data.map((item) => item.hostname);
          console.log("Extracted hostnames from file:", extractedHostnames);
          setHostnames(extractedHostnames);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError(error.message);
      } finally {
        setLoading(false);
        console.log("Data fetching process completed.");
      }
    };

    fetchData();
  }, []);

  const handleGetConfig = async () => {
    console.log(
      `Fetching config for ${selectedSwitch} with FQDN: ${selectedHostname}`
    );
    try {
      const configData = await getConfig(selectedHostname);
      console.log("Config Data:", configData);
      setConfigOutcome(JSON.stringify(configData, null, 2)); // Pretty print JSON

      // Simplified switch model selection
      switch (configData.model) {
        case "M3X8":
          setSelectedSwitch("SvgM3X8");
          break;
        case "M3X24":
          setSelectedSwitch("SvgM3X24");
          break;
        default:
          setSelectedSwitch(""); // Handle unknown models
      }
    } catch (error) {
      console.error("Failed to fetch config:", error);
      setConfigOutcome(`Failed to fetch config: ${error.message}`);
    }
  };

  // Loading and error handling
  if (loading) return <div>Loading hostnames...</div>;
  if (error) return <div>Error: {error}</div>;

  // Toggle visibility of ConfigViewer
  const toggleConfigViewer = () => {
    setConfigViewerVisible(!configViewerVisible);
  };

  return (
    <>
      <Card
        className="p-1 mb-auto"
        style={{
          width: "75%",
          background: "none",
          border: "none",
        }}
      >
        <Row className="mb-3">
          <Col xs={5} className="justify-content-center">
            <Form.Select
              className="text-fqdn"
              id="FQDN"
              value={selectedHostname}
              onChange={(e) => setSelectedHostname(e.target.value)}
              size="sml"
              style={{ width: "100%" }}
            >
              <option value="">Select a Hostname</option>
              {hostnames.map((hostname, index) => (
                <option key={index} value={hostname}>
                  {hostname}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col
            xs={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              className="d-flex align-items-center"
              style={{ width: "100%" }}
            >
              <Dropdown
                className="dropdown m-auto"
                onSelect={handleSwitchChange}
              >
                <Dropdown.Toggle
                  style={{ width: "100%" }}
                  variant="secondary"
                  id="switchList"
                >
                  {selectedSwitch || "Select Switch"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="SvgM3X8">M3X8</Dropdown.Item>
                  <Dropdown.Item eventKey="SvgM3X24">M3X24</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                className="btn btn-secondary mr-5"
                onClick={() => setSelectedSwitch("")}
              >
                Clear
              </Button>
              <Button className="btn btn-primary" onClick={handleGetConfig}>
                Get Config!
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col>
          <Card
            className="text-white p-4 border rounded mb-3 "
            style={{
              background: theme.gradient,
              maxHeight: "50vh",
              maxWidth: "70vw",
            }}
          >
            {selectedSwitch === "SvgM3X8" && <SvgM3X8 />}
            {selectedSwitch === "SvgM3X24" && <SvgM3X24 />}
            {!selectedSwitch ? (
              <div className="text-center justify-content-center align-items-center">
                <h5>Select a switch from the dropdown above to start</h5>
              </div>
            ) : selectedSwitch !== "SvgM3X8" &&
              selectedSwitch !== "SvgM3X24" ? (
              <SwitchDisplay selectedSwitch={selectedSwitch} />
            ) : null}
          </Card>
          <Row>
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100vw",
                }}
              >
                {configViewerVisible && configOutcome && (
                  <ConfigViewer configOutcome={configOutcome} />
                )}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default ConfigSection;
