import React, { useReducer} from 'react'

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement'
}
function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT: 
           return {count: state.count + 1};
        case ACTIONS.DECREMENT: 
          return {count: state.count - 1};

          default: 
          return state;
    }
}

const CounterApp = () => {
    const[state, dispatch]= useReducer(reducer, {count: 0})
    function handleIncrement(){
        dispatch({type:ACTIONS.INCREMENT});
    }

    function handleDecrement(){
        dispatch({type:ACTIONS.DECREMENT})
    }
  return (
    <>
    <button onClick={handleIncrement}>+</button>
    <span>{state.count}</span>
    <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default CounterApp