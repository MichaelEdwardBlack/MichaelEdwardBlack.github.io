import { IconProps } from "./types";

export enum Group {
  "None" = 0,
  "Monitor" = 1,
  "Pc" = 2,
  "MnK" = 3,
}

interface GamingPCSetupIconProps extends IconProps {
  group?: Group;
  onGroupSelect?: (group: Group) => void;
}
export const GamingPCSetupIcon = ({
  height,
  width,
  opacity,
  className,
  group,
  onGroupSelect,
}: GamingPCSetupIconProps) => {
  const setGroup = (group: Group) => {
    if (onGroupSelect) {
      onGroupSelect(group);
    }
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      viewBox="0 0 1100 800"
      width={width}
      height={height}
      opacity={opacity ? opacity : 1}
      className={className + "text-gray-500"}
    >
      <defs>
        <linearGradient
          id="currentColorGradient"
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
          id="grayGradient"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="rgb(107 114 128)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient
          id="violetGradient"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="rgb(139 92 246)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient
          id="cyanGradient"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="rgb(6 182 212)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient
          id="redGradient"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient
          id="yellowGradient"
          x1=".146"
          x2=".854"
          y1=".146"
          y2=".854"
          gradientUnits="objectBoundingBox"
          spreadMethod="pad"
        >
          <stop offset="0%" stopColor="rgb(234 179 8)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <g
        id="MnK"
        className="cursor-pointer stroke-current fill-transparent"
        onClick={() => setGroup(Group.MnK)}
      >
        <g
          className={group === Group.MnK ? "fill-gray-600" : "transparent"}
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
          <g
            transform="translate(4)"
            fill={group === Group.MnK ? "url(#yellowGradient)" : "transparent"}
          >
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
          <g
            transform="translate(4 32)"
            fill={group === Group.MnK ? "url(#redGradient)" : "transparent"}
          >
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

          <g
            transform="translate(4 60)"
            fill={group === Group.MnK ? "url(#violetGradient)" : "transparent"}
          >
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

          <g
            transform="translate(4 88)"
            fill={group === Group.MnK ? "url(#cyanGradient)" : "transparent"}
          >
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
          <g
            transform="translate(4 116)"
            fill={group === Group.MnK ? "url(#violetGradient)" : "transparent"}
          >
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
          <g
            transform="translate(4 144)"
            fill={group === Group.MnK ? "url(#redGradient)" : "transparent"}
          >
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
        </g>

        <g transform="translate(90 -200)">
          <rect
            fill={group === Group.MnK ? "url(#violetGradient)" : "transparent"}
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
            fill={group === Group.MnK ? "url(#grayGradient)" : "transparent"}
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
        className="cursor-pointer stroke-current fill-transparent"
        transform="translate(-180 -30)"
        onClick={() => setGroup(Group.Monitor)}
      >
        <rect
          width="640"
          height="360"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10"
          filter="url(#currentColorGradient)"
          rx="8"
          ry="8"
          className={
            group === Group.Monitor ? "fill-gray-800" : "fill-transparent"
          }
          transform="translate(200 50)"
        />
        <rect
          className={
            group === Group.Monitor ? "fill-gray-600" : "fill-transparent"
          }
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
          className={
            group === Group.Monitor ? "fill-yellow-500" : "fill-transparent"
          }
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
          className={
            group === Group.Monitor ? "fill-blue-500" : "fill-transparent"
          }
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
          className={
            group === Group.Monitor ? "fill-green-500" : "fill-transparent"
          }
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
          className={
            group === Group.Monitor ? "fill-red-500" : "fill-transparent"
          }
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
          fill="url(#currentColorGradient)"
          fillOpacity=".5"
          opacity=".5"
          rx="8"
          ry="8"
          stroke="none"
          transform="translate(260 110)"
        />

        <rect
          className={
            group === Group.Monitor ? "fill-gray-800" : "fill-transparent"
          }
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
          className={
            group === Group.Monitor ? "fill-gray-800" : "fill-transparent"
          }
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
        <rect
          className={
            group === Group.Monitor ? "fill-gray-800" : "fill-transparent"
          }
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
        className="cursor-pointer stroke-current fill-transparent"
        onClick={() => setGroup(Group.Pc)}
      >
        <rect
          className={group === Group.Pc ? "fill-gray-700" : "fill-transparent"}
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
          fill={
            group === Group.Pc
              ? "url(#cyanGradient)"
              : "url(#currentColorGradient)"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity=".5"
          strokeWidth="5"
          transform="translate(960 540)"
        />
        <circle
          r="75"
          fill={
            group === Group.Pc
              ? "url(#violetGradient)"
              : "url(#currentColorGradient)"
          }
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity=".5"
          strokeWidth="5"
          transform="translate(960 715)"
        />
        <path
          fill={
            group === Group.Pc
              ? "url(#redGradient)"
              : "url(#currentColorGradient)"
          }
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
