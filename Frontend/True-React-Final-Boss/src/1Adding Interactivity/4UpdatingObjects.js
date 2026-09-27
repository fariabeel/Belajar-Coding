import { useState } from "react";
export default function App() {
  return (
    <>
      <NestedForm />
    </>
  );
}

function NestedForm() {
  const [theInput, setTheInput] = useState({
    message: "nothin",
    nest: {
      message: "wow",
    },
  });
  function handleOnChange(e) {
    let prev = { ...theInput.nest, message: e.target.value };
    let next = { ...theInput, nest: prev };
    setTheInput(next);
    // or
    // setTheInput({ ...theInput, nest: { ...theInput.nest, message: e.target.value } });
  }
  function handleOnChangee(e) {
    setTheInput({ ...theInput, message: e.target.value });
  }
  return (
    <>
      <input
        type="text"
        value={theInput.nest.message}
        onChange={handleOnChange}
      />{" "}
      <br />
      <input value={theInput.message} onChange={handleOnChangee} />
      <br />
      <p>
        {theInput.nest.message} {theInput.message}
      </p>
    </>
  );
}

export function Form() {
  const [value, setValue] = useState({ message: "wow", info: "real" });
  function onchange(e) {
    setValue({ ...value, message: e.target.value });
  }
  function onchangee(e) {
    setValue({ ...value, info: e.target.value });
  }
  return (
    <>
      <label>
        <input value={value.message} onChange={onchange} />
      </label>
      <label>
        {" "}
        <br />
        <input value={value.info} onChange={onchangee} />
      </label>
      <p>
        {value.message} {value.info}
      </p>
    </>
  );
}

export function Cursor() {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        cursor: "none",
      }}
      onPointerMove={(e) => {
        setCursor({
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2,
        });
      }}
    >
      <div
        style={{
          background: "red",
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          transform: `translate(calc(-50% + ${cursor.x}px), calc(-50% + ${cursor.y}px))`,
          position: "fixed",
          top: "50%",
          left: "50%",
        }}
      />
    </div>
  );
}

// go to react folder
