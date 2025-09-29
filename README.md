# Countdown to New Year 2026 🎉

A simple React project using **FlipClock.js** to display a real-time countdown to **New Year 2026**.
The design is customized with CSS for a clean, modern, and minimalistic black-and-white look.

## Features

* Flip-style countdown timer (days, hours, minutes, seconds).
* Styled panels, digits, and labels for a custom theme.
* Fullscreen layout with centered clock.
* Responsive design with bold typography.

## Tech Stack

* **React** (functional components, hooks)
* **FlipClock.js** (for countdown timer)
* **CSS** (custom styling for flip panels, labels, and digits)

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/lilianacodes/react-flipclock-countdown.git
   cd flipclock-countdown
   ```

2. Install dependencies:

   ```bash
   npm install react react-dom
   npm install jquery
   npm install flipclock

   ```

3. Add **FlipClock.js** dependency (via CDN in `public/index.html` or npm):

   ```html
   <!-- Add to public/index.html -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/FlipClock/0.7.8/flipclock.min.js"></script>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/FlipClock/0.7.8/flipclock.min.css" />
   ```

4. Run the development server:

   ```bash
   npm start
   ```

## Customization

You can easily update the:

* **Target date** → in `/src/App.js`

  ```javascript
  const targetDate = new Date("2025-12-31T23:59:59");
  ```
* **Colors, fonts, styles** → in `/src/index.css`
