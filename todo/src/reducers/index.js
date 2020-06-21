export const initialState = {
todos: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

    
  };

  export const todoReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TODO":
        return { 
          ...state, 
        todos: [
          ...state.todos,
          {item: action.payload, id: Date.now(), completed: false}
        ]
        
        };
      case "TOGGLE_COMPLETED":
        return {
          ...state,
       todos: state.todos.map(todo=>{
         if(action.payload === todo.id){
           
           return {
             ...todo,
             completed: !todo.completed 
           }
         } else {
           return todo
         }
       })
        }

  case "REMOVE_COMPLETED":
    return {
      ...state,
      todos: state.todos.filter(todo=>{
        return todo.completed === false;
      })
    }

      default:
        return state;
    }
  };

  
