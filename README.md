# TodoList Web App
![image](https://github.com/rrrozzaq/todolist-web-app/assets/92041571/9debe5c4-3418-48a8-80f5-1cf7f70132a2)

## Description

The Todolist Web project serves as a technical test for aspiring Software Engineer Interns. It assesses candidates' proficiency in React.js, front-end development, and their ability to create interactive web applications. Candidates are tasked with implementing basic features such as adding, completing, and removing tasks from a list, while also demonstrating their understanding of responsive design principles and user interface considerations.

## Installation

To clone and run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
   cd todo-list-web-app
    ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open your browser and visit
  ```bash
  http://localhost:3000
  ```
## Technical Explanation
### Using React Hooks

1. useState Hook:
- In `TodoForm` component, the `useState` hook is used to manage the state of the input field. It allows us to create a controlled input, where the input value is controlled by React state.
- Code example:
```javascript
  const [value, setValue] = React.useState("");
```
2. Adding Todo:
- In the `addTodo` function, the `useState` hook is utilized to update the list of todos. It creates a new array with the existing todos along with the new todo added to it.
- Code example:
```javascript
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
```
3. Complete Todo:
- The `completeTodo` function toggles the completion status of a todo item. It uses the `useState` hook to update the `isCompleted` property of the todo.
- Code example:
```javascript
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };
```

### Other Technical Details

- **CSS Styling**: The project utilizes CSS for styling, including flexbox for layout management and box-shadow for adding depth to elements.
- **Responsive Design**: The application is designed to be responsive, ensuring optimal viewing and interaction experience across various devices and screen sizes.
- **Component-based Architecture**: React's component-based architecture is leveraged to create reusable and modular UI components, promoting code reusability and maintainability.
- **Event Handling**: Event handling is implemented using React's synthetic event system, allowing for efficient and consistent event handling across components.
