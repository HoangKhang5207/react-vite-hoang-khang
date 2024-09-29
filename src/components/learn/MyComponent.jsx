// () => {  }
// Component = HTML + CSS + JavaScript
//JSX
//Fragment: 1 parent
// Using CSS: className="" in JSX instead of class in HTML
// Using Variable in JSX: {variable-name, expression, ...} -> write javascript code in HTML

import './style.css';

const MyComponent = () => {
    // const khang = "khangne"; string
    // const khang = 22; number
    // const khang = true; boolean -> no display on HTML
    // const khang = undefined; undefined -> no display on HTML
    // const khang = null; null -> no display on HTML

    // const khang = [1, 2, 3]; // -> no display correctly with array on HTML
    const khang = {
        name: "khangne",
        age: 22
    }; // -> error: no display the object on HTML but {khang.name} or {khang.age} is valid
    // using JSON.stringify to display the object on HTML as a JSON string

    return (
      <>
        <div> {JSON.stringify(khang)} Hello Component & Khang Update</div>
        <div>{console.log("KHANG")}</div>
        <div className="child"
                style={
                    {borderRadius: "10px"}
                }>child</div>
      </>
    );
}

export default MyComponent