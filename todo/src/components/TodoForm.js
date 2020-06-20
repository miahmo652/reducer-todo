import React, {useState} from "react";

const TodoForm =({dispatch}) =>{
    const [toDo, setToDo] =useState()
    

    const handleChanges = e => {
        setToDo(e.target.value)
      };
    
     const handleSubmit = e =>{
         e.preventDefault();
         setToDo('')
     }
    
      
        return (
          <form onSubmit ={handleSubmit}>
            <input type="text" name="item" value={toDo} onChange={handleChanges}/>
            <button onClick={()=>{
                dispatch({type:"ADD_TODO", payload: toDo})
            }}>
                Add ToDo
            </button>
            
          </form>
        );
}
  
   


  


export default TodoForm;