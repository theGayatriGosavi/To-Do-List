import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  let btn = 
  {
    float:"right",
  }
  let itemContents =
  {
    padding:"2px 2px",
    display:"inline-block"

  }
  return (
    <div style={{top:"10px",}}>
      <h4>{todo.title}</h4>
      <p style={itemContents}>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" style={btn} onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}



