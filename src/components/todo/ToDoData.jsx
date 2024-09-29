
const ToDoData = (props) => {
    // props là một object {}
    // {
    //     name: 'HoangKhang',
    //     age: 22,
    //     data: {

    //     }
    // }

    // object destructuring assignment -> cách sử dụng phổ biến
    const { name, age, data } = props;

    console.log('>>> check props:', props);

    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    );
}

export default ToDoData