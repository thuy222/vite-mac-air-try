import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectOption from "./pages/SelectOption";
import Register from "./pages/Register";
import TodoReducer from "./pages/TodoReducer";
import UseStateHook from "./pages/hooks/UseStateHook";
import RadioButton from "./pages/RadioButton";

function App() {
  return (
    <div className="App">
      <RadioButton />
    </div>
  );
}

export default App;
