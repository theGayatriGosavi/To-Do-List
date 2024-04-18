import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
  
  let todoListStyle = {
    position: "absolute", 
    float: "left",
    width: "40%",
    height:"78%",
    padding:"10px 30px",
    border:"2px solid black",
    overflowX: 'hidden',
    overflowY: 'scroll',
    whiteSpace: 'nowrap',
    scrollSnapType: 'x mandatory', 
    marginTop:"20px",
    marginLeft:"50%",
    backgroundColor:"aliceblue"
  }
  return (
    <div className='container' style={todoListStyle}>
      <h3 className="text-center my-3" style={{textAlign: "center", padding:"0px 30px",}}>Todos List</h3>
      {props.todos.length==0? "No to-dos to display" : 
           props.todos.map((todo)=>{
            return <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> 
          })
      }

   
      
    </div>
  )
}

