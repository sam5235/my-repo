import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './style.css';
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const tasksFromServer = await fecthTasks();
      setTasks(tasksFromServer);
    };
    getTask();
  }, []);
  const fecthTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/tasks");
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    console.log(res);

    const data = await res.json();

    setTasks([...tasks, data]);
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const fecthTask = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  const toggleReminder = async (id) => {
    const tobetogg = await fecthTask(id);
    console.log(tobetogg);

    const updata = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...tobetogg, reminder: !tobetogg.reminder }),
    });
    const data = await updata.json();
    console.log(data);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };
  const [showTask, setShowTask] = useState(false);

  return (
    <Router>
      <div className="container">
        <Header setShowTask={setShowTask} showTask={showTask} />
        <Routes>
          <Route
            path="/"
            exact
            element={(
              <>
                {showTask ? (
                  <AddTask addTask={addTask} setShowTask={setShowTask} />
                ) : null}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDoubleClick={toggleReminder}
                    onDelete={deleteTask}
                  />
                ) : (
                  "No task Here"
                )}
              </>
            )}
          />

          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
