import React, { createContext, useReducer } from 'react'
import './App.css';
import CounterOne from './components/1.useReducer/CounterOne';
import CounterThree from './components/1.useReducer/CounterThree';
import CounterTwo from './components/1.useReducer/CounterTwo';
import ComponentA from './components/reducerWithContext/ComponentA';
import ComponentB from './components/reducerWithContext/ComponentB';
import ComponentC from './components/reducerWithContext/ComponentC';


// -------reducerWithContext------
export const CountContext = createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
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
// ---------------------
function App() {
  //---reducerWithContext---//
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">

      {/* ---------useReducer-------- */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* ----------------------- */}

      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
      count -- {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />

      </CountContext.Provider>

     

    </div>
  );
}

export default App;
