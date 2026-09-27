import { useState } from "react";
import "./3style.css";

export default function App() {
  return (
    <>
      <ReRendering/>
    </>
  );
}

function DisplayCounter() {
  const [showSec, setShowSec] = useState(true);
  return (
    <>
      <Counter />
      {showSec && <Counter />}
      <p>
        {" "}
        second counter
        <input
          type="checkbox"
          checked={showSec}
          onChange={(e) => {
            setShowSec(e.target.checked);
          }}
        />
      </p>
    </>
  );
}

function Counter() {
  const [click, setClick] = useState(0);
  //must add const but let and var also work

  return (
    <div
      style={{
        textAlign: "center",
        width: "60px",
        display: "inline-block",
        border: "1px solid",
        marginLeft: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <p>{click}</p>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

function IfOperation() {
  // else return just replacing true return in UI tree position
  const [trueFalse, setTrueFalse] = useState(true);
  if (trueFalse) {
    return (
      <>
        <Counter />
        <div>
          true return{" "}
          <input
            type="checkbox"
            checked={trueFalse}
            onChange={(e) => {
              setTrueFalse(e.target.checked);
            }}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Counter />
        <div>
          false return{" "}
          <input
            type="checkbox"
            checked={trueFalse}
            onChange={(e) => {
              setTrueFalse(e.target.checked);
            }}
          />
        </div>
      </>
    );
  }
}

function ReplacingPosition() {
  const [returning, setReturning] = useState(true);
  return (
    <>
      {returning ? <Counter /> : <p>okay</p>}
      <div>
        break?{" "}
        <input
          type="checkbox"
          checked={returning}
          onChange={(e) => {
            setReturning(e.target.checked);
          }}
        />
      </div>
    </>
  );
}

function SamePosition() {
  const [divSec, setDivSec] = useState(true);
  return (
    <>
      {divSec ? (
        <div>
          <Counter />
        </div>
      ) : (
        <section>
          <Counter />
        </section>
      )}
      {/* in UI tree the div child will deleted and it's
       child too, replaced with section child and 
       otherwise. but if you match the tree, the Counter
       will not deleted
       */}
      div parent?{" "}
      <input
        type="checkbox"
        checked={divSec}
        onChange={(e) => {
          setDivSec(e.target.checked);
        }}
      />
    </>
  );
}

function ReRendering() {
  // const [text, setText] = useState(""); X
  const [counter, setCounter] = useState(0);
  function TextField() {
    const [text, setText] = useState(""); // O
    return (
      <input
        value={text}
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    );
  }

  return (
    <>
      <TextField />
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        {counter}
      </button>

      {/* 
      you will rendering new TextField every counter 
      increment cuzz rerendering
      */}
    </>
  );
}

function ResettingState() {
  const [trueFalse, setTrueFalse] = useState(true);
  return (
    <>
      {/* 
  the wrong way
  {trueFalse ? (
        <RSCounter trueFalse={`${trueFalse}`} />
      ) : (
        <RSCounter trueFalse={`${trueFalse}`} />
      )}
  */}

      {/* the right way */}

      {trueFalse && <RSCounter trueFalse={`${trueFalse}`} />}
      {!trueFalse && <RSCounter trueFalse={`${trueFalse}`} />}

      <br />
      <br />
      <div>
        <button
          onClick={() => {
            setTrueFalse(!trueFalse);
          }}
        >
          change boolean
        </button>
        <br />
        <br />

        {/* or */}
        {trueFalse ? (
          <RSCounter key="true" trueFalse={`${trueFalse}`} />
        ) : (
          <RSCounter key={1} trueFalse={`${trueFalse}`} />
        )}
      </div>
    </>
  );
}

function RSCounter({ trueFalse }) {
  const [click, setClick] = useState(0);
  //must add const but let and var also work

  return (
    <div
      style={{
        textAlign: "center",
        width: "60px",
        display: "inline-block",
        border: "1px solid",
        marginLeft: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <p>{trueFalse}</p>
      <p>{click}</p>
      <button
        onClick={() => {
          setClick(click + 1);
        }}
      >
        click
      </button>
    </div>
  );
}
