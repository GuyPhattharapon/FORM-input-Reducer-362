import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import FormComponent from "./FormComponent";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <FormComponent />
  </StrictMode>
);
