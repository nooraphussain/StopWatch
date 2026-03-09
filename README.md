# React Stopwatch Mini-Project ⏱️

A simple **stopwatch app** built with **React**, using only **`useState`**, **`useEffect`**, and **conditional rendering**.  
Styled with a dark gradient background and interactive buttons for a fun, modern look.

---

## Features

- **Start / Stop** the timer  
- **Reset** the timer to zero  
- **Lap** functionality to record multiple times  
- **Digital-style timer** with hours, minutes, seconds, and milliseconds  
- Conditional rendering for laps list and button states  
- Fun styling: gradient background, neon-like timer, and icons on buttons  

---

## Screenshots

<img width="773" height="517" alt="Screenshot 2026-03-09 at 13 54 36" src="https://github.com/user-attachments/assets/290530cd-4389-4f7c-9a28-cd585cd6c06e" />
<img width="901" height="531" alt="Screenshot 2026-03-09 at 13 54 43" src="https://github.com/user-attachments/assets/25e6ef85-73c8-4d2e-8781-58e1bd3d432f" />
<img width="953" height="613" alt="Screenshot 2026-03-09 at 13 55 03" src="https://github.com/user-attachments/assets/e81ebd20-6317-422f-8266-b698cec61c76" />



---

## How to Run

1. Clone the repository:  
   ```bash
   git clone [<your-repo-url>](https://github.com/nooraphussain/StopWatch.git)
   cd <your-project-folder>




## How It Works

- **useState manages the timer (time), running state (running), and laps (laps).
- **useEffect handles interval updates when the timer is running.
- **Conditional rendering:
- **Shows "Stop" or "Start" dynamically depending on the timer state
- **Shows laps list only when laps exist


## File Structure
src/
├─ App.js        # Main stopwatch logic
├─ App.css       # Styling for timer, buttons, and laps
├─ index.js      # React entry point


- **Fun Styles & UX
- **Dark gradient background: #131d31 → #1a2a4c
- **Big bold timer digits with small labels underneath (HOURS, MINUTES, SECONDS, MS)

Colored buttons with icons:
- **Start (blue ▶️), Stop (red ⏹), Reset (gray 🔄), Lap (teal 📝)
- **Centered laps list with semi-transparent backgrounds
- **Responsive design for clean layout on different screens



## Technologies Used

- **React
- **useState, useEffect hooks
- **Conditional rendering
- **CSS Flexbox, gradients, and modern styling


## Future Improvements

- **Add sound effects for lap or stop events
- **Add keyboard shortcuts for start/stop/reset/lap
- **Add save/export laps functionality
- **Enhance animations for timer and buttons

## License
This project is open source and free to use for learning purposes.
