import { useReducer } from "react";

const initialValue = "real";
export default function App() {
  return (
    <>
      <UseImmerReducerApp />
    </>
  );
}

function ReducerApp() {
  const [theValue, dispatch] = useReducer(changeReducer, initialValue);
  function handleChange(e) {
    dispatch({
      type: "changing",
      element: e,
    }); 
  }
  return (
    <>
      <InputField theValue={theValue} handleChange={handleChange} />
    </>
  );
}

function InputField({ theValue, handleChange }) {
  return (
    <>
      <input value={theValue} onChange={handleChange} />
      <p>{theValue}</p>
    </>
  );
}

function changeReducer(value, action) {
  switch (action.type) {
    case "changing":
      return action.element.target.value;
    default:
      return value;
  }
}

const initialArray = ["12", "12"];
import { useImmerReducer } from "use-immer";

function UseImmerReducerApp() {
  const [theValue, dispatch] = useImmerReducer(
    changeImmerReducer,
    initialArray
  );
  function changeHandler(e) {
    dispatch({
      type: 1,
      value: e,
    });
  }

  return (
    <>
      <ImmerInputField theValue={theValue[0]} changeHandler={changeHandler} />
    </>
  );
}

function ImmerInputField({ theValue, changeHandler }) {
  return (
    <>
      <input value={theValue} onChange={changeHandler} />
      <p>{theValue}</p>
    </>
  );
}

function changeImmerReducer(string, action) {
  switch (action.type) {
    case 1:
      string[0] = action.value.target.value;
    default:
      break;
  }
}
