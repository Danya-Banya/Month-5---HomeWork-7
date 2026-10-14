import { useNavigate } from "react-router-dom";

export default function Tasks({ tasks, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-[repeat(4,auto)] gap-8">
      {tasks?.map((task) => (
        <div className="task_cont grid border-2 p-2" key={task.id}>
          Задача: {task.text} <br />
          Активность: {task.status === "true" ? "Активна" : "Неактивна"} <br />
          <p>Категория: {task.category}</p>
          Дата: {task.date}
          <button
            className="border-2 pl-2 pr-2 mb-1 cursor-pointer"
            onClick={() => navigate(`/detail/${task.id}`)}
          >
            Детальнее
          </button>
          <button
            className="border-2 pl-2 pr-2 cursor-pointer"
            onClick={() => onDelete(task.id)}
          >
            Удалить задачу
          </button>
        </div>
      ))}
    </div>
  );
}
