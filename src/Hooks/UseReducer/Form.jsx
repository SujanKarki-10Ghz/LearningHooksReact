import React, {useReducer} from 'react';

const ACTIONS ={
    INCREMENT: 'increment_age',
    CHANGE_NAME: 'change_name'
}
function reducer(state, action){
    switch(action.type){
        case ACTIONS.INCREMENT: 
        return {name: state.name, age:state.age + 1}

        case ACTIONS.CHANGE_NAME:
            return {name: action.nextName, age: state.age}
        default:
            throw Error('unknown action:'+ action.type)
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, {name: '', age: 42}); 
    function handleClick(){
        dispatch({type:ACTIONS.INCREMENT});
    }
    function handleInputChange(e){
        e.preventDefault();
        dispatch({type:ACTIONS.CHANGE_NAME, nextName:e.target.value})
    }
  return (
    <>
    <input type="text" value={state.name} onChange={handleInputChange}/>
    <button onClick={handleClick}>Increment age</button>
    <p>Hello, {state.name}. You are {state.age}</p>
    </>
  );
}

export default Form