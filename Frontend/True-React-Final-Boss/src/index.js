import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import { Test } from "./0Describing the UI/App0";
import { Cursor } from "./1Adding Interactivity/4UpdatingObjects";
import DescribingTheUI from "./0Describing the UI/App0";
import AddingInteractivity from "./1Adding Interactivity/2StateasSnapshot";
import ManagingState from "./2Managing State/PPassingDataDeeply/App";
import EscapeHatches from "./3Escape Hatches/2SynchronizingwithEffect";
import ReLearn from "./reLearn";
// you had import App0 components twice

let a = "Professional";
let b = [0, 0, 0];
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ReLearn />
  </StrictMode>
);
