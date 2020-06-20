export const initialState = {
todos: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }
]

    
  };
  const toggleItem = (id, todoList) => {
    const newList = todoList.map(item => {
      if(item.id === id){
        return {
          ...item,
          completed: !item.completed
        }
      } else {
        return item;
      }
    })
    return newList
  }

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
      case "TOGGLE_COMPLETE":
        return {
          ...state,
       todos: state.todos.map(todo=>{
         if(todo.id === todo.id){
           
           return {
             ...todo,
             completed: !todo.completed 
           }
         } else {
           return state.todo;
         }
       })
        }

      /*  case "TOGGLE_COMPLETED":
          return {
            todos: toggleItem(action.payload, state.todos)
          }
*/
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

  
