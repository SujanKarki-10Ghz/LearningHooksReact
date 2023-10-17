import React,{useState} from 'react'
import ModalDialog from '../../components/ModalDialog'

const Modal = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <button onClick={()=>setShow(true)}>Open Dialog</button>
    <ModalDialog isOpen={show}>
    Hello There!
    <br />
    <button onClick={()=>setShow(false)}>Close</button>
    </ModalDialog> 
    </>
  )
}

export default Modal
/**In this example, the external system is the browser DOM.
 * The ModalDialog component renders a <dialog> element.
 *  It uses an Effect to synchronize the isOpen prop to the showModal() and close() method calls.
 */