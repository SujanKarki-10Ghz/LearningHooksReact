import React from 'react'

const Button = ({count, handleClick}) => {
  return (
    <button onClick={handleClick}>You've clicked me {count} times.</button>
  )
}

export default Button