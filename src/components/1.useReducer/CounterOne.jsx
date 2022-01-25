import React, { useReducer } from 'react';


const initialState = 0;
const reducer = (state, action) =>{
   switch(action){
      case 'increment':
          return state + 1
          case 'decrement':
              return state - 1
              case 'reset':
                  return initialState

                  default:
                       return state
}
}

//dispatch function -- dispatch the apropriate action based on the user button is clicked
function CounterOne() {
   const [count, dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h4>Count - {count}</h4>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <button onClick={()=>dispatch('reset')}>Rest</button>
    </div>
  );
}

export default CounterOne;
