import React, { useState } from "react";

const SvgM3X24 = ({ selectedTileText, selectedTileImage, ...props }) => {
  const [clickedRectId, setClickedRectId] = useState(null);
  const [rectText, setRectText] = useState({});

  const handleRectClick = (event) => {
    const rectId = event.target.id;
    // Check if the clicked element's ID starts with "port"
    if (!rectId.startsWith("port")) {
      return; // Do nothing if it doesn't start with "port"
    }
    if (clickedRectId === rectId) {
      console.log(rectId, "Deselected");
      setClickedRectId(null);
      setRectText((prevState) => ({ ...prevState, [rectId]: "" }));
    } else {
      console.log(rectId, "Selected");
      setClickedRectId(rectId);
      setRectText((prevState) => ({
        ...prevState,
        [rectId]: selectedTileText,
      }));
    }
  };

  // Data structure for rectangles and texts
  const rectsData = [
    { id: "port-1/1", x: 72.94, y: 129.17, width: 95, height: 86 },
    { id: "port-1/2", x: 72.94, y: 222.08, width: 95, height: 86 },
    { id: "port-1/3", x: 190.23, y: 129.17, width: 95, height: 86 },
    { id: "port-1/4", x: 190.09, y: 222.08, width: 95, height: 86 },
    { id: "port-1/5", x: 291.18, y: 128.67, width: 95, height: 86 },
    { id: "port-1/6", x: 291.16, y: 222.08, width: 95, height: 86 },
    { id: "port-1/7", x: 392.13, y: 129.17, width: 95, height: 86 },
    { id: "port-1/8", x: 392.13, y: 222.08, width: 95, height: 86 },
    { id: "port-1/9", x: 493.07, y: 129.17, width: 95, height: 86 },
    { id: "port-1/10", x: 493.1, y: 222.08, width: 95, height: 86 },
    { id: "port-2/1", x: 594.02, y: 129.17, width: 95, height: 86 },
    { id: "port-2/2", x: 594.06, y: 222.08, width: 95, height: 86 },
    { id: "port-2/3", x: 694.97, y: 129.17, width: 95, height: 86 },
    { id: "port-2/4", x: 695.03, y: 222.08, width: 95, height: 86 },
    { id: "port-2/5", x: 190.08, y: 397.12, width: 95, height: 86 },
    { id: "port-2/6", x: 190.09, y: 490.41, width: 95, height: 86 },
    { id: "port-2/7", x: 290.98, y: 396.89, width: 95, height: 86 },
    { id: "port-2/8", x: 290.91, y: 490.41, width: 95, height: 86 },
    { id: "port-2/9", x: 391.87, y: 397.12, width: 95, height: 86 },
    { id: "port-2/10", x: 391.74, y: 490.41, width: 95, height: 86 },
    { id: "port-2/11", x: 492.77, y: 397.14, width: 95, height: 86 },
    { id: "port-2/12", x: 492.57, y: 490.43, width: 95, height: 86 },
    { id: "port-2/13", x: 593.66, y: 397.12, width: 95, height: 86 },
    { id: "port-2/14", x: 593.4, y: 490.43, width: 95, height: 86 },
    { id: "port-2/15", x: 694.55, y: 397.12, width: 95, height: 86 },
    { id: "port-2/16", x: 694.23, y: 490.41, width: 95, height: 86 },
  ];

  const calculateTextPosition = (x, y, width, height) => ({
    textX: x + width / 2,
    textY: y + height / 2 + 5,
  });

  return (
    <svg viewBox="0 0 986 654" {...props}>
      <defs>
        <link rel="stylesheet" href="custom.css" />
      </defs>

      <g id="Layer_3" data-name="Layer 3">
        {rectsData.map(({ id, x, y, width, height }) => (
          <g key={id}>
            <rect
              id={id}
              width={width}
              height={height}
              x={x}
              y={y}
              className={`cls-4 ${clickedRectId === id ? "clicked-rect" : ""}`}
              rx={5}
              ry={5}
              onClick={handleRectClick}
            />
            {rectText[id] && (
              <text
                x={calculateTextPosition(x, y, width, height).textX}
                y={calculateTextPosition(x, y, width, height).textY}
                style={{
                  fill: "white",
                  dominantBaseline: "middle",
                  textAnchor: "middle",
                }}
                textLength="75"
                lengthAdjust="spacingAndGlyphs"
              >
                {rectText[id]}
              </text>
            )}
          </g>
        ))}
      </g>
      <g>
        <circle cx={947.5} cy={35.93} r={19} className="cls-3" />
        <circle cx={947.5} cy={35.93} r={13} className="cls-3" />
        <circle cx={33.5} cy={35.93} r={19} className="cls-3" />
        <circle cx={33.5} cy={35.93} r={13} className="cls-3" />
        <circle cx={846.5} cy={597.93} r={38} className="cls-3" />
        <circle cx={861.5} cy={159.93} r={27} className="cls-3" />
        <circle cx={861.5} cy={159.93} r={16} className="cls-3" />
        <circle cx={764.5} cy={629.93} r={12} className="cls-3" />
        <circle cx={734.95} cy={629.93} r={12} className="cls-3" />
        <circle cx={705.4} cy={629.93} r={12} className="cls-3" />
        <circle cx={675.85} cy={629.93} r={12} className="cls-3" />
        <circle cx={646.3} cy={629.93} r={12} className="cls-3" />
        <circle cx={616.75} cy={629.93} r={12} className="cls-3" />
        <circle cx={587.2} cy={629.93} r={12} className="cls-3" />
        <circle cx={557.65} cy={629.93} r={12} className="cls-3" />
        <circle cx={528.1} cy={629.93} r={12} className="cls-3" />
        <circle cx={498.55} cy={629.93} r={12} className="cls-3" />
        <circle cx={469} cy={629.93} r={12} className="cls-3" />
        <circle cx={439.45} cy={629.93} r={12} className="cls-3" />
        <circle cx={409.9} cy={629.93} r={12} className="cls-3" />
        <circle cx={380.35} cy={629.93} r={12} className="cls-3" />
        <circle cx={350.8} cy={629.93} r={12} className="cls-3" />
        <circle cx={321.25} cy={629.93} r={12} className="cls-3" />
        <circle cx={291.7} cy={629.93} r={12} className="cls-3" />
        <circle cx={262.15} cy={629.93} r={12} className="cls-3" />
        <circle cx={232.6} cy={629.93} r={12} className="cls-3" />
        <circle cx={203.05} cy={629.93} r={12} className="cls-3" />
        <circle cx={173.5} cy={629.93} r={12} className="cls-3" />
        <circle cx={142.6} cy={629.93} r={12} className="cls-3" />
        <circle cx={113.05} cy={629.93} r={12} className="cls-3" />
        <circle cx={83.5} cy={629.93} r={12} className="cls-3" />
        <circle cx={855.5} cy={42.93} r={12} className="cls-3" />
        <circle cx={823.46} cy={42.93} r={12} className="cls-3" />
        <circle cx={791.41} cy={42.93} r={12} className="cls-3" />
        <circle cx={759.37} cy={42.93} r={12} className="cls-3" />
        <circle cx={727.33} cy={42.93} r={12} className="cls-3" />
        <circle cx={695.28} cy={42.93} r={12} className="cls-3" />
        <circle cx={663.24} cy={42.93} r={12} className="cls-3" />
        <circle cx={631.2} cy={42.93} r={12} className="cls-3" />
        <circle cx={599.15} cy={42.93} r={12} className="cls-3" />
        <circle cx={567.11} cy={42.93} r={12} className="cls-3" />
        <circle cx={535.07} cy={42.93} r={12} className="cls-3" />
        <circle cx={503.02} cy={42.93} r={12} className="cls-3" />
        <circle cx={470.98} cy={42.93} r={12} className="cls-3" />
        <circle cx={438.93} cy={42.93} r={12} className="cls-3" />
        <circle cx={406.89} cy={42.93} r={12} className="cls-3" />
        <circle cx={374.85} cy={42.93} r={12} className="cls-3" />
        <circle cx={342.8} cy={42.93} r={12} className="cls-3" />
        <circle cx={310.76} cy={42.93} r={12} className="cls-3" />
        <circle cx={278.72} cy={42.93} r={12} className="cls-3" />
        <circle cx={246.67} cy={42.93} r={12} className="cls-3" />
        <circle cx={214.63} cy={42.93} r={12} className="cls-3" />
        <circle cx={182.59} cy={42.93} r={12} className="cls-3" />
        <circle cx={150.54} cy={42.93} r={12} className="cls-3" />
        <circle cx={118.5} cy={42.93} r={12} className="cls-3" />
        <circle cx={873.5} cy={71.93} r={12} className="cls-3" />
        <circle cx={841.46} cy={71.93} r={12} className="cls-3" />
        <circle cx={809.41} cy={71.93} r={12} className="cls-3" />
        <circle cx={777.37} cy={71.93} r={12} className="cls-3" />
        <circle cx={745.33} cy={71.93} r={12} className="cls-3" />
        <circle cx={713.28} cy={71.93} r={12} className="cls-3" />
        <circle cx={681.24} cy={71.93} r={12} className="cls-3" />
        <circle cx={649.2} cy={71.93} r={12} className="cls-3" />
        <circle cx={617.15} cy={71.93} r={12} className="cls-3" />
        <circle cx={585.11} cy={71.93} r={12} className="cls-3" />
        <circle cx={553.07} cy={71.93} r={12} className="cls-3" />
        <circle cx={521.02} cy={71.93} r={12} className="cls-3" />
        <circle cx={488.98} cy={71.93} r={12} className="cls-3" />
        <circle cx={456.93} cy={71.93} r={12} className="cls-3" />
        <circle cx={424.89} cy={71.93} r={12} className="cls-3" />
        <circle cx={392.85} cy={71.93} r={12} className="cls-3" />
        <circle cx={360.8} cy={71.93} r={12} className="cls-3" />
        <circle cx={328.76} cy={71.93} r={12} className="cls-3" />
        <circle cx={296.72} cy={71.93} r={12} className="cls-3" />
        <circle cx={264.67} cy={71.93} r={12} className="cls-3" />
        <circle cx={232.63} cy={71.93} r={12} className="cls-3" />
        <circle cx={200.59} cy={71.93} r={12} className="cls-3" />
        <circle cx={168.54} cy={71.93} r={12} className="cls-3" />
        <circle cx={136.5} cy={71.93} r={12} className="cls-3" />
        <circle cx={160.6} cy={602.93} r={12} className="cls-3" />
        <circle cx={131.05} cy={602.93} r={12} className="cls-3" />
        <circle cx={101.5} cy={602.93} r={12} className="cls-3" />
        <circle cx={142.6} cy={575.93} r={12} className="cls-3" />
        <circle cx={113.05} cy={575.93} r={12} className="cls-3" />
        <circle cx={83.5} cy={575.93} r={12} className="cls-3" />
      </g>

      <g id="rect-cls-3">
        <rect
          width={117}
          height={92}
          x={58.5}
          y={396.93}
          className="cls-3"
          rx={5.03}
          ry={5.03}
        />
        <rect
          width={96.65}
          height={53}
          x={68.67}
          y={406.93}
          className="cls-3"
          rx={5.03}
          ry={5.03}
        />
        <rect
          width={96.65}
          height={14}
          x={68.67}
          y={466.93}
          className="cls-3"
          rx={2}
          ry={2}
        />
        <rect
          width={96.65}
          height={14}
          x={807.67}
          y={322.93}
          className="cls-3"
          rx={2}
          ry={2}
        />
      </g>
      {/* <rect
        width={981}
        height={649}
        x={2.5}
        y={2.5}
        rx={20}
        ry={20}
        style={{
          fill: "none",
          strokeMiterlimit: 10,
          stroke: "#fff",
          strokeWidth: 5,
        }}
      /> */}
      <g>
        <g id="rect-cls-2/5">
          <rect
            width={42.07}
            height={22}
            x={519.56}
            y={323.17}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <rect
            width={42.07}
            height={22}
            x={99.41}
            y={94.59}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M110.72 100.35c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM122.1 98.59h1.9l-5.52 14h-1.9l5.52-14ZM126.26 100.35c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={99.41}
            y={314.19}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M110.07 320.03c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM121.45 318.27h1.9l-5.52 14h-1.9l5.52-14ZM127.47 320.11c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={216.7}
            y={94.11}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M227.42 99.71c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM238.8 97.95h1.9l-5.52 14h-1.9l5.52-14ZM245.84 101.39c0-1.26-.44-1.6-1.14-1.6s-1.14.38-1.14 1.38v.9h-2.08v-.76c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52v.36c0 1.5-.48 2.42-1.54 2.86v.04c1.1.48 1.54 1.5 1.54 2.92v1.1c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08v1.3c0 1 .44 1.38 1.14 1.38s1.14-.34 1.14-1.58v-1.1c0-1.3-.44-1.78-1.44-1.78h-.74v-2h.86c.82 0 1.32-.36 1.32-1.48v-.78Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={318.01}
            y={94.61}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M328.72 100.29c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM340.1 98.53h1.9l-5.52 14h-1.9l5.52-14ZM344.88 108.01v1.3c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-3.08c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38v.42h-2.08l.4-8.12h5.8v2h-3.84l-.18 3.34h.04c.4-.66 1.02-1.02 1.9-1.02 1.62 0 2.44 1.14 2.44 3.2v3.12c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={418.59}
            y={94.11}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M429.31 99.87c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM440.69 98.11h1.9l-5.52 14h-1.9l5.52-14ZM449.95 98.11v1.92l-3.24 12.08h-2.2l3.22-12h-4.38v-2h6.6Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={519.54}
            y={94.11}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M530.25 99.87c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM541.63 98.11h1.9l-5.52 14h-1.9l5.52-14ZM550.89 108.63c0 2.36-1.08 3.64-3.36 3.64-2.16 0-3.28-1.28-3.28-3.52v-.36h2.08v.5c0 1 .44 1.38 1.14 1.38.78 0 1.22-.38 1.22-1.72v-2.54h-.04c-.38.8-1.02 1.22-2 1.22-1.62 0-2.44-1.14-2.44-3.2v-2.56c0-2.24 1.18-3.52 3.34-3.52s3.34 1.28 3.34 3.52v7.16Zm-2.2-4.78v-2.52c0-1-.44-1.36-1.14-1.36s-1.14.36-1.14 1.36v2.52c0 1 .44 1.38 1.14 1.38s1.14-.38 1.14-1.38Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={620.49}
            y={94.11}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M634.34 100.03c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM643.86 98.19h1.9l-5.52 14h-1.9l5.52-14ZM648.02 99.95c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={721.43}
            y={94.11}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M734.7 99.95c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM744.22 98.11h1.9l-5.52 14h-1.9l5.52-14ZM751.26 101.55c0-1.26-.44-1.6-1.14-1.6s-1.14.38-1.14 1.38v.9h-2.08v-.76c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52v.36c0 1.5-.48 2.42-1.54 2.86v.04c1.1.48 1.54 1.5 1.54 2.92v1.1c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08v1.3c0 1 .44 1.38 1.14 1.38s1.14-.34 1.14-1.58v-1.1c0-1.3-.44-1.78-1.44-1.78h-.74v-2h.86c.82 0 1.32-.36 1.32-1.48v-.78Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={216.66}
            y={323.17}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M227.15 328.93c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM238.53 327.17h1.9l-5.52 14h-1.9l5.52-14ZM240.81 336.63l4-9.46h2.4v9.46h1.04v2h-1.04v2.54h-2.2v-2.54h-4.2v-2Zm4.2 0v-5.18h-.04l-2.14 5.18h2.18Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={317.63}
            y={323.17}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M328.3 328.93c1.7 0 2.08-.82 2.42-1.76h1.48v14H330v-10.68h-1.7v-1.56ZM339.68 327.17h1.9l-5.52 14h-1.9l5.52-14ZM342.34 330.65c0-2.36 1.08-3.64 3.36-3.64 2.16 0 3.28 1.28 3.28 3.52v.36h-2.08v-.5c0-1-.44-1.38-1.14-1.38-.78 0-1.22.38-1.22 1.72v2.54h.04c.38-.8 1.02-1.22 2-1.22 1.62 0 2.44 1.14 2.44 3.2v2.56c0 2.24-1.18 3.52-3.34 3.52s-3.34-1.28-3.34-3.52v-7.16Zm2.2 4.78v2.52c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-2.52c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38Z"
            className="cls-5"
          ></path>
          <rect
            width={42.07}
            height={22}
            x={418.6}
            y={323.17}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M429.24 328.93c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM440.62 327.17h1.9l-5.52 14h-1.9l5.52-14ZM446.58 341.33c-2.22 0-3.44-1.28-3.44-3.52v-1.1c0-1.34.4-2.36 1.36-2.9v-.04c-.92-.5-1.36-1.42-1.36-2.8v-.44c0-2.24 1.22-3.52 3.44-3.52s3.44 1.28 3.44 3.52v.44c0 1.38-.46 2.3-1.36 2.8v.04c.96.54 1.36 1.56 1.36 2.9v1.1c0 2.24-1.22 3.52-3.44 3.52Zm-1.24-9.94c0 1.12.52 1.48 1.24 1.48s1.24-.36 1.24-1.48v-.78c0-1.26-.54-1.6-1.24-1.6s-1.24.34-1.24 1.6v.78Zm1.24 7.94c.7 0 1.22-.34 1.24-1.58v-1.3c0-1.1-.46-1.58-1.24-1.58s-1.24.48-1.24 1.58v1.3c0 1.24.54 1.58 1.24 1.58Z"
            className="cls-5"
          ></path>
          <path
            d="M526.29 328.93c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM537.68 327.17h1.9l-5.52 14h-1.9l5.52-14ZM541.83 328.93c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM548.21 330.53c0-2.24 1.18-3.52 3.34-3.52s3.34 1.28 3.34 3.52v7.28c0 2.24-1.18 3.52-3.34 3.52s-3.34-1.28-3.34-3.52v-7.28Zm2.2 7.42c0 1 .44 1.38 1.14 1.38s1.14-.38 1.14-1.38v-7.56c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38v7.56Z"
            className="cls-5"
          ></path>

          <rect
            width={42.07}
            height={22}
            x={620.53}
            y={323.17}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M633.73 329.09c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM643.25 327.25h1.9l-5.52 14h-1.9l5.52-14ZM649.27 329.09c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={721.49}
            y={323.17}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M734.52 329.09c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM744.04 327.25h1.9l-5.52 14h-1.9l5.52-14ZM746.32 336.71l4-9.46h2.4v9.46h1.04v2h-1.04v2.54h-2.2v-2.54h-4.2v-2Zm4.2 0v-5.18h-.04l-2.14 5.18h2.18Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={216.55}
            y={364.44}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M229.81 370.28c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM239.33 368.44h1.9l-5.52 14h-1.9l5.52-14ZM244.11 377.92v1.3c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-3.08c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38v.42h-2.08l.4-8.12h5.8v2h-3.84l-.18 3.34h.04c.4-.66 1.02-1.02 1.9-1.02 1.62 0 2.44 1.14 2.44 3.2v3.12c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={317.45}
            y={364.67}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M330.7 370.59c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM340.22 368.75h1.9l-5.52 14h-1.9l5.52-14ZM349.48 368.75v1.92l-3.24 12.08h-2.2l3.22-12h-4.38v-2h6.6Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={418.34}
            y={364.44}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M431.59 370.28c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM441.11 368.44h1.9l-5.52 14h-1.9l5.52-14ZM450.37 378.96c0 2.36-1.08 3.64-3.36 3.64-2.16 0-3.28-1.28-3.28-3.52v-.36h2.08v.5c0 1 .44 1.38 1.14 1.38.78 0 1.22-.38 1.22-1.72v-2.54h-.04c-.38.8-1.02 1.22-2 1.22-1.62 0-2.44-1.14-2.44-3.2v-2.56c0-2.24 1.18-3.52 3.34-3.52s3.34 1.28 3.34 3.52v7.16Zm-2.2-4.78v-2.52c0-1-.44-1.36-1.14-1.36s-1.14.36-1.14 1.36v2.52c0 1 .44 1.38 1.14 1.38s1.14-.38 1.14-1.38Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={519.23}
            y={364.42}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M529.13 370.34c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM538.65 368.5h1.9l-5.52 14h-1.9l5.52-14ZM542.81 370.26c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM550.73 370.26c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={620.12}
            y={364.44}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M629.43 370.28c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM638.95 368.44h1.9l-5.52 14h-1.9l5.52-14ZM643.11 370.2c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM653.91 371.88c0-1.26-.44-1.6-1.14-1.6s-1.14.38-1.14 1.38v.9h-2.08v-.76c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52v.36c0 1.5-.48 2.42-1.54 2.86v.04c1.1.48 1.54 1.5 1.54 2.92v1.1c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08v1.3c0 1 .44 1.38 1.14 1.38s1.14-.34 1.14-1.58v-1.1c0-1.3-.44-1.78-1.44-1.78h-.74v-2h.86c.82 0 1.32-.36 1.32-1.48v-.78Z"
            className="cls-5"
          />
          <rect
            width={82.07}
            height={22}
            x={701.02}
            y={364.44}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M712.88 370.28c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM722.4 368.44h1.9l-5.52 14h-1.9l5.52-14ZM726.56 370.2c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM735.1 377.92v1.3c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-3.08c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38v.42h-2.08l.4-8.12h5.8v2h-3.84l-.18 3.34h.04c.4-.66 1.02-1.02 1.9-1.02 1.62 0 2.44 1.14 2.44 3.2v3.12c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08ZM744.04 374.44h4v2h-4v-2ZM752 368.44h6.8v2h-2.3v12h-2.2v-12H752v-2ZM759.76 368.44h3.48c2.2 0 3.28 1.22 3.28 3.46v7.08c0 2.24-1.08 3.46-3.28 3.46h-3.48v-14Zm2.2 2v10h1.24c.7 0 1.12-.36 1.12-1.36v-7.28c0-1-.42-1.36-1.12-1.36h-1.24ZM774.44 371.9v1.82c0 2.24-1.08 3.46-3.28 3.46h-1.04v5.26h-2.2v-14h3.24c2.2 0 3.28 1.22 3.28 3.46Zm-4.32-1.46v4.74h1.04c.7 0 1.08-.32 1.08-1.32v-2.1c0-1-.38-1.32-1.08-1.32h-1.04Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={216.54}
            y={585.57}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M229.76 591.4c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM239.28 589.57h1.9l-5.52 14h-1.9l5.52-14ZM241.94 593.05c0-2.36 1.08-3.64 3.36-3.64 2.16 0 3.28 1.28 3.28 3.52v.36h-2.08v-.5c0-1-.44-1.38-1.14-1.38-.78 0-1.22.38-1.22 1.72v2.54h.04c.38-.8 1.02-1.22 2-1.22 1.62 0 2.44 1.14 2.44 3.2v2.56c0 2.24-1.18 3.52-3.34 3.52s-3.34-1.28-3.34-3.52v-7.16Zm2.2 4.78v2.52c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-2.52c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={317.38}
            y={585.57}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M330.56 591.4c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM340.08 589.57h1.9l-5.52 14h-1.9l5.52-14ZM346.04 603.73c-2.22 0-3.44-1.28-3.44-3.52v-1.1c0-1.34.4-2.36 1.36-2.9v-.04c-.92-.5-1.36-1.42-1.36-2.8v-.44c0-2.24 1.22-3.52 3.44-3.52s3.44 1.28 3.44 3.52v.44c0 1.38-.46 2.3-1.36 2.8v.04c.96.54 1.36 1.56 1.36 2.9v1.1c0 2.24-1.22 3.52-3.44 3.52Zm-1.24-9.94c0 1.12.52 1.48 1.24 1.48s1.24-.36 1.24-1.48v-.78c0-1.26-.54-1.6-1.24-1.6s-1.24.34-1.24 1.6v.78Zm1.24 7.94c.7 0 1.22-.34 1.24-1.58v-1.3c0-1.1-.46-1.58-1.24-1.58s-1.24.48-1.24 1.58v1.3c0 1.24.54 1.58 1.24 1.58Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={418.21}
            y={585.57}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M427.48 591.4c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM437 589.57h1.9l-5.52 14h-1.9l5.52-14ZM441.16 591.32c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM447.54 592.93c0-2.24 1.18-3.52 3.34-3.52s3.34 1.28 3.34 3.52v7.28c0 2.24-1.18 3.52-3.34 3.52s-3.34-1.28-3.34-3.52v-7.28Zm2.2 7.42c0 1 .44 1.38 1.14 1.38s1.14-.38 1.14-1.38v-7.56c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38v7.56Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={519.04}
            y={585.55}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M528.28 591.47c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM537.8 589.63h1.9l-5.52 14h-1.9l5.52-14ZM541.96 591.38c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM551.74 591.47c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={619.87}
            y={585.55}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M628.93 591.47c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM638.45 589.63h1.9l-5.52 14h-1.9l5.52-14ZM642.61 591.38c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM648.65 599.09l4-9.46h2.4v9.46h1.04v2h-1.04v2.54h-2.2v-2.54h-4.2v-2Zm4.2 0v-5.18h-.04l-2.14 5.18h2.18Z"
            className="cls-5"
          />
          <rect
            width={42.07}
            height={22}
            x={720.7}
            y={585.57}
            className="cls-2"
            rx={3}
            ry={3}
          />
          <path
            d="M729.95 591.4c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6ZM739.47 589.57h1.9l-5.52 14h-1.9l5.52-14ZM743.63 591.32c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM750.05 593.05c0-2.36 1.08-3.64 3.36-3.64 2.16 0 3.28 1.28 3.28 3.52v.36h-2.08v-.5c0-1-.44-1.38-1.14-1.38-.78 0-1.22.38-1.22 1.72v2.54h.04c.38-.8 1.02-1.22 2-1.22 1.62 0 2.44 1.14 2.44 3.2v2.56c0 2.24-1.18 3.52-3.34 3.52s-3.34-1.28-3.34-3.52v-7.16Zm2.2 4.78v2.52c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-2.52c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38Z"
            className="cls-5"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgM3X24;
