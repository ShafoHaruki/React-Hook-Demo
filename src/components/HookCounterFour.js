import React, { useState } from "react";

//IN CLASSES THE STATE IS ALWAYS AN OBJECT, IN USESTATE HOOK, THE STATE DOESN'T HAVE TO
//WHEN DEALING WITH OBJECTS OR ARRAYS, ALWAYS MAKE SURE TO SPREAD YOUR STATE VARIABLE AND THEN CALL THE SETTER FUNCTION

const HookCounterFour = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div
      style={{
        borderStyle: "solid",
        borderRadius: "3px",
        backgroundColor: "#fab7b7",
      }}
    >
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFour;
