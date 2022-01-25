import React, { useReducer } from 'react';


const initialState = 0;
const reducer = (state, action) =>{
   switch(action.type){
      case 'increment':
          return state + action.value
          case 'decrement':
              return state - action.value
              case 'reset':
                  return initialState

                  default:
                       return state
}
}

//dispatch function -- dispatch the apropriate action based on the user button is clicked
function CounterThree() {
   const [count, dispatch] = useReducer(reducer,initialState)
   const [countTwo, dispatchTwo] = useReducer(reducer,initialState)
  return (
   <>
    <div>
        <h4>Count - {count}</h4>
        <button onClick={()=>dispatch({type:'increment',value:1})}>Increment</button>
        <button onClick={()=>dispatch({type:'decrement',value:1})}>Decrement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Rest</button>
    </div>

<div>
<h4>CountTwo - {countTwo}</h4>
<button onClick={()=>dispatchTwo({type:'increment',value:5})}>Increment</button>
<button onClick={()=>dispatchTwo({type:'decrement',value:5})}>Decrement</button>
<button onClick={()=>dispatchTwo({type:'reset'})}>Rest</button>
</div></>
  );
}

export default CounterThree