import { useState } from "react";
import "./App.css";
import axios from "axios";
import { useEffect } from "react";
import CreateTask from "./Components/CreateTask";
import Tasks from "./Components/Tasks";

function App() {
  const [task, setTask] = useState([]);
  const getTasks = () => {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => setTask(response.data))
      .catch((err) => console.log(err));
  };
  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:8000/tasks/${id}`)
      .then(() => {
        getTasks();
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <div className="tasks p-2 bg-[#222] text-white font-mono">
        <CreateTask getTasks={getTasks} />
        <h1 className="text-[24px] mb-2 ">Задачи</h1>
        <Tasks tasks={task} onDelete={deleteTask} />
      </div>
    </>
  );
}

export default App;
