import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm.js'
import TodoList from './components/TodoList.js'
import { initialState, todoReducer } from './reducers/index.js'
function App() {

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state)
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
