import React, { useState, useEffect } from "react";
import { Card, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import SwitchDisplay from "./SwitchDisplay";
import ConfigViewer from "./ConfigViewer";
import ConfigDisplay from "./ConfigDisplay";
import switchProfiles from "../services/switchProfiles.json"; // Import the JSON file directly
import theme from "../styles/theme";
import SvgM3X8 from "./SvgM3X8"; // Import statement for SvgM3X8 is correct
import SvgM3X24 from "./SvgM3X24"; // Import statement for SvgM3X24 is correct

const ConfigSection = () => {
  const [selectedSwitch, setSelectedSwitch] = useState("");
  const [configOutcome, setConfigOutcome] = useState("");
  const [selectedHostname, setSelectedHostname] = useState("");
  const [hostnames, setHostnames] = useState([]);
  const [error, setError] = useState(null);
  const [configViewerVisible, setConfigViewerVisible] = useState(false);
  const [displayConfig, setDisplayConfig] = useState(""); // Added state for displayConfig

  const handleSwitchChange = (eventKey) => {
    setSelectedSwitch(eventKey);
  };

  useEffect(() => {
    // Directly load hostnames from switchProfiles.json
    try {
      const extractedHostnames = switchProfiles.map((item) => item.hostname);
      setHostnames(extractedHostnames);
    } catch (error) {
      console.error("Failed to load hostnames from file:", error);
      setError("Failed to load hostnames from file");
    }
  }, []);

  const handleGetConfig = async () => {
    console.log(
      `Fetching config for ${selectedSwitch} with FQDN: ${selectedHostname}`
    );
    try {
      const backupData = switchProfiles;
      const backupConfig = backupData.find(
        (item) => item.hostname === selectedHostname
      );
      if (backupConfig) {
        console.log("Backup Config Data:", backupConfig);
        setConfigOutcome(JSON.stringify(backupConfig, null, 2));
        setDisplayConfig(backupConfig); // Update displayConfig with the fetched config
        // Update selectedSwitch based on the model in backupConfig
        const switchKey = mapModelToSwitchKey(backupConfig.model);
        setSelectedSwitch(switchKey);
      } else {
        console.error("Hostname not found in backup data");
        setConfigOutcome("Hostname not found in backup data.");
      }
    } catch (error) {
      console.error("Failed to load from file:", error);
      setConfigOutcome(`Failed to load config from file: ${error.message}`);
    }
  };

  // Toggle visibility of ConfigViewer
  const toggleConfigViewer = () => {
    setConfigViewerVisible(!configViewerVisible);
  };

  const mapModelToSwitchKey = (model) => {
    if (model === "M3X8") return "SvgM3X8";
    if (model === "M3X24") return "SvgM3X24";
    return ""; // Default case if no match found
  };

  if (error) {
    console.log("Error:", error);
    return <div>Error: {error}</div>;
  }

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
        <Row className="mb-3 g-3">
          <Col sm={12} md={5} className="justify-content-center">
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
            sm={12}
            md={7}
            className="d-flex align-items-center justify-content-center"
          >
            <div
              className="d-flex align-items-center"
              style={{ width: "100%", gap: "10px" }}
            >
              <Dropdown
                className="dropdown m-auto"
                onSelect={handleSwitchChange}
                style={{ flexGrow: 1 }}
              >
                <Dropdown.Toggle
                  variant="secondary"
                  id="switchList"
                  style={{ width: "100%" }}
                >
                  {selectedSwitch || "Select Switch"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="SvgM3X8">M3X8</Dropdown.Item>
                  <Dropdown.Item eventKey="SvgM3X24">M3X24</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                className="btn btn-secondary"
                onClick={() => {
                  setSelectedSwitch("");
                  setSelectedHostname(""); // Reset the hostname dropdown
                  setConfigViewerVisible(false); // Make ConfigViewer invisible
                }}
                style={{ whiteSpace: "nowrap" }}
              >
                Clear
              </Button>
              <Button
                className="btn btn-primary"
                onClick={() => {
                  handleGetConfig();
                  setConfigViewerVisible(true);
                }}
                style={{ whiteSpace: "nowrap" }}
              >
                Get Config!
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
      <Row>
        <Col>
          <Card
            className="text-white p-4 border rounded mb-3"
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

          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                maxHeight: "calc(100vh - 20px)",
                maxWidth: "calc(100vw - 20px)",
                overflow: "auto",
              }}
            >
              {displayConfig && <ConfigDisplay config={displayConfig} />}
            </div>
          </Col>
        </Col>
      </Row>
    </>
  );
};

export default ConfigSection;
