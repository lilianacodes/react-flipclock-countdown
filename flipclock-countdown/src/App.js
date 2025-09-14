import React, { useEffect, useRef } from "react";

export default function App() {
  // Reference to the div where FlipClock will be rendered
  const clockRef = useRef(null); 

  useEffect(() => {
    if (clockRef.current) {
      // Set target date
      const targetDate = new Date("2025-12-31T23:59:59"); 
      const now = new Date();

      // Calculate difference in seconds
      const diffSeconds = Math.floor((targetDate - now) / 1000);

      // Use the global jQuery
      window.jQuery(clockRef.current).FlipClock(diffSeconds, {
        clockFace: "DailyCounter",
        countdown: true,
        showSeconds: true,
      });
    }
  }, []);

  return (
    <div style={{ 
      height: "100vh",               // Full viewport height
      display: "flex",               // Use flexbox
      justifyContent: "center",      // Center horizontally
      alignItems: "center",          // Center vertically
      backgroundColor: "black"       // Black background
    }}>
      <div ref={clockRef}></div>      {/* FlipClock will be rendered here */}
    </div>
  );
}

