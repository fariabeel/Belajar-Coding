import {useState} from "react"

export default function () {
  const [obj, setObj] = useState([{a:1,elem: <div>anjass</div>},{a:2, elem: <div>wow</div>},{a:3, elem: <section>real</section>}])
  const [id,setId] = useState(1)
  const selecting = obj.find(item => item.a === id)
  return (
    <div style={{textAlign:"center",width: 59}}>
    {selecting.elem}
    <button onClick={() => {setId(e => e<=1?3:e-1)}}>&larr;</button>
    <button onClick={() => {setId(e => e>=3?1:e+1)}}>&rarr;</button>
    </div>
  );
}