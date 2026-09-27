import { useRef } from "react";

export default function App() {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>focus</button> <br />
      <PassingRef />
    </>
  );
}

function PassingRef() {
  const inputRef = useRef(null);
  return (
    <>
      <Components reff={inputRef} />
    </>
  );
}

function Components({ reff /* cannot named with ref */, onclick }) {
  return (
    <>
      <input ref={reff} />
      <button
        onClick={() => {
          reff.current.focus();
        }}
      >
        focus
      </button>
    </>
  );
}
