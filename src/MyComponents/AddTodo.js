import React, { useState } from "react";

export const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setdesc] = useState("");
    const submit = (e)=>{
       e.preventDefault();
       if(!title || !desc)
       {
        alert("Title or Description cannot be blank");
       }
       addTodo(title,desc);
    }
    let addTodoStyle = 
    {   position: "absolute", 
        float: "left",
        width: "40%",
        height:"78%",
        padding:"10px 30px",
        border:"2px solid black",
        marginLeft:"5%",
        marginTop:"20px",
        backgroundColor:"aliceblue"
    }
    let descStyle =
    {
        margin:"30px 0px",
    }
    let btnStyle =
    {
        margin:"40px 0px"
    }
  return (
    <div className="container">
      <form onSubmit={submit} style={addTodoStyle}>
      <h3 style={{textAlign: "center", padding:"10px 30px",}}>Add a Task To do</h3>
        <div className="form-group" style={descStyle}>
          <label htmlFor="title">Todo Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            className="form-control"
            id="title"
            style={{height: "50px"}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Todo Description</label>
          <input
            type="text"
            value={desc}
            onChange={(e)=>{setdesc(e.target.value)}}
            className="form-control"
            id="desc"
            style={{height: "200px"}}
          />
        </div>
       
        <button type="submit" className="btn btn-success" style={btnStyle}>
          Add To-Do
        </button>
      </form>
    </div>
  );
};
