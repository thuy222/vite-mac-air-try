import React, { useState } from "react";

const RadioButton = () => {
  const [sport, setSport] = useState("");
  const [time, setTime] = useState("");

  const options = ["cricket", "football", "hockey"];
  const days = ["weekday", "weekend"];
  return (
    <div>
      <h1>Radio Button</h1>

      <div>
        {options.map((option, id) => {
          return (
            <div>
              <label htmlFor="">{option}</label>
              <input
                name="option"
                type="radio"
                value={option}
                aria-label={option}
                onChange={(e) => setSport(e.target.value)}
              />
            </div>
          );
        })}
        ------------------------
        {days.map((day, id) => {
          return (
            <div>
              <label htmlFor="">{day}</label>
              <input
                name="day"
                type="radio"
                value={day}
                aria-label={day}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          );
        })}
      </div>

      <div>
        The sport is {sport} and time plays is {time}
      </div>
    </div>
  );
};

export default RadioButton;

//Make radio button to chose 1 game and 1 type of the day
