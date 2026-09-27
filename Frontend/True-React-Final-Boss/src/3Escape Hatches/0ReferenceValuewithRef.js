import { useRef } from "react";
import { useState } from "react";

export default function App() {
  const ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;  
    alert(ref.current);
  }
  return (
    <>
      <button onClick={handleClick}>{ref.current}</button>
      {/* try console.log(ref.current) */}

      <StopWatch />
    </>
  );
}

function StopWatch() {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleClick() {
    setStart(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  let timePassed = 0;
  start != null && now != null ? (timePassed = (now - start) / 1000) : null;

  return (
    <>
      <h2>time passed: {timePassed.toFixed(3)}</h2>
      <button onClick={handleClick}>Start</button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop
      </button>
    </>
  );
}
