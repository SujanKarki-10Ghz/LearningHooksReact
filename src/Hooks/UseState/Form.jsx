import React, { useState } from 'react'

const Form = () => {
    const[input, setInput]=useState({
      firstName: "Taylor",
      lastName: "March",
      email: "taylormarch@gmail.com",
    });
  return (
    <>
        <label >
          FirstName:
        <input value={input.firstName} onChange={e=> setInput({
          ...input,
          firstName: e.target.value
        })} />
        </label>
        <label >
          lastName:
        <input value={input.lastName} onChange={e=> setInput({
          ...input,
          lastName: e.target.value
        })} />
        </label>
        <label >
         Email:
        <input value={input.email} type="email" onChange={e=> setInput({
          ...input,
          email: e.target.value
        })} />
        </label>
        <p>{input.firstName} {input.lastName} {input.email}</p>
    </>
  )
}

export default Form