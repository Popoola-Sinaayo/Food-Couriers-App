import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={27}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#D61355"
        d="m15.586 10.657-3.95-3.95a1 1 0 0 1 1.414-1.414l5.657 5.657a.998.998 0 0 1 0 1.414l-5.657 5.657a.998.998 0 0 1-1.645-.316 1 1 0 0 1 .231-1.098l3.95-3.95H6a1 1 0 1 1 0-2h9.586Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgComponent;
