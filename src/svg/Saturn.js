import * as React from "react"
import Svg, { Defs, ClipPath, Circle, Path, G, Ellipse } from "react-native-svg"

const SaturnSvg = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={159.345}
    height={159.345}
    viewBox="0 -31.13 159.345 159.345"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Circle
          data-name="Ellipse 39"
          cx={48.548}
          cy={48.548}
          r={48.548}
          transform="translate(566.856 220.497)"
          fill="none"
        />
      </ClipPath>
      <ClipPath id="b">
        <Path
          data-name="Rectangle 9"
          d="M3.185 0h20.987a3.185 3.185 0 0 1 3.185 3.185v.326A13.678 13.678 0 0 1 13.679 17.19 13.678 13.678 0 0 1 0 3.511v-.326A3.185 3.185 0 0 1 3.185 0Z"
          transform="translate(602.661 292.497)"
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 46" transform="translate(-535.731 -220.497)">
      <Circle
        data-name="Ellipse 38"
        cx={48.548}
        cy={48.548}
        r={48.548}
        transform="translate(566.856 220.497)"
        fill="#fac731"
      />
      <G data-name="Group 45">
        <G data-name="Group 44" clipPath="url(#a)">
          <Path
            data-name="Path 39"
            d="M564.616 294.154s69.518 7.222 102.923 0-3.588 16.552-3.588 16.552-42.49-3.01-97.095 8.727-2.24-25.279-2.24-25.279Z"
            fill="#312449"
            opacity={0.2}
            style={{
              mixBlendMode: "darken",
              isolation: "isolate",
            }}
          />
          <Path
            data-name="Path 40"
            d="M565.73 234.629s68.7 11.786 102.435 10.019-4.7 11.153-4.7 11.153-42.084-6.228-97.227-3.387-.508-17.785-.508-17.785Z"
            fill="#f0f5f9"
            opacity={0.4}
          />
        </G>
      </G>
      <Path
        data-name="Path 41"
        d="M615.4 317.592a48.547 48.547 0 0 0 32.55-84.565 48.083 48.083 0 0 1 12.53 32.55c-.131 26.882-25.572 51.676-52.08 51.514"
        opacity={0.1}
        style={{
          mixBlendMode: "darken",
          isolation: "isolate",
        }}
      />
      <Path
        data-name="Path 42"
        d="M663.7 272.951c4.228 1.151 6.63 2.47 6.63 3.872 0 4.486-24.592 8.123-54.928 8.123s-54.928-3.637-54.928-8.123c0-1.39 2.36-2.7 6.52-3.842l-.14-5.5c-18.928 2.154-31.125 5.538-31.125 9.343 0 6.507 35.671 11.782 79.673 11.782s79.672-5.275 79.672-11.782c0-3.8-12.2-7.189-31.125-9.343"
        fill="#f0f5f9"
      />
    </G>
    <G data-name="Group 49">
      <Path
        data-name="Rectangle 8"
        d="M70.115 72h20.987a3.185 3.185 0 0 1 3.185 3.185v.326A13.678 13.678 0 0 1 80.609 89.19 13.678 13.678 0 0 1 66.93 75.511v-.326A3.185 3.185 0 0 1 70.115 72Z"
        fill="#3a2a57"
      />
      <Path
        data-name="Path 43"
        d="M626.834 292.5h-2.3a3.185 3.185 0 0 1 3.184 3.185v.326a13.677 13.677 0 0 1-12.526 13.627c.38.031.764.051 1.152.051a13.678 13.678 0 0 0 13.678-13.678v-.326a3.184 3.184 0 0 0-3.188-3.185Z"
        opacity={0.2}
        style={{
          mixBlendMode: "darken",
          isolation: "isolate",
        }}
        transform="translate(-535.731 -220.497)"
      />
      <G data-name="Group 48">
        <G
          data-name="Group 47"
          clipPath="url(#b)"
          transform="translate(-535.731 -220.497)"
        >
          <Ellipse
            data-name="Ellipse 40"
            cx={8.911}
            cy={6.986}
            rx={8.911}
            ry={6.986}
            transform="translate(607.429 302.701)"
            fill="#fd1a16"
          />
        </G>
      </G>
    </G>
    <Path
      data-name="Path 44"
      d="M60.098 54.15s1.066-1.486 3.881-1.486c3.034 0 3.881 1.486 3.881 1.486"
      fill="none"
      stroke="#312449"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.806}
    />
    <Path
      data-name="Path 45"
      d="M93.358 54.441s1.066-1.485 3.881-1.485c3.034 0 3.881 1.485 3.881 1.485"
      fill="none"
      stroke="#312449"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.806}
    />
  </Svg>
)

export default SaturnSvg
