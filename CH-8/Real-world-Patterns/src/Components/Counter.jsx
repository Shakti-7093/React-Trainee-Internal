import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux-Store/Slice/CounterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  const counter  = useSelector(state => state.counter.value)
  return (
    <div className='w-96 mx-auto bg-slate-200 text-center my-44 p-4 rounded-md'>
      <h1 className='text-2xl'>Counter</h1>
      <button onClick={() => dispatch(increment())} className='bg-slate-500 p-1 rounded-lg px-2 text-white'>Increment</button>
      <h3 className='my-3'>{counter}</h3>
      <button onClick={() => dispatch(decrement())} className='bg-slate-500 p-1 rounded-lg px-2 text-white ms-2'>Decrement</button>
      <button onClick={() => dispatch(reset())} className='bg-slate-500 p-1 rounded-lg px-2 text-white ms-2'>Reset</button>
    </div>
  )
}

export default Counter;
