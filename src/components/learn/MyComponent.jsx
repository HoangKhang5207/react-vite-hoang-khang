// () => {  }
// Component = HTML + CSS + JavaScript
//JSX
//Fragment: 1 parent
// Using CSS: className="" in JSX instead of class in HTML
import './style.css';

const MyComponent = () => {
    return (
      <>
        <div>Hello Component & Khang Update</div>
        <div className="child"
                style={
                    {borderRadius: "10px"}
                }>child</div>
      </>
    );
}

export default MyComponent