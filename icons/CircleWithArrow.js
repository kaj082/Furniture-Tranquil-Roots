import * as React from "react";
const CircleWithArrow = (props) => (
  <svg
    width={55}
    height={55}
    viewBox="0 0 55 55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={27.5} cy={27.0095} r={26.5} stroke="white" />
    <path
      d="M34.4405 21.069C34.4405 20.5167 33.9928 20.069 33.4405 20.069L24.4405 20.069C23.8883 20.069 23.4405 20.5167 23.4405 21.069C23.4405 21.6213 23.8883 22.069 24.4405 22.069L32.4405 22.069L32.4405 30.069C32.4405 30.6213 32.8883 31.069 33.4405 31.069C33.9928 31.069 34.4405 30.6213 34.4405 30.069L34.4405 21.069ZM22.2677 33.6561L34.1477 21.7761L32.7334 20.3619L20.8534 32.2419L22.2677 33.6561Z"
      fill="white"
    />
  </svg>
);
export default CircleWithArrow;
