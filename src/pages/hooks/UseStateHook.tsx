import React from "react";

interface TUseState {
  initialValue: any;
}

const UseStateHook = () => {
  const [value, setValue] = useState(0);

  const months = ["Jan", "March", "April", "June"];
  months.splice(1, 0, "Feb");
  console.log(
    "🚀 ~ file: UseStateHook.tsx:12 ~ UseStateHook ~ months:",
    months
  );

  return (
    <div>
      <h1>UseStateHook</h1>
      <button onClick={() => setValue(2)}>Set New Value</button>
      <input type="text" />
    </div>
  );
};

export default UseStateHook;

function useState(initialValue: any) {
  let value = initialValue;

  function setValue(newValue: any) {
    if (typeof newValue !== typeof initialValue) {
      throw new Error("Wrong type");
    }

    value = newValue;
    return value;
  }

  return [value, setValue];
}
