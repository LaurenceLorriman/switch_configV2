import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const ConfigDisplay = ({ config }) => {
  return (
    <Card className="m-3 p-3" style={{ overflowY: "auto", maxHeight: "400px" }}>
      <Card.Title>Configuration Details</Card.Title>
      <Card.Body>
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </Card.Body>
    </Card>
  );
};

ConfigDisplay.propTypes = {
  config: PropTypes.object.isRequired,
};

export default ConfigDisplay;
