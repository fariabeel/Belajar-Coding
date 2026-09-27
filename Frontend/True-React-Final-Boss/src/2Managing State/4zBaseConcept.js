import { useReducer } from "react"

export function BaseConcept () {
  const [value, dispatch] = useReducer(handleReducer,"anjass")
  function trigger() {dispatch()}
  return <>
  <p onClick={trigger}>{value}</p>
  </>
}

function handleReducer(value) {
  return "changed"
}

export function Action () {
  const [value, dispatch] = useReducer(handleAction,"anjass")
  function trigger() {dispatch({content: "actionChanging"})}
  return <>
  <p onClick={trigger}>{value}</p>
  </>
}

function handleAction(value, action) {
  return action.content
}

export function FullConcept() {
    const [value, dispatch] = useReducer(handleFull, "anjass")
    function trigger() {dispatch({
        type: "change"
    })}
    return <>
    <p onClick={trigger}>{value}</p>
    </>
}

function handleFull(value, action) {
    switch(action.type) { // standard method
        case "change":
            return "SwitchChange"
        default:
            return value
    }
}

export function HandleInput() {
  const [value, dispatch] = useReducer(handleInput, "gaxorr")
  function handleChange(e) {dispatch({type:"input",el: e})}
  return <>
  <input value={value} onChange={handleChange}/>
  </>
}

function handleInput(value, action) {
  switch(action.type) {
    case "input":
      return action.el.target.value
    default:
      return value
  }
}

import { useImmerReducer } from "use-immer"

export function ImmerReducer() {
    const [value, dispatch] = useImmerReducer(handleImmerReducer, ["real","wow"])
    function handleChange(e) {dispatch({value: e.target.value})} // more good than just e
    return <>
    <input value={value[0]} onChange={handleChange}/>
    <p>{value[0]}</p>
    </>
}

function handleImmerReducer(value, action) {
    value[0] = action.value
}