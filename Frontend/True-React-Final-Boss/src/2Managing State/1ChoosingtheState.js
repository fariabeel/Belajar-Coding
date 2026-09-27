import { useState } from "react";

export default function App() {
  return (
    // group related state
    // avoid contradictions?
    <>
      <AvoidDuplication />
    </>
  );
}

function AvoidRedundant() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  // const [ab, setAb] = useState("") X
  const ab = `${a} ${b}`; // O

  function handleAChange(e) {
    setA(e.target.value);
  }
  function handleBChange(e) {
    setB(e.target.value);
  }

  return (
    <>
      <input value={a} onChange={handleAChange} /> <br />
      <input value={b} onChange={handleBChange} /> <br />
      {ab}
    </>
  );
}

function AvoidDuplication() {
  const [items, setItems] = useState([
    { food: "hmm, hamburger", id: 0 },
    { food: "apple", id: 1 },
    { food: "pizza!!", id: 2 },
  ]);

  const [selectedId, setSelectedId] = useState(0);
  //   const [selectedItem, setSelectedItem] = useState(items[0]) X
  const selectedItem = items.find((item) => item.id === selectedId); // O 
  // 

  function handleOnChange(e, id) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, food: e.target.value };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <>
      {items.map((item) => (
        <list style={{ display: "block" }}>
          <input
            value={item.food}
            onChange={(e) => {
              handleOnChange(e, item.id);
            }}
          />{" "}
          <button
            onClick={() => {
              setSelectedId(item.id);
            }}
          >
            pick
          </button>
        </list>
      ))}
      <p>you pick {items[selectedId].food}</p>
      <p>you pick {selectedItem.food}</p>
    </>
  );
}

const initialList = {
    root: {upperParent: [1,2]},
    1: { list: "1", child: ["a"] },
    a: { subList: ["a1","a2","a3"] },
    "a1": { no: "a1" },
    "a2": { no: "a2" },
    "a3": { no: "a3" },
    2: { list: "2", child: ["b", "c", "d"] },
    "b": { no: "b" },
    "c": { no: "c" },
    "d": { no: "d" },}

// a = {1: "wow", b: "rill", "1": "king"}
// console.log(a.b)
// console.log(a[1])
// console.log(a["1"])

function AvoidDeeplyNested() {
  const [list, setList] = useState({
    root: {upperParent: [1,2]},
    1: { list: "1", child: ["a"] },
    a: { subList: ["a1","a2","a3"] },
    "a1": { no: "a1" },
    "a2": { no: "a2" },
    "a3": { no: "a3" },
    2: { list: "2", child: ["b", "c", "d"] },
    "b": { no: "b" },
    "c": { no: "c" },
    "d": { no: "d" },
  });

  
  return (
    <>
      d
    </>
  );
}
