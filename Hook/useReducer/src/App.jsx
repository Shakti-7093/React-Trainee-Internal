import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  console.log(state, action);
  if(action.type === "INCREMENT"){
    return state + 1;
  }else if(action.type === "DECREMENT"){
    return state - 1;
  }else if(action.type === "RESET"){
    state = 0;
    return state
  }
  return state;
}

function App(){

  const [state, despatch] = useReducer(reducer, initialState)
  return (
    <>
      <h1>{state}</h1>
      <div className="btns">
        <button className="btn" onClick={() => despatch({type: "INCREMENT"})}>Inc</button>
        <button className="btn" onClick={() => despatch({type: "DECREMENT"})}>Dec</button>
        <button className="btn" onClick={() => despatch({type: "RESET"})}>Reset</button>
      </div>
    </>
  )
}

export default App;
