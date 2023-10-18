import React from 'react'
import GlobalEvent from './Hooks/UseEffect/GlobalEvent'
import Modal from './Hooks/UseEffect/Modal'
import FetchData from './Hooks/UseEffect/FetchData'
// import ExternalSystem from './Hooks/UseEffect/ExternalSystem'
// import Counter from './Hooks/UseState/Counter'
// import TextField from './Hooks/UseState/TextField'
// import CheckBox from './Hooks/UseState/CheckBox'
// import Form from './Hooks/UseState/Form'
// import List from './Hooks/UseState/List'
const App = () => {
  return (
    <>
    {/* <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column"}}>
    <Counter />
    <div style={{margin:"15px"}}>
    <TextField />
    </div>
    <div style={{margin:"15px"}}>
    <CheckBox />
    </div>
    <div style={{margin:"15px", display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
    <Form/>
    </div>
    <div style={{margin:"15px", display:"flex", flexDirection:"row", width:"100%", justifyContent:"center", alignItems:"center"}}>
    <List/>
    </div>
    </div> */}
    {/* <ExternalSystem /> */}
    {/* <GlobalEvent/> */}
    {/* <Modal /> */}
    <FetchData />
    </>
  )
}

export default App