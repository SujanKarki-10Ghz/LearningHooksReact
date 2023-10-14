import React from 'react'
import Counter from './Hooks/UseState/Counter'
import TextField from './Hooks/UseState/TextField'
import CheckBox from './Hooks/UseState/CheckBox'
import Form from './Hooks/UseState/Form'
import List from './Hooks/UseState/List'
const App = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", flexDirection:"column"}}>
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
    <div style={{margin:"15px", display:"flex", flexDirection:"column", width:"100%", justifyContent:"center", alignItems:"center"}}>
    <List/>
    </div>
    </div>
  )
}

export default App