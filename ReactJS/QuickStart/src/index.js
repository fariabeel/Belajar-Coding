import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import QuickStart from "./QuickStart0";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <QuickStart />
  </StrictMode>
);
