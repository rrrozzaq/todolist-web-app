import React from "react";
import "./App.css"; 

// Component for rendering each individual todo item
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo">
      <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
        {todo.text}
      </div>
      <div> 
        <button onClick={() => completeTodo(index)}>
          {todo.isCompleted ? "❌" : "✅"}
        </button>
        <button onClick={() => removeTodo(index)}>🗑️</button>
      </div>
    </div>
  );
}

// Component for rendering the form to add new todos
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState(""); // State for input value

  const handleSubmit = e => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission behavior
    if (!value) return; // Return if input value is empty
    addTodo(value); // Call addTodo function from props to add new todo
    setValue(""); // Reset input value to empty string
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: "flex", alignItems: "center", width: "100%" }}>
        {/* Form for adding new todos */}
        <input
          type="text"
          className="input" 
          value={value}
          onChange={e => setValue(e.target.value)} // Update input value on change
          style={{ flex: "1", marginRight: "10px" }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

// Main App component
function App() {
  const [todos, setTodos] = React.useState([ // State for storing todo items
    {
      text: "Apply for internship",
      isCompleted: false 
    },
    {
      text: "Meeting with client",
      isCompleted: false 
    },
    {
      text: "Do exercise", 
      isCompleted: false 
    }
  ]);

  // Function to add a new todo item
  const addTodo = text => {
    const newTodos = [...todos, { text }]; // Create a new array with added todo item
    setTodos(newTodos); // Update todos state with the new array
  };

  // Function to mark a todo item as completed or incomplete
  const completeTodo = index => {
    const newTodos = [...todos]; // Create a copy of the todos array
    newTodos[index].isCompleted = !newTodos[index].isCompleted; // Toggle completion status
    setTodos(newTodos); // Update todos state with the modified array
  };

  // Function to remove a todo item
  const removeTodo = index => {
    const newTodos = [...todos]; // Create a copy of the todos array
    newTodos.splice(index, 1); // Remove the todo item at the specified index
    setTodos(newTodos); // Update todos state with the modified array
  };

  return (
    <div className="app"> {/* Container for the entire application */}
      <div>
        <h2 className="todo-title">Todolist App</h2> {/* Title for the todo list */}
        <h4 className="todo-title">Technical Test - Abdul Rozzaq</h4> {/* Subtitle with author's name */}
      </div>
      <div className="todo-list"> {/* Container for the list of todo items */}
        {/* Rendering each todo item */}
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {/* Rendering the todo form to add new todos */}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;