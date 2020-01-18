import React from 'react'

function Button(props) {
  return(
    <div>
      <button id="add" onClick={props.onClick} >Add</button>
      <button id="subtract" onClick={props.onClick} >Minus</button>
    </div>
  )
}
 export default Button;