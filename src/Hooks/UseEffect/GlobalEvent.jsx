import React,{useState, useEffect} from 'react'

const GlobalEvent = () => {
    const[position, setPosition] = useState({x:0, y:0});
    useEffect(()=>{
        //setup code
        function handleMove(e){
            setPosition({x:e.clientX, y:e.clientY});
        }
        window.addEventListener('pointermove', handleMove);
        //cleanup code
        return()=>{
            window.removeEventListener('pointermove', handleMove)
        }
    }, [])
  return (
    <>
    <div style={{
        position:"absolute",
        backgroundColor:"pink",
        borderRadius:"50%",
        opacity:0.6,
        transform:`translate(${position.x}px, ${position.y}px)`,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
    }}>

    </div>
    </>
  )
}

export default GlobalEvent

/**In this example, the external system is the browser DOM itself.
 * Normally, you’d specify event listeners with JSX,
 *  ut you can’t listen to the global window object this way.
 *  An Effect lets you connect to the window object and listen to its events.
 *  Listening to the pointermove event lets you track the cursor (or finger) position 
 * and update the red dot to move with it. 
 * */