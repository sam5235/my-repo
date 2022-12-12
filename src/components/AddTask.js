import { useState } from "react";
import '.././style.css'
const defTask = {
  text: "",
  day: "",
  reminder: false,
};
function AddTask({ setShowTask, addTask }) {
  const [task, setTask] = useState(defTask);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (task.text !== "" || task.day !== "") {
          addTask(task);
        }
        setShowTask(false);
      }}
    >
      <div>
       
        <input
          onChange={(e) => {
            setTask({ ...task, text: e.target.value });
          }}
          type="text"
          placeholder="Add Task"
        />
      </div>
      <div>
        <input
          onChange={(e) => {
            setTask({ ...task, day: e.target.value });
          }}
          type="text"
          placeholder="Add Day"
        />
      </div>
      <div>
        <label>set reminder</label>
        <input
          onChange={(e) => {
            setTask({ ...task, reminder: e.target.checked });
          }}
          type="checkbox"
        />
      </div>
      <button  type="submit" value="save Task" >Save </button>
    </form>
  );
}

export default AddTask;
