import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../untils/schema";
export default function CreateTask({ getTasks }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  // useForm({ resolver: yupResolver(schema) });
  const handlerForm = (data) => {
    axios
      .post("http://localhost:8000/tasks", data)
      .then(() => {
        getTasks();
        toast.success("Task create success!");
        reset();
      })
      .catch((e) => {
        console.log(e);
        toast.error("Error, something is wrong!");
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
      {errors?.text && <p>{errors?.text?.message}</p>}
      <select
        name="status"
        {...register(`status`)}
        id="status"
        className="border-2 pl-2 pr-2 cursor-pointer"
      >
        {errors?.status && <p>{errors?.status?.message}</p>}

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
      {errors?.category && <p>{errors?.category?.message}</p>}
      <input
        type="date"
        id="date"
        {...register(`date`)}
        className="border-2 pl-2 pr-2"
      />
      {errors?.date && <p>{errors?.date?.message}</p>}
      <button type="submit" className="border-2 pl-2 pr-2 cursor-pointer">
        Добавить
      </button>
    </form>
  );
}
