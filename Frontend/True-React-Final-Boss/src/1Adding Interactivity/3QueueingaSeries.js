import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);
  const [unchanged, setUnchanged] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        {number}
      </button>
      <button
        onClick={() => {
          setNumber(number + 1);
          setNumber((n) => n + 1);
        }}
      >
        {number}
      </button>
      <button
        onClick={() => {
          setUnchanged(unchanged + 1);
          setUnchanged((n) => n + 1);
          setUnchanged(30);
        }}
      >
        {unchanged}
      </button>
    </>
  );
}
