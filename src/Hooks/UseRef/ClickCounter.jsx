import React,{useRef} from 'react'

const ClickCounter = () => {
    let ref = useRef(1);
    const handleClick = ()=>{
        ref.current = ref.current + 1;
        alert('You clicked ' + ref.current + ' times!');
    }
  return (
    <>
        <button onClick={handleClick}>Click Me!</button>
    </>
  )
}

export default ClickCounter;