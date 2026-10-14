import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CreateTask from "../Components/CreateTask";
import Tasks from "../Components/Tasks";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const [task, setTask] = useState([]);
  const [filter, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const getTasks = () => {
    axios
      .get("http://localhost:8000/tasks")
      .then((response) => {
        setTask(response.data);
        setFiltered(response.data);
      })
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
  const handlerFilter = () => {
    const filteredItem = task.filter((t) =>
      t.text.toLowerCase().includes(search.toLowerCase()),
    );
    if (filteredItem) {
      setFiltered(filteredItem);
    }
  };
  useEffect(() => {
    getTasks();
  }, []);
  return (
    <>
      <div className="tasks p-2 bg-[#222] text-white font-mono">
        <CreateTask getTasks={getTasks} />
        <h1 className="text-[24px] mb-2 ">Задачи</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="pl-2 pr-2 border-2"
          placeholder="Поиск..."
        />
        <button
          className="border-2 pl-2 pr-2 ml-1 cursor-pointer"
          onClick={() => handlerFilter()}
        >
          Найти
        </button>
        <Tasks tasks={filter} onDelete={deleteTask} />
        <ToastContainer />
      </div>
    </>
  );
}
