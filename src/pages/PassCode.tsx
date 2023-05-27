import React, { useState } from "react";

const PassCode = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const pw = "1235";
  const [typingPw, setTypingPw] = useState<string>("");

  const handleClick = (num: number) => {
    const currentPw = typingPw + num;
    setTypingPw((curr) => curr + num);

    if (currentPw === pw) {
      console.log("match");
      console.log("typingPw", typingPw);
      console.log("currentPw", currentPw);
    }
  };

  return (
    <div>
      <h1>Passcode</h1>
      <div>Your typing pw is: {typingPw}</div>
      <div className="phone">
        {nums.map((num, index) => {
          return (
            <button
              key={index}
              className="number"
              onClick={() => handleClick(num)}
            >
              {num}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PassCode;
