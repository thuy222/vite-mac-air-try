import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SelectOption from "./pages/SelectOption";
import Register from "./pages/Register";
import TodoReducer from "./pages/TodoReducer";

function App() {
  return (
    <div className="App">
      <TodoReducer />
    </div>
  );
}

export default App;
