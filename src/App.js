import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [time, setTime] = useState(0) // milliseconds
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]) // store laps 

  useEffect(() => {
    let interval;
  
    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  
    // Cleanup: clears the previous interval whenever `running` changes
    return () => clearInterval(interval);
  
  }, [running]);

  // Format milliseconds to MM:SS:CS
  const formatTime = (ms) => {
    const minutes = Math.floor((ms / 60000) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    const centiseconds = Math.floor((ms / 10) % 100);
    return (
      `${("0" + minutes).slice(-2)}:` +
      `${("0" + seconds).slice(-2)}:` +
      `${("0" + centiseconds).slice(-2)}`
    );
  };

  // Handlers
  const handleStartStop = () => setRunning(!running);

  const handleReset = () => {
    setRunning(false);  // stop the timer immediately
    setTime(0);
    setLaps([]);        // clear lap times if needed
  };

  const handleLap = () => {
    if (running) {
      setLaps(prev => [...prev, time]); // add current time below the of lap list
    }
  };

  return (
    <>
      <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>

      <div style={{ margin: '10px 0' }}>
        <button onClick={handleStartStop}>
          {running ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset} style={{ marginLeft: '5px' }}>
          Reset
        </button>
        <button onClick={handleLap} style={{ marginLeft: '5px' }} disabled={!running}>
          Lap
        </button>
      </div>

      {laps.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Laps</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {laps.map((lapTime, index) => (
              <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
    </> 
  );
}

export default App;
