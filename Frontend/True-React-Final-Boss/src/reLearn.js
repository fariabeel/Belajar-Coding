import Root from "./2Managing State/PPassingDataDeeply/Simplify"
import {HandleInput as Fundamental} from "./2Managing State/3PreserrvingandResetting"
import Sub from "./subReLearn"
import Custom from "./customComponent"
import "./ReLearn.css"

import { createContext } from "react"
import { useContext } from "react"
const AhContext = createContext(1)

function Wow({level, children}) {
  return <section><AhContext value={level}>{children}</AhContext></section>
}

function Child() {
  const level = useContext(AhContext)
  switch(level) {
    case "kelazz kink!":
      return <h1>anjasss</h1>
  }
}

export default function() {
  return <>
  <Wow level={"kelazz kink!"}>
    <Child/>
  </Wow>
  </>
}

/* http://localhost:3000
2Managing State/1ChoosingtheState > AvoidDuplication > SelectedItem
2Managing State/1ChoosingtheState > AvoidDeeplyNested
2Managing State/2SharingState

3Escape Hatches/2-+5 on react.dev
*/