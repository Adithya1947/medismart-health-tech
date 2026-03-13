const HeartAnimation = () => (
  <div className="mt-3 relative h-12 overflow-hidden rounded-lg bg-[#0a0a1a]">
    <svg
      viewBox="0 0 600 100"
      className="w-full h-full animate-ecg-scroll"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ff3366" />
          <stop offset="30%" stopColor="#00e5ff" />
          <stop offset="50%" stopColor="#e0e0ff" />
          <stop offset="70%" stopColor="#ff44aa" />
          <stop offset="100%" stopColor="#7b5cff" />
        </linearGradient>
      </defs>
      {/* ECG waveform path */}
      <polyline
        points="0,50 80,50 100,50 120,42 130,58 140,50 160,50 180,30 190,85 200,10 210,70 220,50 240,45 260,55 280,48 300,50 380,50 400,50 420,42 430,58 440,50 460,50 480,30 490,85 500,10 510,70 520,50 540,45 560,55 580,48 600,50"
        fill="none"
        stroke="url(#ecgGradient)"
        strokeWidth="2.5"
        filter="url(#neonGlow)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Dimmer duplicate for extra glow */}
      <polyline
        points="0,50 80,50 100,50 120,42 130,58 140,50 160,50 180,30 190,85 200,10 210,70 220,50 240,45 260,55 280,48 300,50 380,50 400,50 420,42 430,58 440,50 460,50 480,30 490,85 500,10 510,70 520,50 540,45 560,55 580,48 600,50"
        fill="none"
        stroke="url(#ecgGradient)"
        strokeWidth="5"
        opacity="0.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    {/* Scan line */}
    <div className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-ecg-scan" />
  </div>
);

export default HeartAnimation;
