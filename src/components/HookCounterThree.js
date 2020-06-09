import React, { useState } from "react";

//A STATE VARIABLE CAN BE A STRING, NUMBER, BOOOLEAN, OBJECT, OR ARRAY
//USESTATE DOES NOT AUTOMATICALLY MERGE AND UPDATE THE OBJECT (MAIN DIFF COMPARED TO SETSTATE FROM CLASS COMPONENTS). ONE WAY TO SOLVE THIS IS TO USE THE SPREAD OPERATOR LIKE THE EXAMPLE BELOW.

function HookCounterThree() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div
      style={{
        borderStyle: "solid",
        borderRadius: "3px",
        backgroundColor: "#efee9d",
      }}
    >
      <form>
        <input
          placeholder="FIRST NAME"
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          placeholder="LAST NAME"
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is {name.firstName}</h2>
        <h2>Your last name is {name.lastName}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
