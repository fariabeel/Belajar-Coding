import {useState} from "react"
import {useImmer} from "use-immer"

export default function () {
  const [arr, setArr] = useImmer([1,2])
  const [test, setTest] = useState([2,2])
  function Change() {
    setArr(draft => {
      draft[0] = draft[0]+1
    })
  }
  function Test() {
    // e means array then means integer
    setTest(e => Array.isArray(e) ? e.join(" ") : Number.isInteger(e) ? e*2 : 1)
  }
  return (
    <>
    <button onClick={Test}>click</button> <br/>
    <button onClick={Change}>click</button> <br/>
    {test} <br/>
    {arr.join(" ")} 
    </>
  );
}