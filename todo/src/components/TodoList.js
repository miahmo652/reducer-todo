import React from 'react'

const TodoList = props => {
    return (
      <div>
        {props.state.todos.map(todo => {
          return (
              
            <div onClick={() => {
                props.dispatch({
                  type: "TOGGLE_COMPLETED",
                  payload: todo.id
                })
              }}>
                <p>{todo.item}</p>
              </div>
            );
          })}
         
          <button
            onClick={() => {
                props.dispatch({
                  type: "REMOVE_COMPLETED"
                });
              }}>
         Completed
          </button>
          
      </div>
    );
  };
  
  export default TodoList;
  