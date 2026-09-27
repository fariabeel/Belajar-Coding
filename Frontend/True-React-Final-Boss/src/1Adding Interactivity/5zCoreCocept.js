import { useState } from "react"

// so hard
const initialNum = [{val: 0}]
export function Shared() {
  const [num, setNum] = useState(initialNum) // same variable
  const [otherNum, setOtherNum] = useState(initialNum) // same variable

  function change() { // Main Concept
    const numbre = [...num]
    const newNum = numbre[0]
    newNum.val = 5
    setNum(numbre)
  }

  function otherChange() { // Main Concept
    const numbre = [...otherNum]
    const newNum = numbre[0]
    newNum.val = 10
    setOtherNum(numbre)
  }

  return (
    <>
    <Elem content={num} func={change}/>
    <Elem content={otherNum} func={otherChange}/>
    </>
  );
}

function Elem({content, func}) {
  return content.map(e => <>
  {e.val} <button onClick={func}>click</button> <br/>
  </>)
}

export function NotShared() {
  const [num, setNum] = useState(initialNum)
  const [otherNum, setOtherNum] = useState(initialNum)

  function change() { // Main Concept
    setNum(num.map(e => ({val: 10})))
  }

  function otherChange() { // Main Concept
    setOtherNum(otherNum.map(e => ({val: 5})))
  }

  return (
    <>
    <Elem content={num} func={change}/> {/* previous Elem */}
    <Elem content={otherNum} func={otherChange}/> {/* previous Elem */}
    </>
  );
}

import { useImmer } from "use-immer"
export function UsingImmer() {
  const [num, setNum] = useImmer(initialNum)
  const [otherNum, setOtherNum] = useImmer(initialNum)

  function change() { // Main Concept
    setNum(draft => {
      draft.forEach(e => {
        e.val = 10
      })
    })
  }

  function otherChange() { // Main Concept
    setOtherNum(draft => {
      draft.forEach(e => {
        e.val = 5
      })
    })
  }

  return (
    <>
    <Elem content={num} func={change}/>
    <Elem content={otherNum} func={otherChange}/>
    </>
  );
}