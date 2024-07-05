import * as React from "react";
const Circle = ({ props, stroke, fill }) => (
  <svg
    width={10}
    height={10}
    viewBox="0 0 10 10"
    fill={fill || "none"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={5} cy={5} r={4.5} stroke={stroke || "white"} />
  </svg>
);
export default Circle;
