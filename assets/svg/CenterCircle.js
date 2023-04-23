import * as React from "react";
import Svg, { Circle } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={10}
    fill="none"
    {...props}
  >
    <Circle cx={23} cy={5} r={5} fill="#D61355" />
    <Circle cx={5} cy={5} r={5} fill="#E6E6E6" />
    <Circle cx={41} cy={5} r={5} fill="#E6E6E6" />
  </Svg>
);
export default SvgComponent;
