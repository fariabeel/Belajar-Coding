import { useState } from "react";

export default function QuickStart() {
  let [count, setCount] = useState(0);

  function StateCount0() {
    setCount(count + 1);
  }

  function Counting() {
    return <button onClick={StateCount0}>Clicked {count} time</button>;
  }

  return (
    <>
      <h1 className="test" style={{ color: a.color }}>
        p
      </h1>
      <h1 style={{ color: "aqua" }}>test color</h1>
      <MyButton />
      <h1>{a.name}</h1>
      <img src={a.link} alt={a.name} width={a.imgSize} />
      {b}
      {true && <h1>if no need else</h1>}
      <ul>{items}</ul>
      <button onClick={Suffer}>Suffer</button>
      <br />
      <ButtonState />
      <ButtonState />
      <br />
      <Counting />
      <Counting />
      <br /> {/* or use this */}
      <Counting0 count={count} onClick={StateCount0} />
      <Counting0 count={count} onClick={StateCount0} />
      {/*Counting0 reference in code section*/}
    </>
  );
}
//coding section

function MyButton() {
  return <button>I'm a button</button>;
  //or unparenthesis it
}

let a = {
  name: "Guts",
  link: "https://c4.wallpaperflare.com/wallpaper/656/150/342/berserk-kentaro-miura-guts-manga-wallpaper-preview.jpg",
  imgSize: 350,
  color: "blue",
};

let b = false;
if (b) {
  b = <h1> from b variable </h1>;
} else {
  b = <h1> from b with false value variable </h1>;
} // you can use itenary operator

let c = [
  { item: "sword", id: 1 },
  { item: "one arm", id: 2 },
  { item: "supernatural", id: 3 },
];

let items = c.map((tools) => <li key={tools.id}>{tools.item}</li>);

function Suffer() {
  alert("griffithhh!!");
}

function ButtonState() {
  let [count, setCount] = useState(0);

  function StateCount() {
    setCount(count + 1);
  }

  return <button onClick={StateCount}>Clicked {count} time</button>;
}

function Counting0({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
