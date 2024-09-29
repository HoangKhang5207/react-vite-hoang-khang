
const ToDoNew = (props) => {
    console.log('>>> check props:', props);

    const { addNewToDo } = props;
    addNewToDo("HKhang");

    return (
        <div className="todo-new">
            <input type="text" />
            <button>Add</button>
        </div>
    );
}

export default ToDoNew