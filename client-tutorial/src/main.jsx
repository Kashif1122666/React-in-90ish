import React from "react";
import { createRoot } from "react-dom/client";

// ⏸️ WORKSHOP STEP 1: Set Up Routing
// TODO: Import BrowserRouter from 'react-router-dom'

// ⏸️ WORKSHOP STEP 5: Add Context
// TODO: Import ThemeProvider from './context/ThemeContext.jsx'

import App from "./App.jsx";
import "./index.css";
import ConditonaionalRendering from "./practice/conditionalRendering.jsx";
import Todo from "./practice/Todo.jsx";
import FormPractice from "./practice/FormPractice.jsx";
import UseEffectPractice from "./practice/UseEffectPractice.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ⏸️ WORKSHOP STEP 5: Wrap in ThemeProvider */}
    {/* ⏸️ WORKSHOP STEP 1: Wrap in BrowserRouter */}
    {/* <App />  */}
    {/* <ConditonaionalRendering /> */}
    {/* <Todo/> */}
    {/* <FormPractice/> */}
    <UseEffectPractice/>  
  </React.StrictMode>
);
