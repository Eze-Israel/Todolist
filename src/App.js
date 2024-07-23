import { useState } from "react";
import RenderList from "./Components/RenderList";
import Counter from "./Components/Counter";
import ColorRender from "./Components/ColorRender";
import PictureComponent from "./Components/PictureComponent";
import Canvas from "./Components/Canvas";
import Scoreboard from "./Components/Scoreboard";
import Form from "./Components/ImmerScript";
import AppData from "./Components/IndexedDB";
function App() {
  const initialTodolist = [
    {
      id: 1,
      item: "Wake up at 6am",
      completed: false
    },
    {
      id: 2,
      item: "Say your prayers",
      completed: false
    },
    {
      id: 3,
      item: "Have breakfast",
      completed: false
    },
    {
      id: 4,
      item: "Go to work",
      completed: false
    },
  ]

  const [count, setCount] =useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  


  const [todos, setTodos] = useState(initialTodolist)

  const todoList = todos.map(todo => (
      <li key={todo.id}>
        <input type="checkbox" />
        <label>{todo.item}</label>
        {" "}
        <button>Edit</button>
        {" "}
        <button>Delete</button>
        {"  "}
      </li>
  ))

  return (
    <div>
      <h1>Todo List</h1>
      <ul>{todoList}</ul>
      <RenderList/>
      <Counter  count={count} handleClick={handleClick} />
      <Counter  count={count} handleClick={handleClick} />
     <ColorRender />
    <PictureComponent/>
    <Counter>
      <p>OBI IS A BOY</p>
      <p>OBI IS A BOY</p>
      <p>OBI IS A BOY</p>
      <p>OBI IS A BOY</p>
      <p>OBI IS A BOY</p>
      <p>OBI IS A BOY</p>
      <p>OBI IS A BOY</p>
    </Counter>
    < Canvas/>
    <Scoreboard/>
    <Form/>
    {/* <AppData/> */}
    
    </div>
    
  )
}

export default App;

