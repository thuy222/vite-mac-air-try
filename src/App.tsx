import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectOption from "./pages/SelectOption";
import Register from "./pages/Register";
import TodoReducer from "./pages/TodoReducer";
import UseStateHook from "./pages/hooks/UseStateHook";
import RadioButton from "./pages/RadioButton";
import FetchApi from "./pages/FetchApi";
import { MySelect } from "./pages/ReactSelect";
import BreakingBad from "./pages/BreakingBad";
import PassCode from "./pages/PassCode";

function App() {
  return (
    <div className="App">
      <PassCode />
    </div>
  );
}

export default App;
