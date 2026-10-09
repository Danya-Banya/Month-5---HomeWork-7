import axios from "axios";
import { useForm } from "react-hook-form";
export default function CreateTask({ getTasks }) {
  const { handleSubmit, register, reset } = useForm();
  const handlerForm = (data) => {
    axios.post("http://localhost:8000/tasks", data).then(() => {
      getTasks();
      reset();
    });
  };
  return (
    <form onSubmit={handleSubmit(handlerForm)} className="flex gap-2">
      <input
        type="text"
        {...register(`text`)}
        placeholder="Задача"
        className="border-2 pl-2 pr-2 cursor-pointer"
      />
      <select
        name="status"
        {...register(`status`)}
        id="status"
        className="border-2 pl-2 pr-2 cursor-pointer"
      >
        <option value="true">Активная</option>
        <option value="false">Неактивная</option>
      </select>
      <select
        name="category"
        id="category"
        className="border-2 pl-2 pr-2 cursor-pointer"
        {...register(`category`)}
      >
        <option value="Учёба">Учёба</option>
        <option value="Работа">Работа</option>
        <option value="Личное">Личное</option>
      </select>
      <input type="date" {...register(`date`)} className="border-2 pl-2 pr-2" />
      <button type="submit" className="border-2 pl-2 pr-2 cursor-pointer">
        Добавить
      </button>
    </form>
  );
}
