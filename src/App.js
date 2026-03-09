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
    const hours = Math.floor(ms / 3600000) % 24;
    const minutes = Math.floor((ms / 60000) % 60);
    const seconds = Math.floor((ms / 1000) % 60);
    const centiseconds = Math.floor((ms / 10) % 100);
    return (
      `${("0" + hours).slice(-2)}:`+
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
      <div className="App">
        <div style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 20c-4.963 0-9-4.037-9-9s4.037-9 9-9 9 4.037 9 9-4.037 9-9 9zm.5-9.5V7h-1v6h5v-1h-4z"/>
          </svg>
          Stopwatch
        </h1>

        <h2 className='Format-time'>
          {formatTime(time).split(':').map((val, index, arr) => (
            <>
              <span className="time-unit">
                <span className="value">{val}</span>
                <span className="label">
                  {index === 0 ? 'HOURS' : index === 1 ? 'MINUTES' : index === 2 ? 'SECONDS' : 'MS'}
                </span>
              </span>
              {index < arr.length - 1 && <span className="colon">:</span>}
            </>
          ))}
        </h2>

        <div>
          <button 
            onClick={handleStartStop} 
            className={running ? "stop-btn" : "start-btn"}
          >
            {running ? (
              <>
                <span className="btn-icon">⏹</span> Stop
              </>
            ) : (
              <>
                <span className="btn-icon">▶️</span> Start
              </>
            )}
          </button>

          <button className="reset-btn" onClick={handleReset}>
            🔄 Reset
          </button>

          <button className="lap-btn" onClick={handleLap} disabled={!running}>
            Add Lap
          </button>
        </div>

          {laps.length > 0 && (
            <div className="laps-container">
              <h3>Laps</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {laps.map((lapTime, index) => (
                  <li key={index}>{`Lap ${index + 1}: ${formatTime(lapTime)}`}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </> 
  );
}

export default App;
