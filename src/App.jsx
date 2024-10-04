
import './components/todo/todo.css';
import ToDoNew from './components/todo/ToDoNew';
import ToDoData from './components/todo/ToDoData';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

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

  const deleteToDo = (id) => {
    const newToDo = todoList.filter(item => item.id !== id);
    setTodoList(newToDo);
  }

  const randomIntFromInterval = (min, max) => { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Props: {key:value}
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew
          addNewToDo={addNewToDo}
        />

        {todoList.length > 0 ?
          <ToDoData
            todoList={todoList}
            deleteToDo={deleteToDo}
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
      <Outlet />
      <Footer />
    </>
  )
}

export default App
