import { useState } from "react";

export default function App() {
  const [wow, setWow] = useState(0);
  function increment() {
    setWow(wow + 1);
    setWow(wow + 1); // no effect
    alert(wow);
  }
  function increment2() {
    setWow(wow + 2);
    alert(wow);
  }

  const [no, setNo] = useState("1");
  const [info, setInfo] = useState("no info");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert(`no       :     ${no} \n info    :     ${info}`);
    }, 2000);
  }

  return (
    <>
      <button onClick={increment}>{wow} | Click to increase</button> <br />
      <button
        onClick={() => {
          setWow(wow + 1);
          setTimeout(() => {
            alert(wow);
          }, 2000);
        }}
      >
        {wow} | alert delayed
      </button>
      <form onSubmit={handleSubmit}>
        <select value={no} onChange={(e) => setNo(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{" "}
        <br />
        <textarea
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        ></textarea>
        <br />
        you must set the value variable to const
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
