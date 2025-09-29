import React, { useEffect, useRef } from "react";

export default function App() {
  // Reference to the div where FlipClock will be rendered
  const clockRef = useRef(null); 

  useEffect(() => {
    if (clockRef.current && window.jQuery) {
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
    <div style={styles.page}>
      {/* Background image */}
      <div style={styles.background}>

        {/* Content with glassmorphism effect */}
        <div style={styles.container}>
          <div style={styles.glassCard}>
            <h1 style={styles.title}>Countdown to New Year 2026</h1>

            {/* FlipClock will be rendered here */}
            <div 
              ref={clockRef}
              style={styles.clockWrapper}
              aria-label="Countdown FlipClock"
            />
          </div>      
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundImage: "url('/ioann-peshkov-Eo0aGGY3PWI-unsplash.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    zIndex: 0,
  },
  container: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem 0",
    boxSizing: "border-box",
  },
  glassCard: {
    minWidth: 500,
    maxWidth: 1100,
    padding: "2.5rem 3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",

    /* Glassmorphism */
    background: "rgba(255, 255, 255, 0.06)",
    border: "1px solid  rgba(5, 80, 39, 0.35)",
    boxShadow: "0 8px 32px rgba(5, 80, 39, 0.35)",
    backdropFilter: "blur(5px) saturate(120%)",
    WebkitBackdropFilter: "blur(5px) saturate(120%)", // Safari
  },
  title: {
    margin: 0,
    padding: 0,
    color: "#FFFFFF",
    fontSize: "3rem",
    fontWeight: 700,
    textAlign: "center",
    userSelect: "none",
    WebkitUserSelect: "none",
  },
  clockWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem 0",
  },
};
