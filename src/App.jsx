
import './components/todo/todo.css';
import ToDoNew from './components/todo/ToDoNew';
import ToDoData from './components/todo/ToDoData';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: 'Learning React'},
    // { id: 2, name: 'Watching YouTube'}
  ]);

  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    };

    // Không nên thay đổi 'trực tiếp' giá trị của state mà hãy sử dụng cách sau với spread syntax (...) - Copy
    setTodoList([...todoList, newToDo]);
  }
  // addNewToDo();

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Props: {key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew
        addNewToDo={addNewToDo}
      />

      {todoList.length > 0 ?
        <ToDoData
          todoList={todoList}
        />
        :
        <div className="todo-image">
          <img src={ReactLogo} className='logo' />
        </div>
      }

      {/* {todoList.length > 0 &&
        <ToDoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className="todo-image">
          <img src={ReactLogo} className='logo' />
        </div>
      } */}

    </div>
  )
}

export default App
