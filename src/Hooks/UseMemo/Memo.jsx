import React,{useEffect, useMemo, useState} from 'react'
/**Intro
 * useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
 * const cachedValue = useMemo(calculateValue, dependencies)
 */

/**Parameters
 * calculatedValue: The function calculating the value that you want to cache.
 *  It should be pure, should take no arguments, and should return a value of any type.
 * React will call your function during the initial render.
 * On next renders, React will return the same value again if the dependencies have not changed since the last render.
 *  Otherwise, it will call calculateValue, return its result, and store it so it can be reused later.
 */

/**Returns
 * On the initial render, useMemo returns the result of calling calculateValue with no arguments.
 * During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed),
 * or call calculateValue again, and return the result that calculateValue has returned.
 */
const Memo = () => {
    const[number, setNumber] = useState(0);
    const[dark, setDark] = useState(false);

    const doubleNumber = useMemo(()=>{
        return slowFunction(number)
    },[number])

    const themeStyles = useMemo(()=>{
       return {
            backgroundColor: dark? "black" : "white",
            color: dark? "white" : "black"
        }
    },[dark])

    useEffect(()=>{
        console.log("theme changed");
    },[themeStyles])
  return (
    <>
     <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
     <button onClick={()=>setDark(prevDark=> !prevDark)}>Change Theme</button>
     <div style={themeStyles}>{doubleNumber}</div>   
    </>
  )
}

function slowFunction(num){
    console.log('calling slow function');
    for(let i=0; i<=10000000; i++){}
    return num * 2;
}

export default Memo