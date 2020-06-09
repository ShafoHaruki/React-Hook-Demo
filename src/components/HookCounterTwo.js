import React, { useState } from "react";

//USAGE OF CORRECT VALUE (PREVSTATE) TO UPDATE THE STATE, INSTEAD OF DIRECTLY MANIPULATING THE CURRENT STATE

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div style={{ backgroundColor: "#FBC687" }}>
      ClassCounterTwo Count is: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={incrementFive}>Increment Five</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default HookCounterTwo;
