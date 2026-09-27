import { useState } from "react";
let nextId = 0;
export default function App() {
  return (
    <>
      <Counters/>
    </>
  );
}

function ManagingArrays() {
  let [arrays, setArrays] = useState([]);
  let [poem, setPoem] = useState("d");
  return (
    <>
      <input
        value={poem}
        onChange={(e) => {
          setPoem(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setArrays([...arrays, { poem: poem, id: nextId++ }]);
        }}
      >
        add
      </button>
      <ul>
        {arrays.map((e) => (
          <li key={e.id}>
            {e.poem} &nbsp; {`${e.id}`}{" "}
            <button
              onClick={() => setArrays(arrays.filter((a) => a.id !== e.id))}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

const initialShapes = [
  { type: "A", x: 0, y: 0 },
  { type: "B", x: 0, y: 0 },
  { type: "A", x: 0, y: 0 },
];

function Transform() {
  const [shapes, setShapes] = useState(initialShapes);
  function ClickHandler() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "B") {
        return shape;
      } else {
        return { ...shape, y: shape.y + 50 };
      }
    });
    setShapes(nextShapes);
  }
  return (
    <>
      <button onClick={ClickHandler}>move</button> <br />
      {shapes.map((e) => (
        <div
          style={{
            backgroundColor: "red",
            width: 20,
            height: 20,
            position: "relative",
            top: e.y,
            left: e.x,
            borderRadius: e.type === "B" ? "50%" : "none",
            display: "inline-block",
          }}
        />
      ))}
    </>
  );
}

function Counters() {
  let [counters, setCounters] = useState([0, 0, 0]);

  function increment(index) {
    let next = counters.map((c, i) => {
      if (index === i) {
        return c + 1;
      } else {
        return c;
      }
    });
    setCounters(next);
  }
  return (
    <>
      {counters.map((c, i) => {
        return (
          <>
            <div>
              {c}|
              <button
                onClick={() => {
                  increment(i);
                }}
              >
                increase
              </button>
            </div>
          </>
        );
      })}
    </>
  );
}

let nextIds = 3;
function Inserting() {
  let [texts, setTexts] = useState("");
  let [displayText, setDisplayText] = useState([
    { id: 0, text: "index0" },
    { id: 1, text: "index1" },
    { id: 2, text: "index2" },
  ]);

  function textDisplayer() {
    const displayer = [
      ...displayText.slice(0, 1),
      { id: nextIds++, text: texts },
      ...displayText.slice(1),
    ];
    setDisplayText(displayer);
  }

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setTexts(e.target.value);
        }}
        value={texts}
      />
      <input type="submit" onClick={textDisplayer} />
      {displayText.map((e) => {
        return (
          <div>
            {e.text} {e.id}
          </div>
        );
      })}
    </>
  );
}

function Reverse() {
  let [text, setText] = useState([
    "pabowo",
    "hachimi",
    "mambo",
    "bakushinshiiiiinnn!!",
    "haru oraoraoraoraaaaa!!!",
  ]);

  function reverse() {
    let reversing = [...text].reverse();
    setText(reversing);
  }
  return (
    <ul>
      <button onClick={reverse}>reverse</button>
      {text.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}

import { useImmer } from "use-immer";
const initialList = [
  { seen: false, message: "areal", id: 0 },
  { seen: false, message: "babuska", id: 1 },
];

function List() {
  const [list, updateList] = useImmer(initialList);
  const [altList, updateAltList] = useImmer(initialList);
  function handleToggleList(id, nextSeen) {
    updateList((draft) => { // draft means array
      const message = draft.find((a) => a.id === id);
      message.seen = nextSeen;
    });
  }
  function handleToggleAltList(id, nextSeen) {
    updateAltList((draft) => {
      const message = draft.find((a) => a.id === id);
      message.seen = nextSeen;
    });
  }
  return (
    <>
      <h2>real</h2>
      <ItemList infos={list} toggle={handleToggleList} />
      <h2>real</h2>
      <ItemList infos={altList} toggle={handleToggleAltList} />
    </>
  );
}

function ItemList({ infos, toggle }) {
  return (
    <ul>
      {infos.map((info) => (
        <li key={info.id}>
          <label>
            <input
              type="checkbox"
              checked={info.seen}
              onChange={(e) => {
                toggle(info.id, e.target.checked);
              }}
            />
            {info.message}
          </label>
        </li>
      ))}
    </ul>
  );
}
