import { Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const matchData = ["ac", "am", "al", "bc", "de", "l", "m", "abc"];
const BreakingBad = () => {
  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  function handleMatch(text: string) {
    let firstText = "";
    let secondText = "";
    for (let i = 0; i < matchData.length; i++) {
      const currentEl = matchData[i];
      if (text.slice(0, currentEl.length) === currentEl) {
        firstText = currentEl;
        secondText = text.slice(currentEl.length);
        break;
      } else {
        secondText = text;
        break;
      }
    }

    return (
      <Flex>
        <Text color="red">{firstText}</Text>
        <Text>{secondText}</Text>
      </Flex>
    );
  }

  return (
    <div>
      <h1>Breaking Bad</h1>
      <>{handleMatch(value.firstName)}</>
      <>{handleMatch(value.lastName)}</>
      <div>
        <form action="">
          <input
            type="text"
            name="firstName"
            onChange={handleInputChange}
            value={value.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={handleInputChange}
            value={value.lastName}
          />
        </form>
      </div>
    </div>
  );
};

export default BreakingBad;
