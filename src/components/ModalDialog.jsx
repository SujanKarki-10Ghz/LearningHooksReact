import React, {useEffect, useRef} from 'react'

const ModalDialog = ({isOpen, children}) => {
    const ref= useRef();
    useEffect(()=>{
        if(!isOpen){
            return;
        }
        const dailog = ref.current;
        dailog.showModal();
        
        return ()=>{
            dailog.close();
        }
    },[isOpen])
  return (
    <>
    <dialog ref={ref}>{children}</dialog>
    </>
  )
}

export default ModalDialog