import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/index.js'

const Todo = () => {

    const [state, dispatch ] = useReducer(todoReducer, initialState);

  return (
    <div
      onClick={() => dispatch({ type: "TOGGLE_COMPLETE"})}
    >
      {state.initialState}
    </div>
  );
};

export default Todo;
