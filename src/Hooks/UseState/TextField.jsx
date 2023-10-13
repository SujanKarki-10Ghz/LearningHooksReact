import React, {useState} from 'react'

/**In this example, the text state variable holds a string.
 * When you type, handleChange reads the latest input value from the browser input DOM element,
 *  and calls setText to update the state.
 *  
 */

const TextField = () => {
    const [input, setInput] = useState ("hello");
    const handleChange = (e)=>{
        setInput(e.target.value);
    }
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <h3 style={{fontWeight:"normal"}}>You've typed <span style={{fontWeight:"bold"}}> {input}</span></h3>
      <button onClick={()=>setInput('hello')}>Reset</button>
    </>
  )
}

export default TextField