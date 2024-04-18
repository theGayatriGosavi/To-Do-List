import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import {AddTodo} from "./MyComponents/AddTodo";
import React, {useState} from 'react';
function App() {
  const onDelete = (todo) =>
  {
    console.log("I am onDelete of todo", todo);
    //the following does not work in react
    //let index = todos.indexOf(todo); 
    //todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this todo",title,desc);
    let sno = todos[todos.length-1].sno+1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos,setTodos] = useState([

    {
      sno: 1,
      title: "Go to the market",
      desc: "Go to the market and buy stationary and grocery"
    },
    {
      sno: 2,
      title: "Laundry",
      desc: "wash cloths and dry them"
    },
    {
      sno: 3,
      title: "Throw trash",
      desc: "Throw the trash and change the disposible bag"
    },
    {
      sno: 4,
      title: "Call mumma",
      desc: "call mumma and wish her birthday"
    },
    {
      sno: 5,
      title: "courier mom's birthday present",
      desc: "courier mom's birthday present and order her cake"
    }
  ]);

  return (
    <>
      <Header title="TO-DO List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete}/>
      <AddTodo addTodo={addTodo} />
      <Footer/>
    </>
  );
}

export default App;
