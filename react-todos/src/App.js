import React, {useState} from 'react';
import './App.css';
import ToDoTable from './components/ToDoTable';
import NewToDoForm from './components/NewTodoForm';

function App() {
  const [showAddTodoForm, setShowAddToDoForm] = useState(false);

  const [todos, setTodos] = useState([
    {rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'User One'},
    {rowNumber: 2, rowDescription: 'Water plants', rowAssigned: 'User Two'},
    {rowNumber: 3, rowDescription: 'Make Dinner', rowAssigned: 'User One'},
  ]);

  const addTodo = (description, assigned) => {
    let rowNumber = 0;
    if (todos.length > 0) {
      rowNumber = todos[todos.length-1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }
    const newTodo = {
      rowNumber: rowNumber, 
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your Todo's
        </div>
        <div className="card-body">
          <ToDoTable todos={todos} deleteTodo={deleteTodo}/>  
          <button onClick={() => setShowAddToDoForm(!showAddTodoForm)} className="btn btn-primary">
            {showAddTodoForm ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodoForm &&
            <NewToDoForm addTodo={addTodo}/>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
