// App.js
import React, { useState } from "react"; // Fixed: Added useState import

import "./App.css";
import Navbar from "./components/Navbar";
import DraggableOptions from "./components/DraggableOptions";
import Login from "./components/Login";

import { Row, Col, Card } from "react-bootstrap";
import ConfigSection from "./components/ConfigSection";

function App() {
  const [selectedConfig, setSelectedConfig] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication state

  const handleLoginSuccess = () => {
    setIsAuthenticated(true); // Update state on successful login
  };

  // if (!isAuthenticated) {
  //   return <Login onLoginSuccess={handleLoginSuccess} />; // Pass handleLoginSuccess as a prop to Login
  // }

  return (
    <>
      <Navbar />
      <div className="mt-5">
        <Row className=" ml-5">
          <Col md={8} className="mr-5">
            <Card
              style={{
                background: "none",
                border: "none",
                marginRight: "25px",
              }}
            >
              <ConfigSection selectedConfig={selectedConfig} />{" "}
            </Card>
          </Col>
          <Col
            md={3}
            className=" d-flex align-items-center justify-content-center"
          >
            <Card className="" style={{ marginBottom: "auto" }}>
              <DraggableOptions setSelectedConfig={setSelectedConfig} />
            </Card>
          </Col>
        </Row>
        {/* Uncomment and use CommitButton if needed, ensuring it's utilized appropriately */}
        {/* <Row>
          <Col className="m-4">
            <CommitButton selectedConfig={selectedConfig} /> {/* Example usage if 'CommitButton' needs 'selectedConfig' */}
        {/* </Col>
        </Row> */}
      </div>
    </>
  );
}

export default App;
