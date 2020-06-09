import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      {/* <HookMouse /> */}
      <MouseContainer />
      <DataFetching />
    </div>
  );
}

export default App;
