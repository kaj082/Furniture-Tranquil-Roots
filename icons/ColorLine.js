import * as React from "react";
const ColorLine = (props) => (
  <svg
    width={30}
    height={8}
    viewBox="0 0 30 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line y1={4} x2={30} y2={4} stroke="#B89774" strokeWidth={8} />
  </svg>
);
export default ColorLine;
