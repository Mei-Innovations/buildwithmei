export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <g filter="url(#glow)">
        {/* Top Center Diamond */}
        <path 
          d="M50 22 L65 30.66 L50 39.32 L35 30.66 Z" 
          fill="url(#emerald-gradient)" 
        />
        
        {/* Top Outer Shape */}
        <path 
          d="M50 4 L86 24.78 L71 33.44 L50 21.32 L29 33.44 L14 24.78 Z" 
          fill="url(#emerald-gradient)" 
        />

        {/* Left Face */}
        <path 
          d="M11 29 L47 49.78 L47 91.34 L31 82.1 L31 61 L27 58.7 L27 79.8 L11 70.56 Z" 
          fill="url(#emerald-gradient-dark)" 
        />

        {/* Right Face */}
        <path 
          d="M89 29 L53 49.78 L53 91.34 L69 82.1 L69 61 L73 58.7 L73 79.8 L89 70.56 Z" 
          fill="url(#emerald-gradient-darker)" 
        />
      </g>

      <defs>
        <linearGradient id="emerald-gradient" x1="50" y1="4" x2="50" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="emerald-gradient-dark" x1="11" y1="29" x2="47" y2="91" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10B981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="emerald-gradient-darker" x1="53" y1="29" x2="89" y2="91" gradientUnits="userSpaceOnUse">
          <stop stopColor="#059669" />
          <stop offset="1" stopColor="#064E3B" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#047857" floodOpacity="0.4" />
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#34D399" floodOpacity="0.2" />
        </filter>
      </defs>
    </svg>
  );
}
