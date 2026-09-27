import { useState } from "react";

export default function State() {
  function Screen() {
    const [index, setIndex] = useState(0);

    function next() {
      setIndex(index + 1);
    }

    function previous() {
      setIndex(index - 1);
    }

    let b = a[index];

    const [show, setShow] = useState(false);

    function showIt() {
      setShow(!show);
    }
    return (
      <>
        <button onClick={previous}>&larr;</button>
        <button onClick={next}>&rarr;</button> <br />
        <button onClick={showIt}>showIt!</button>
        <p>
          {(index > 1) | (index < 0) ? (
            <span>not set</span>
          ) : (
            <span>{b.paragraph}</span>
          )}{" "}
          {(show === true) & (index < 2) & (index > -1) ? b.no : null}
        </p>
      </>
    );
  }

  return (
    <>
      <Screen />
      copy again <br/><br/>
      <Screen />
    </>
  );
}

let a = [
  {
    paragraph: "uwu",
    no: "1",
  },
  {
    paragraph: "real",
    no: "2",
  },
];
