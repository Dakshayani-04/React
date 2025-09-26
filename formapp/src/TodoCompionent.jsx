import React from "react";
const TodoComponent =()=>{

    return(
        <>
        <div className="parent">
            <h1>TO-DO LIST</h1>
            <div className="addtasks">
              <input type="text" placeholder="enter the task.............."
              onChange={(event)=>setNewTask(event.target.value)}/>
              <button onClick={addTask}>Add</button>
            </div>
            

        </div>
        </>
    )
}
export default TodoComponent