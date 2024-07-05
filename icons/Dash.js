import * as React from "react";
const Dash = (props) => (
  <svg
    width={32}
    height={6}
    viewBox="0 0 32 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line y1={3} x2={32} y2={3} stroke="white" strokeWidth={6} />
  </svg>
);
export default Dash;
