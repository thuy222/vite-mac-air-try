import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectOption from "./pages/SelectOption";
import Register from "./pages/Register";
import TodoReducer from "./pages/TodoReducer";
import UseStateHook from "./pages/hooks/UseStateHook";

function App() {
  return (
    <div className="App">
      <UseStateHook />
    </div>
  );
}

export default App;
