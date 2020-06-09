import React from "react";
import ClassCounter from "./components/ClassCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
    </div>
  );
}

export default App;
