import Root from "./Learn/7DetectingClasses";

export default function App() {
  return <>
  <div class="{{ error ? 'text-red-600' : text-green-600 }}">class</div>
  <p class="{{ error ? 'text-red-300': text-fuchsia-900 }}">real</p>
  </>
}