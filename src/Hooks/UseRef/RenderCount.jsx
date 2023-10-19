import React, {useState, useEffect, useRef} from 'react'
/**Refs are not only useful for accessing dom elements
 * but also useful for persisting value across render without causing a re-render
 */
const RenderCount = () => {
    const [name, setName]= useState('');
    const prevName = useRef('');

    useEffect(()=>{
        // renderRef.current = renderRef.current + 1;
        prevName.current = name;
    },[name])
  return (
    <>
        <input type='text' value={name} onChange={e=> setName(e.target.value)}/>
        <p>My name is {name} and it used to be {prevName.current}</p>
        {/* <p>I rendered { renderRef.current} times</p> */}
    </>

  )
}

export default RenderCount