import React, { useState, useEffect } from "react";

//USAGE OF CORRECT VALUE (PREVSTATE) TO UPDATE THE STATE, INSTEAD OF DIRECTLY MANIPULATING THE CURRENT STATE
//THE EFFECT HOOK LETS YOU PERFORM SIDE EFFECTS IN FUNCTIONAL COMPONENTS
//IT IS A CLOSE REPLACEMENT FOR COMPONENTDIDMOUNT, COMPONENTDIDUPDATE, COMPONENTWILLUNMOUNT

//USEEFFECT RUNS AFTER EVERY RENDER, OR WE CAN ALSO CONDITIONALLY RUN IT

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("useEffect: Updating document title...");
    document.title = `You clicked ${count} times.`;
  }, [count]);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div
      style={{
        borderStyle: "solid",
        borderRadius: "3px",
        backgroundColor: "#fde2e2",
      }}
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
