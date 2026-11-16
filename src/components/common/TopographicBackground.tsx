import React from "react";

interface TopographicBackgroundProps {
  className?: string;
  opacity?: number;
  interactive?: boolean;
}

export const TopographicBackground: React.FC<TopographicBackgroundProps> = ({
  className = "",
  opacity = 0.55
}) => {
  return (
    <div
      className={`topographic-bg-canvas ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
        opacity
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{
          width: "100%",
          height: "100%",
          display: "block"
        }}
      >
        <defs>
          <linearGradient id="topo-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.45" />
          </linearGradient>

          <linearGradient id="topo-cyan-grad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.15" />
          </linearGradient>

          <filter id="topo-blur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="1.5" />
          </filter>
        </defs>

        {/* Outer Terrain Iso-Lines */}
        <g stroke="url(#topo-blue-grad)" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
          <path
            d="M -100 120 C 300 80, 500 240, 850 180 C 1200 120, 1400 320, 1750 250"
            className="topo-path topo-path-1"
          />
          <path
            d="M -100 180 C 280 140, 520 300, 880 230 C 1220 170, 1380 390, 1750 310"
            className="topo-path topo-path-2"
          />
          <path
            d="M -100 240 C 260 200, 540 360, 910 280 C 1240 220, 1360 460, 1750 370"
            className="topo-path topo-path-3"
          />
          <path
            d="M -100 300 C 240 260, 560 420, 940 330 C 1260 270, 1340 530, 1750 430"
            className="topo-path topo-path-4"
          />
        </g>

        {/* Central Core Elevations */}
        <g stroke="url(#topo-cyan-grad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.75">
          <path
            d="M -50 420 C 350 360, 600 580, 1000 480 C 1350 400, 1450 680, 1750 560"
            className="topo-path topo-path-5"
          />
          <path
            d="M -50 480 C 330 420, 620 640, 1030 530 C 1370 450, 1430 740, 1750 620"
            className="topo-path topo-path-6"
          />
          <path
            d="M -50 540 C 310 480, 640 700, 1060 580 C 1390 500, 1410 800, 1750 680"
            className="topo-path topo-path-7"
          />
        </g>

        {/* Lower Valley Topographic Loops */}
        <g stroke="url(#topo-blue-grad)" strokeWidth="1" strokeDasharray="4 6" opacity="0.4">
          <path
            d="M 120 780 C 400 650, 750 820, 1150 710 C 1450 620, 1600 840, 1750 790"
            className="topo-path topo-path-8"
          />
          <path
            d="M -100 680 C 250 560, 600 760, 1020 650 C 1350 570, 1550 780, 1750 740"
            className="topo-path topo-path-9"
          />
        </g>

        {/* Subtle Ambient Radial Lighting Glows */}
        <circle cx="850" cy="220" r="280" fill="#3b82f6" opacity="0.04" filter="url(#topo-blur)" />
        <circle cx="350" cy="650" r="320" fill="#6366f1" opacity="0.035" filter="url(#topo-blur)" />
        <circle cx="1350" cy="500" r="260" fill="#06b6d4" opacity="0.04" filter="url(#topo-blur)" />
      </svg>
    </div>
  );
};

