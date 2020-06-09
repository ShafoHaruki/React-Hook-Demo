import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ backgroundColor: "#D1EAA3" }}>
      <button onClick={() => setCount(count + 1)}>
        HookCounter Count is {count} (Click to increment)
      </button>
    </div>
  );
};

export default HookCounter;
