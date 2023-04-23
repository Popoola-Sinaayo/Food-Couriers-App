import * as React from "react";
import Svg, {
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="url(#a)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 9A6 6 0 1 0 4 9c0 7-3 9-3 9h18s-3-2-3-9Z"
    />
    <Path
      stroke="url(#b)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.73 22a1.999 1.999 0 0 1-3.46 0"
    />
    <Circle cx={16} cy={4} r={3.5} fill="#FF4545" stroke="#fff" />
    <Defs>
      <LinearGradient
        id="a"
        x1={1}
        x2={21.567}
        y1={2.079}
        y2={5.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D61355" />
        <Stop offset={1} stopColor="red" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={8.27}
        x2={11.442}
        y1={21.939}
        y2={23.645}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#D61355" />
        <Stop offset={1} stopColor="red" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgComponent;
