import React from 'react'

const TodoList = props => {
    return (
      <div>
        {props.state.todos.map(todo => {
          return (
              
            <div onClick={() => {
                props.dispatch({
                  type: "TOGGLE_COMPLETE",
                  payload: todo.id
                })
              }}>
                <p key={todo.id}>{todo.item}</p>
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
  