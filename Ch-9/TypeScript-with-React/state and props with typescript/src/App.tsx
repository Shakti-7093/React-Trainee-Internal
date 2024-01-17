import React from "react";
import Counter from "./components/Counter";

const App: React.FC = () => {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter initialValue={0} />
    </div>
  );
};

export default App;
