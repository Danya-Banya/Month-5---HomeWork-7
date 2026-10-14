import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/tasks/${id}`)
      .then(({ data }) => setData(data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div className="p-2">
      <br />
      <h1>Описание задания</h1>
      <p>{data?.text}</p>
      <br />
      <h1>Статус:</h1>
      <p>{data?.status}</p>
      <br />
      <h1>Дата</h1>
      <p>{data?.date}</p>
      <br />
      <button
        className="border-2 bg-black text-white pl-2 pr-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Назад к списку
      </button>
    </div>
  );
}
