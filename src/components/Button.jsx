import React from 'react'

function Button(props) {
  return (
    <button onClick={props.onClick} className={props.className}>Restart</button>
  )
}

export default Button
