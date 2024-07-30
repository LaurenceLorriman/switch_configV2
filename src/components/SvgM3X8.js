import React from "react";
import useSvgInteraction from "../services/useSVGInteraction.js"; // Adjust the import path

const SvgM3X8 = ({ selectedTileText, selectedTileImage, ...props }) => {
  // Use the custom hook for interaction logic
  const {
    clickedRectId,
    rectText,
    isPortSelected,
    selectedPort,
    selectedConfig,
    handleRectClick,
    handleTextClick,
    handleConfigTileClick,
  } = useSvgInteraction();

  const rectsData = [
    { id: "1/1", x: 72.86, y: 129.41, width: 95, height: 86 },
    { id: "1/2", x: 72.86, y: 223.41, width: 95, height: 86 },
    { id: "1/3", x: 195.98, y: 129.41, width: 95, height: 86 },
    { id: "1/4", x: 195.98, y: 223.41, width: 95, height: 86 },
    { id: "1/5", x: 298.63, y: 129.41, width: 95, height: 86 },
    { id: "1/6", x: 298.63, y: 223.41 },
    { id: "1/7", x: 401.28, y: 129.41 },
    { id: "1/8", x: 401.28, y: 223.41 },

    // Add more rectangles as needed
  ];
  const calculateTextPosition = (x, y, width, height) => ({
    textX: x + width / 2,
    textY: y + height / 2 + 5,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_2"
      data-name="Layer 2"
      viewBox="0 0 986 372.83"
      {...props}
    >
      <defs>
        <link rel="stylesheet" href="custom.css" />
      </defs>
      <g id="Layer_3" data-name="Layer 3">
        {rectsData.map(({ id, x, y, width, height }) => (
          <g key={id}>
            <rect
              id={id}
              width={width ? width : 95} // Ensure width has a default value
              height={height ? height : 86} // Ensure height has a default value
              x={x}
              y={y}
              className={`cls-4 ${clickedRectId === id ? "clicked-rect" : ""}`}
              rx={5}
              ry={5}
              onClick={handleRectClick}
            />
            {rectText[id] && (
              <text
                x={
                  calculateTextPosition(
                    x,
                    y,
                    width ? width : 95,
                    height ? height : 86
                  ).textX
                }
                y={
                  calculateTextPosition(
                    x,
                    y,
                    width ? width : 95,
                    height ? height : 86
                  ).textY
                }
                style={{
                  fill: "white",
                  dominantBaseline: "middle",
                  textAnchor: "middle",
                  cursor: "pointer",
                  // Apply additional inline styles for clicked state if needed
                }}
                className={clickedRectId === id ? "clicked-text" : ""} // Apply conditional class for text
                textLength="75"
                lengthAdjust="spacingAndGlyphs"
                onClick={handleTextClick}
                data-rectid={id}
              >
                {rectText[id]}
              </text>
            )}
          </g>
        ))}
      </g>

      <g id="Layer_2-2" data-name="Layer 2">
        {/* <rect
          width={981}
          height={367.83}
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

        <rect
          width={103}
          height={90}
          x={668.55}
          y={217.33}
          className="cls-3"
          rx={5.03}
          ry={5.03}
        />
        <rect
          width={96.65}
          height={14}
          x={531.67}
          y={323.93}
          className="cls-3"
          rx={2}
          ry={2}
        />
        <rect
          width={61.09}
          height={14}
          x={689.45}
          y={323.93}
          className="cls-3"
          rx={2}
          ry={2}
        />
        <g>
          <circle cx={947.5} cy={35.93} r={19} className="cls-3" />
          <circle cx={947.5} cy={35.93} r={13} className="cls-3" />
          <circle cx={33.5} cy={35.93} r={19} className="cls-3" />
          <circle cx={33.5} cy={35.93} r={13} className="cls-3" />
          <circle cx={579.55} cy={160.33} r={27} className="cls-3" />
          <circle cx={771.55} cy={176.33} r={16} className="cls-3" />
          <circle cx={546.55} cy={303.33} r={6} className="cls-3" />
          <circle cx={567.88} cy={303.33} r={6} className="cls-3" />
          <circle cx={589.21} cy={303.33} r={6} className="cls-3" />
          <circle cx={610.55} cy={303.33} r={6} className="cls-3" />
          <circle cx={855.5} cy={42.93} r={12} className="cls-3" />
          <circle cx={823.46} cy={42.93} r={12} className="cls-3" />
          <circle cx={791.41} cy={42.93} r={12} className="cls-3" />
          <circle cx={759.37} cy={42.93} r={12} className="cls-3" />
          <circle cx={727.33} cy={42.93} r={12} className="cls-3" />
          <circle cx={695.28} cy={42.93} r={12} className="cls-3" />
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
        </g>
        <rect
          width={42.07}
          height={22}
          x={99.32}
          y={94.59}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M110.64 100.35c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM122.02 98.59h1.9l-5.52 14h-1.9l5.52-14ZM126.18 100.35c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={99.32}
          y={322.55}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M109.99 328.39c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM121.37 326.63h1.9l-5.52 14h-1.9l5.52-14ZM127.39 328.47c-.7 0-1.14.38-1.14 1.38v1.5h-2.08v-1.36c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52c0 1.86-.68 3.36-2.72 5.54-1.3 1.4-1.66 2.06-1.66 2.8 0 .1 0 .2.02.3h4.16v2h-6.36v-1.72c0-1.56.56-2.74 2.2-4.46 1.68-1.78 2.16-2.88 2.16-4.38 0-1.26-.44-1.6-1.14-1.6Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={222.45}
          y={94.03}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M233.17 99.63c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM244.55 97.87h1.9l-5.52 14h-1.9l5.52-14ZM251.59 101.31c0-1.26-.44-1.6-1.14-1.6s-1.14.38-1.14 1.38v.9h-2.08v-.76c0-2.24 1.12-3.52 3.28-3.52s3.28 1.28 3.28 3.52v.36c0 1.5-.48 2.42-1.54 2.86v.04c1.1.48 1.54 1.5 1.54 2.92v1.1c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08v1.3c0 1 .44 1.38 1.14 1.38s1.14-.34 1.14-1.58v-1.1c0-1.3-.44-1.78-1.44-1.78h-.74v-2h.86c.82 0 1.32-.36 1.32-1.48v-.78Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={222.91}
          y={322.55}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M233.4 328.31c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM244.78 326.55h1.9l-5.52 14h-1.9l5.52-14ZM247.06 336.01l4-9.46h2.4v9.46h1.04v2h-1.04v2.54h-2.2v-2.54h-4.2v-2Zm4.2 0v-5.18h-.04l-2.14 5.18h2.18Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={325.1}
          y={94.03}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M335.81 99.7c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7V99.7ZM347.19 97.94h1.9l-5.52 14h-1.9l5.52-14ZM351.97 107.43v1.3c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-3.08c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38v.42h-2.08l.4-8.12h5.8v2h-3.84l-.18 3.34h.04c.4-.66 1.02-1.02 1.9-1.02 1.62 0 2.44 1.14 2.44 3.2v3.12c0 2.24-1.12 3.52-3.28 3.52s-3.28-1.28-3.28-3.52v-1.16h2.08Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={325.38}
          y={322.55}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M336.05 328.31c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM347.43 326.55h1.9l-5.52 14h-1.9l5.52-14ZM350.09 330.03c0-2.36 1.08-3.64 3.36-3.64 2.16 0 3.28 1.28 3.28 3.52v.36h-2.08v-.5c0-1-.44-1.38-1.14-1.38-.78 0-1.22.38-1.22 1.72v2.54h.04c.38-.8 1.02-1.22 2-1.22 1.62 0 2.44 1.14 2.44 3.2v2.56c0 2.24-1.18 3.52-3.34 3.52s-3.34-1.28-3.34-3.52v-7.16Zm2.2 4.78v2.52c0 1 .44 1.36 1.14 1.36s1.14-.36 1.14-1.36v-2.52c0-1-.44-1.38-1.14-1.38s-1.14.38-1.14 1.38Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={427.74}
          y={94.03}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M438.46 99.78c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM449.84 98.02h1.9l-5.52 14h-1.9l5.52-14ZM459.1 98.02v1.92l-3.24 12.08h-2.2l3.22-12h-4.38v-2h6.6Z"
          className="cls-5"
        />
        <rect
          width={42.07}
          height={22}
          x={427.85}
          y={322.55}
          className="cls-2"
          rx={3}
          ry={3}
        />
        <path
          d="M438.49 328.31c1.7 0 2.08-.82 2.42-1.76h1.48v14h-2.2v-10.68h-1.7v-1.56ZM449.87 326.55h1.9l-5.52 14h-1.9l5.52-14ZM455.83 340.71c-2.22 0-3.44-1.28-3.44-3.52v-1.1c0-1.34.4-2.36 1.36-2.9v-.04c-.92-.5-1.36-1.42-1.36-2.8v-.44c0-2.24 1.22-3.52 3.44-3.52s3.44 1.28 3.44 3.52v.44c0 1.38-.46 2.3-1.36 2.8v.04c.96.54 1.36 1.56 1.36 2.9v1.1c0 2.24-1.22 3.52-3.44 3.52Zm-1.24-9.94c0 1.12.52 1.48 1.24 1.48s1.24-.36 1.24-1.48v-.78c0-1.26-.54-1.6-1.24-1.6s-1.24.34-1.24 1.6v.78Zm1.24 7.94c.7 0 1.22-.34 1.24-1.58v-1.3c0-1.1-.46-1.58-1.24-1.58s-1.24.48-1.24 1.58v1.3c0 1.24.54 1.58 1.24 1.58Z"
          className="cls-5"
        />
      </g>
    </svg>
  );
};

export default SvgM3X8;
