import React, { useState } from "react";

import { Card, Button } from "react-bootstrap";
import { Rnd } from "react-rnd";
import "../custom.css";

const ConfigViewer = ({ configOutcome, onVisibilityChange }) => {
  let data;
  let isEmpty = true;
  const [isVisible, setIsVisible] = useState(true);

  try {
    data = JSON.parse(configOutcome);
    isEmpty = Object.keys(data).length === 0;
  } catch (e) {
    data = { error: "Invalid JSON data" };
    isEmpty = false;
  }

  const handleClose = () => {
    setIsVisible(false);
    if (onVisibilityChange) onVisibilityChange(false);
  };

  const handleShow = () => {
    setIsVisible(true);
    if (onVisibilityChange) onVisibilityChange(true);
  };

  if (isEmpty) {
    return null;
  }

  return (
    <Rnd
      default={{
        x: 0,
        y: 0,
        width: 800,
        height: "100%",
      }}
      disableDragging={true}
      enableResizing={{
        top: false,
        right: true,
        bottom: true,
        left: true,
        topRight: false,
        bottomRight: true,
        bottomLeft: true,
        topLeft: false,
      }}
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!isVisible ? (
        <Button onClick={handleShow} style={{ zIndex: 1001 }}>
          Show Current Config
        </Button>
      ) : (
        <Card
          style={{
            border: "none",
            display: "inline-block",
            width: "auto",
            height: "auto",
          }}
        >
          <i
            className="bi bi-x-circle-fill"
            onClick={handleClose}
            style={{
              color: "white",
              position: "absolute",
              top: "0px",
              right: "10px",
              zIndex: 1000,
              fontSize: "30px",
              cursor: "pointer",
            }}
          ></i>
          <Card.Body style={{ padding: "1px" }}>
            <Card
              src={data}
              theme="ashes"
              style={{
                borderRadius: "5px",
                border: "none",
                padding: "10px",
              }}
              collapsed={3}
              displayDataTypes={false}
              enableClipboard={true}
              displayObjectSize={false}
              iconStyle="triangle"
              groupArraysAfterLength={false}
            />
          </Card.Body>
        </Card>
      )}
    </Rnd>
  );
};

export default ConfigViewer;
