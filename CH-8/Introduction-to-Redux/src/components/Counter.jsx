import { useDispatch, useSelector } from 'react-redux'
import { decrementCount, incrementCount, resetCount } from '../Store-Redux/Slice/CounterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    if(count === 20){
      alert("If count incr. then 20, then it will reset to 0");
    }
    if(count>20){
        dispatch(resetCount())
    }
  return (
    <div>
      <div>
        <button onClick={() => dispatch(incrementCount())}>Incr.</button><br />
        <h3>Count : {count}</h3><br />
        <button onClick={() => dispatch(decrementCount())}>Decr.</button><br />
        <button onClick={() => dispatch(resetCount())}>Reset</button><br />
      </div>
    </div>
  )
}

export default Counter
