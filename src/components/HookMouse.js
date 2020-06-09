import React, { useState, useEffect } from "react";

//LOGS THE MOUSE POSITION
//USEEFFECT WILL ONLY RUN ONCE, IT MIMICS COMPONENTDIDMOUNT
//IF THE SECOND PARAMETER IIS AN EMPTY ARRAY, WE ARE TELLING REACT THAT THE EFFECT DOES NOT DEPENDS ON A PROP OR STATE
//SO THERE IS NO REASON TO CALL THE EFFECT ON A RE RENDER

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      console.log("Component unmounting...");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#7d5a5a" }}>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouse;
