import {FaTimes} from 'react-icons/fa'
function Task({task, onDelete, onDoubleClick}) {
  return (
    <div  className={`task ${task.reminder ? 'reminder': ''}`}  onDoubleClick={() => onDoubleClick(task.id)} >
       <div style={{"fontWeight" : "bold", "display" : "flex", "justifyContent" : "space-between"}}>{task.text} <FaTimes  onClick={() => onDelete(task.id)} style={{marginLeft : 400, color: 'red', cursor: 'pointer'}}/> </div>
       <div>{task.day}</div>
    </div>
  )
}



export default Task
