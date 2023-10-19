import React,{useState, useRef} from 'react';

/**Introduction
 * useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * const ref = useRef(initialValue)
 */

/**Parameters
 * initialValue: The value you want the ref object’s current property to be initially.
 * It can be a value of any type.
 * This argument is ignored after the initial render.
 */

/**Returns: useRef returns an object with a single property:
 * current: Initially, it’s set to the initialValue you have passed. You can later set it to something else.
 * if you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
 * On the next renders, useRef will return the same object.
 */

const StopWatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart =()=>{
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setNow(Date.now());
        },10);
    }

    const handleStop = ()=>{
        clearInterval(intervalRef.current);
    }

    let secondPassed = 0;
    if(startTime!=null && now!=null){
        secondPassed = (now - startTime) / 1000;
    }
  return (
    <>
      <h1>Time passed:{secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default StopWatch

/**This example uses a combination of state and refs.
 * Both startTime and now are state variables because they are used for rendering.
 * But we also need to hold an interval ID so that we can stop the interval on button press.
 *  Since the interval ID is not used for rendering, it’s appropriate to keep it in a ref, and manually update it.
 */