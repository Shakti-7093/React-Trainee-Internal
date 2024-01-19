import { useState } from "react";

export const CountHook = () => {
  const [count, setCount] = useState < number >(0);

  const incrementCount = (): void => {
    setCount((prevState) => prevState + 1);
  };

  const decrementCount = (): void => {
    setCount((prevState) => prevState - 1);
  };

  const resetCount = (): void => {
    setCount(0);
  };
  return { count, incrementCount, decrementCount, resetCount };
};
