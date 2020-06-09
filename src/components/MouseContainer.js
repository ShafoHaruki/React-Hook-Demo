import React, { useState } from "react";
import HookMouse from "./HookMouse";

//USEEFFECT WITH CLEANUP
//THIS IS MIMICKING AN UNMOUNTING OF A COMPONENT

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>
        Toggle to display mouse coordinates
      </button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
