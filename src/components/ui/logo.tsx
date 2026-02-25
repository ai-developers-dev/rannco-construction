interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 240 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Hammer & Building icon */}
      <g fill="#F4581F">
        {/* Building silhouette */}
        <rect x="70" y="18" width="60" height="38" rx="2" />
        {/* Building windows */}
        <rect x="78" y="26" width="10" height="8" rx="1" fill="white" />
        <rect x="95" y="26" width="10" height="8" rx="1" fill="white" />
        <rect x="112" y="26" width="10" height="8" rx="1" fill="white" />
        <rect x="78" y="40" width="10" height="8" rx="1" fill="white" />
        <rect x="95" y="40" width="10" height="8" rx="1" fill="white" />
        <rect x="112" y="40" width="10" height="8" rx="1" fill="white" />
        {/* Building door */}
        <rect x="93" y="48" width="14" height="8" rx="1" fill="white" />
        {/* Diagonal hammer handle */}
        <rect x="42" y="10" width="5" height="40" rx="2" transform="rotate(-30 42 10)" />
        {/* Hammer head */}
        <rect x="32" y="4" width="18" height="10" rx="2" transform="rotate(-30 32 4)" />
      </g>

      {/* RANNCO text - black blocky font */}
      <text
        x="100"
        y="72"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Bold', sans-serif"
        fontWeight="900"
        fontSize="22"
        letterSpacing="3"
        fill="#1A1A1A"
      >
        RANNCO
      </text>

      {/* CONSTRUCTION text - orange */}
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontFamily="'Arial Black', 'Helvetica Bold', sans-serif"
        fontWeight="900"
        fontSize="13"
        letterSpacing="2.5"
        fill="#F4581F"
      >
        CONSTRUCTION
      </text>
    </svg>
  );
}
