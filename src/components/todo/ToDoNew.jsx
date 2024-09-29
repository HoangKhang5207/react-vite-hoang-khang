import { useState } from "react";

const ToDoNew = (props) => {

    // const valueInput = "Khang"; // hard code khi truyền data để render lên giao diện

    // Cách để giải quyết vấn đề trên -> sử dụng useState Hook của React
    // phần tử đầu tiên là giá trị, phần tử thứ 2 là một function/method,
    // cụ thể ở đây là method setter (getter/setter trong OOP)
    // Hàm useSate(value, setValue - function) -> array gồm 2 phần tử:
    // 1. giá trị mặc định khởi tạo.
    // 2. function để update giá trị đó.
    // Và do trả về một array nên sẽ sử dụng array destructuring assignment
    const [valueInput, setValueInput] = useState("Khang");

    const { addNewToDo } = props;
    // addNewToDo("HKhang");

    const handleClick = () => {
        console.log(valueInput);
    }

    const handleOnChange = (name) => {
        setValueInput(name); // update giá trị valueInput
    }

    return (
        <div className="todo-new">
            <input type="text"
                onChange={(event) => handleOnChange(event.target.value)}
            />
            <button
                style={{ cursor: 'pointer' }}
                onClick={handleClick}
            >Add</button>
            <div>
                My name is = {valueInput}
            </div>
        </div>
    );
}

export default ToDoNew