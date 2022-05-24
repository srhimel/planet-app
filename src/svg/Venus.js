import * as React from "react"
import Svg, { Defs, ClipPath, Circle, G, Path, Rect } from "react-native-svg"

const VenusSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={103.51}
    height={103.51}
    viewBox="0 0 97.095 97.095"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle
          data-name="Ellipse 48"
          cx={48.548}
          cy={48.548}
          r={48.548}
          transform="translate(347.403 42.939)"
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 68" transform="translate(-347.403 -42.939)">
      <Circle
        data-name="Ellipse 47"
        cx={48.548}
        cy={48.548}
        r={48.548}
        transform="translate(347.403 42.939)"
        fill="#e2ba8f"
      />
      <G data-name="Group 64">
        <G data-name="Group 63" clipPath="url(#a)">
          <Path
            data-name="Path 74"
            d="M343.209 70.009s39.5-15.353 62.474-29.725 21.152 2.911 21.152 2.911-70.9 41.773-86.972 39.171 3.346-12.357 3.346-12.357Z"
            fill="#f0f5f9"
            opacity={0.4}
          />
          <Path
            data-name="Path 75"
            d="M354.237 113.121s22.074 21.207 88.884-26.644c15.928-11.407 12.425 1.093 12.425 1.093s-80.018 52.272-103.627 31.19c-10.229-9.134 2.318-5.639 2.318-5.639Z"
            fill="#cba780"
            opacity={0.7}
          />
          <Path
            data-name="Path 76"
            d="M433.478 146.049s-13.506-27.471-92.64-5.312c-18.866 5.283-11.305-5.27-11.305-5.27s93.059-21.8 108.049 6.072c6.495 12.079-4.104 4.51-4.104 4.51Z"
            fill="#cba780"
            opacity={0.4}
          />
          <Path
            data-name="Path 77"
            d="M344.156 87.014s66.509-7.523 95.1-24.075 6.62 5.116 6.62 5.116-41.229 11.737-102.02 24.677.3-5.718.3-5.718Z"
            fill="#f0f5f9"
            opacity={0.2}
          />
        </G>
      </G>
      <G data-name="Group 67">
        <G data-name="Group 66">
          <G data-name="Group 65" fill="#312449">
            <Circle
              data-name="Ellipse 49"
              cx={3.052}
              cy={3.052}
              r={3.052}
              transform="translate(377.131 95.717)"
            />
            <Circle
              data-name="Ellipse 50"
              cx={3.052}
              cy={3.052}
              r={3.052}
              transform="translate(408.667 95.717)"
            />
          </G>
        </G>
        <Path
          data-name="Path 78"
          d="M395.951 140.034A48.547 48.547 0 0 0 428.5 55.469a48.077 48.077 0 0 1 12.529 32.55c-.13 26.882-25.571 51.676-52.079 51.514"
          opacity={0.1}
          style={{
            mixBlendMode: "darken",
            isolation: "isolate",
          }}
        />
      </G>
      <Circle
        data-name="Ellipse 51"
        cx={0.594}
        cy={0.594}
        r={0.594}
        transform="translate(381.069 99.65)"
        fill="#fff"
      />
      <Circle
        data-name="Ellipse 52"
        cx={0.594}
        cy={0.594}
        r={0.594}
        transform="translate(409.602 99.65)"
        fill="#fff"
      />
      <Rect
        data-name="Rectangle 10"
        width={7.761}
        height={2.265}
        rx={0.765}
        transform="rotate(45 97.802 545.382)"
        fill="#fff"
        opacity={0.2}
      />
      <Rect
        data-name="Rectangle 11"
        width={7.761}
        height={2.265}
        rx={0.765}
        transform="rotate(-45 302.029 -401.158)"
        fill="#fff"
        opacity={0.2}
      />
    </G>
    <Path
      data-name="Path 79"
      d="M47.044 74.267a16.9 16.9 0 0 1 5.378-5.014 4.767 4.767 0 0 1 2.945-.844 2.017 2.017 0 0 1 1.834 2.107c-.252 1.436-2.38 1.941-2.608 3.382-.231 1.457 1.645 2.446 1.844 3.909.182 1.344-1.185 2.463-2.529 2.646A14.669 14.669 0 0 1 49.882 80a4.108 4.108 0 0 0-3.77.973"
      fill="none"
      stroke="#312449"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.806}
    />
  </Svg>
)

export default VenusSvg
