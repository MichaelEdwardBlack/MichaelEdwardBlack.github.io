import { useState } from "react";
import { IconProps } from "./types";

export type Group = "" | "MnK" | "Monitor" | "Pc";
interface GamingPCSetupIconProps extends IconProps {
  onGroupSelect?: (group: Group) => void;
}
export const GamingPCSetupIcon = ({
  height,
  width,
  opacity,
  className,
  onGroupSelect,
}: GamingPCSetupIconProps) => {
  const [selectedGroup, setSelectedGroup] = useState<Group>("");

  const setGroup = (group: Group) => {
    setSelectedGroup(group);
    if (onGroupSelect) {
      onGroupSelect(group);
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 1200 800"
      width={width.toString()}
      height={height.toString()}
      opacity={opacity ? opacity : 1}
      className={`${className ? className : ""}`}
    >
      <defs>
        <linearGradient
          id="a"
          name="monitorShader"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient
          id="c"
          name="bottomFan"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient
          id="d"
          name="topFan"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="currentColor" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      <g
        id="MnK"
        className={`cursor-pointer stroke-current ${
          selectedGroup === "MnK" ? "fill-primary-500" : "fill-transparent"
        }`}
        onClick={() => setGroup("MnK")}
      >
        <g
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          transform="translate(90 -200)"
        >
          <rect
            width="465"
            height="180"
            rx="8"
            ry="8"
            transform="translate(10 800)"
          />
          <g transform="translate(4 144)">
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(438 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(410 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(382 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(354 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(326 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(298 808)"
            />
            <rect
              width="130"
              height="20"
              rx="4"
              ry="4"
              transform="translate(158 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(130 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(102 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(74 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(46 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(18 808)"
            />
          </g>
          <g transform="translate(4 116)">
            <rect
              width="80"
              height="20"
              rx="4"
              ry="4"
              transform="translate(382 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(354 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(326 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(298 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(270 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(242 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(214 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(186 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(158 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(130 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(102 808)"
            />
            <rect
              width="75"
              height="20"
              rx="4"
              ry="4"
              transform="translate(18 808)"
            />
          </g>
          <g transform="translate(4 88)">
            <rect
              width="50"
              height="20"
              rx="4"
              ry="4"
              transform="translate(410 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(382 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(354 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(326 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(298 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(270 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(242 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(214 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(186 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(158 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(130 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(102 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(74 808)"
            />
            <rect
              width="48"
              height="20"
              rx="4"
              ry="4"
              transform="translate(18 808)"
            />
          </g>
          <g transform="translate(4 60)">
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(438 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(410 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(382 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(354 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(326 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(298 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(270 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(242 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(214 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(186 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(158 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(130 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(102 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(74 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(46 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(18 808)"
            />
          </g>
          <g transform="translate(4 32)">
            <rect
              width="50"
              height="20"
              rx="4"
              ry="4"
              transform="translate(410 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(382 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(354 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(326 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(298 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(270 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(242 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(214 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(186 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(158 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(130 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(102 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(74 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(46 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(18 808)"
            />
          </g>
          <g transform="translate(4)">
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(438 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(410 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(382 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(354 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(298 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(270 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(242 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(214 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(158 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(130 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(102 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(74 808)"
            />
            <rect
              width="20"
              height="20"
              rx="4"
              ry="4"
              transform="translate(18 808)"
            />
          </g>
        </g>
        <g transform="translate(90 -200)">
          <rect
            width="100"
            height="150"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
            rx="50"
            ry="50"
            transform="translate(500 820)"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3.84"
            d="M500 860h100M550 850v120M550 820v10"
          />
          <rect
            width="10"
            height="20"
            strokeWidth="5"
            rx="5"
            ry="5"
            transform="translate(545 830)"
          />
        </g>
      </g>

      <g
        id="Monitor"
        className={`cursor-pointer stroke-current ${
          selectedGroup === "Monitor" ? "fill-primary-500" : "fill-transparent"
        }`}
        transform="translate(-180 -30)"
        onClick={() => setGroup("Monitor")}
      >
        <rect
          width="640"
          height="360"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          filter="url(#b)"
          rx="8"
          ry="8"
          transform="translate(200 50)"
        />
        <rect
          width="560"
          height="280"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="10"
          rx="8"
          ry="8"
          transform="translate(240 90)"
        />
        <rect
          width="200"
          height="10"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          rx="8"
          ry="8"
          transform="translate(420 510)"
        />
        <rect
          width="40"
          height="40"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          rx="8"
          ry="8"
          transform="translate(520 230)"
        />
        <rect
          width="40"
          height="40"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          rx="8"
          ry="8"
          transform="translate(480 230)"
        />
        <rect
          width="40"
          height="40"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          rx="8"
          ry="8"
          transform="translate(520 190)"
        />
        <rect
          width="50"
          height="50"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          rx="8"
          ry="8"
          transform="translate(470 180)"
        />
        <rect
          width="50"
          height="50"
          fill="url(#a)"
          fillOpacity=".5"
          opacity=".5"
          rx="8"
          ry="8"
          transform="translate(260 110)"
        />

        <rect
          width="120"
          height="20"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="6"
          rx="8"
          ry="8"
          transform="translate(460 490)"
        />
        <rect
          width="60"
          height="80"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          rx="8"
          ry="8"
          transform="translate(490 410)"
        />

        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          d="M700 390h30M750 390h30"
        />
      </g>

      <g
        id="Pc"
        stroke="currentColor"
        transform="translate(-20 -165)"
        className={`cursor-pointer stroke-current ${
          selectedGroup === "Pc" ? "fill-primary-500" : "fill-transparent"
        }`}
        onClick={() => setGroup("Pc")}
      >
        <rect
          width="280"
          height="500"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          rx="8"
          ry="8"
          transform="translate(820 410)"
        />
        <circle
          r="75"
          fill="url(#c)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity=".5"
          strokeWidth="5"
          transform="translate(960 715)"
        />
        <circle
          r="75"
          fill="url(#d)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity=".5"
          strokeWidth="5"
          transform="translate(960 540)"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="5"
          d="m960 860 140 50H820l140-50z"
        />
        <path strokeWidth="5" d="M1070 430h20" />
      </g>
    </svg>
  );
};
