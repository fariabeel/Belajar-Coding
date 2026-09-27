import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Learn from './Learn/7DetectingClasses.jsx'
import ReLearn from "./reLearn.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReLearn />
  </StrictMode>,
)
