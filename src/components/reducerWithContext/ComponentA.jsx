import React, { useContext } from "react";
import { CountContext } from "../../App";

function ComponentA() {
  const counterContext = useContext(CountContext);

  return (
    <div>
      <h1>Component A --  {counterContext.countState}</h1>
       
        <button onClick={()=>counterContext.countDispatch('increment')}>Increment</button>
        <button onClick={()=>counterContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={()=>counterContext.countDispatch('reset')}>Rest</button>
   
    </div>
  );
}

export default ComponentA;
