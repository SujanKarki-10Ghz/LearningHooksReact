import React, { useState } from 'react'
import Button from '../../components/Button'

/**useState is a React Hook that lets you add a state variable to your component
 * useState can only call at the top level of component or own Hooks. 
 * useState cannot be called inside loops or conditions.
 * In Strict Mode, React will call your initializer function twice in order to find accidential impurities.
 */

/**Syntax */
//const [state, setState] = useState(initialState);

/**Parameters */
// initialState: The value you want the state to be initially.
// It can be a value of any type, but there is a special behavior for functions. 
//This argument is ignored after the initial render.


/**Returns 
 * useState returns an array with exactly two values:
 * The current state. During the first render, it will match the initialState you have passed.
 * The set function that lets you update the state to a different value and trigger a re-render.
*/
/**Usage
 * In this example, the count state variable holds a number. Clicking the button increments it.
 */

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleClick = ()=>{
      setCount(count + 1);
    }
  return (
    <>
        <Button count={count} handleClick={handleClick}/>
    </>
  )
}

export default Counter;