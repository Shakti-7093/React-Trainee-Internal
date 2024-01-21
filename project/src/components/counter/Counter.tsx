import { useCounter } from "../../Custom-Hook/CounterHook/useCounter";
import "./Counter.css";

const Counter = () => {
    const { count, increment, decrement, reset } = useCounter();
    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2>{count}</h2>
            <div className="btn">
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;