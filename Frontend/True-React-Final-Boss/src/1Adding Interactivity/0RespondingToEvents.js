// Responding to Event

export default function App() {
  return (
    <>
      {/* <button onClick={alert('You clicked me!')}> X (not in it use)*/}
      <AddingEvent value="AddingEvent" onclick={() => alert("real")} />
      <AddingEvent
        value="AddingEvent"
        onclick={function () {
          alert("real");
        }}
      />
      <button
        onClick={() => {
          alert("wut");
        }}
      >
        {" "}
        button{" "}
      </button>{" "}
      <br />
      <button onClick={ClickHandler}>ClickHandler</button>
      <Simple message="unreal">Simple</Simple>
      <Screen /> <br />
      <PreventDefault /> {"<-- not Refresed"}
    </>
  );
}

function AddingEvent({ onclick, value }) {
  return (
    <button onClick={onclick} style={{ color: "lightblue" }}>
      {value}
    </button>
  );
}

function ClickHandler() {
  alert("wow");
}

function Simple({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export function Screen() {
  return (
    <span
      onClick={() => {
        alert("you called the parent");
      }}
    >
      <Propagation click={"dd"} />
      <PropagationPassing
        click={() => {
          alert("real");
        }}
      />
    </span>
  );
}

function Propagation({ click }) {
  return (
    <button
      onClick={(e) => {
        alert(click);
        e.stopPropagation();
      }}
    >
      Propagation
    </button>
  );
}

function PropagationPassing({ click }) {
  return (
    <button
      onClick={(e) => {
        click();
        e.stopPropagation();
      }}
    >
      PropagationPass
    </button>
  );
}

function PreventDefault() {
  return (
    <form
      style={{ display: "inline" }}
      onSubmit={(e) => {
        alert("Submitting!");
        e.preventDefault();
        // preventing from default behaviour
      }}
    >
      <input />
      <button>Send</button>
    </form>
  );
}
