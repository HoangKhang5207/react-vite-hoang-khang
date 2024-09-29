
import './components/todo/todo.css';
import ToDoNew from './components/todo/ToDoNew';
import ToDoData from './components/todo/ToDoData';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, name: 'Learning React'},
    { id: 2, name: 'Watching YouTube'}
  ]);

  const khang = "HoangKhang";
  const age = 22;
  const data = {
    address: "Ho Chi Minh",
    country: "Vietnam"
  };

  const addNewToDo = (name) => {
    alert(`call me ${name}`);
  }
  // addNewToDo();

  // Props: {key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew
        addNewToDo={addNewToDo}
      />
      <ToDoData
        name={khang}
        age={age}
        data={data}
        todoList={todoList}
      />
      <div className="todo-image">
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
