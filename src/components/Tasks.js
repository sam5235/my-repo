import Task from "./Task"

function Tasks({tasks, onDelete, onDoubleClick}) {
  return (
    <div className="">
       {tasks.map((task) => (<Task key= {task.id} onDoubleClick = {onDoubleClick} onDelete = {onDelete} task = {task}/>))}  
    </div>
  )
}

export default Tasks
