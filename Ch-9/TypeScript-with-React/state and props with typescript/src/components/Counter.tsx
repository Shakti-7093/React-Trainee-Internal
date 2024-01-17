import React, { useState } from "react";

type CounterProps = {
  initialValue: number;
};
interface CounterState {
  count: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue }) => {
  const [state, setState] = useState<CounterState>({
    count: initialValue,
  });
  const increment = () => {
    setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  const decrement = () => {
    setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
