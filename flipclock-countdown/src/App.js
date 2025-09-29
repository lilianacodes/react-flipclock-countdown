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
    <div 
      style={{
        height: "100vh",     
        width: "100vw",
        display: "flex",     
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundImage: "url('/ioann-peshkov-Eo0aGGY3PWI-unsplash.jpg')",
        backgroundSize: "cover",  
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",    
        }}>

      {/* Heading */}
      <h1 style={{
        marginTop: "150px",
        marginBottom: "150px",
        fontSize: "5rem", 
        fontWeight: "bold", 
        color: "#fff",
        WebkitUserSelect: "none", // Safari
        msUserSelect: "none",     // IE 10–11
        userSelect: "none",       // Standart syntax
        }}>
        Countdown to New Year 2026
      </h1>

      {/* FlipClock will be rendered here */}
      <div 
        ref={clockRef}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>      
    </div>
  );
}

