import { CountHook } from "../Custom/CountHook";

const HookPerformance: React.FC = () => {
    const { count, incrementCount, decrementCount, resetCount } = CountHook();
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
};

export default HookPerformance;