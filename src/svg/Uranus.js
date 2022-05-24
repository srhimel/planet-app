import * as React from "react"
import Svg, { G, Circle, Path } from "react-native-svg"

const UranusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={74.034}
    height={74.034}
    {...props}
  >
    <G transform="translate(-358.934 -426.342)">
      <G data-name="Group 74">
        <Circle
          data-name="Ellipse 60"
          cx={37.017}
          cy={37.017}
          r={37.017}
          transform="translate(358.934 426.342)"
          fill="#bce1d6"
        />
        <Path
          data-name="Path 93"
          d="M395.926 500.376a36.9 36.9 0 0 0 24.739-64.276 36.764 36.764 0 0 1 9.523 24.739c0 20.379-19.2 39.153-39.582 39.153"
          opacity={0.12}
          style={{
            mixBlendMode: "darken",
            isolation: "isolate",
          }}
        />
        <Path
          data-name="Path 94"
          d="M395.832 426.5a36.9 36.9 0 0 0-24.74 64.273 36.762 36.762 0 0 1-9.523-24.739c0-20.378 19.2-39.153 39.583-39.153"
          fill="#f0f5f9"
          opacity={0.2}
        />
      </G>
      <G
        data-name="Group 75"
        fill="none"
        stroke="#312449"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={1.377}
      >
        <Path data-name="Line 1" d="m383.04 469.519 5.344 5.344" />
        <Path data-name="Line 2" d="m388.384 469.519-5.344 5.344" />
        <Path data-name="Line 3" d="m403.516 469.519 5.344 5.344" />
        <Path data-name="Line 4" d="m408.86 469.519-5.344 5.344" />
      </G>
      <Circle
        data-name="Ellipse 61"
        cx={3.242}
        cy={3.242}
        r={3.242}
        transform="translate(392.708 483.14)"
        fill="#312449"
      />
    </G>
  </Svg>
)

export default UranusSvg
