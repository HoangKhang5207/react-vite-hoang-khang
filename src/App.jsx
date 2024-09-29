
import './components/todo/todo.css';
import ToDoNew from './components/todo/ToDoNew';
import ToDoData from './components/todo/ToDoData';
import ReactLogo from './assets/react.svg';

const App = () => {
  const khang = "HoangKhang";
  const age = 22;
  const data = {
    address: "Ho Chi Minh",
    country: "Vietnam"
  };

  // Props: {key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew />
      <ToDoData
        name={khang}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={ReactLogo} className='logo' />
      </div>
    </div>
  )
}

export default App
