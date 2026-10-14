import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <div>
      About
      <button
        className="border-2 pl-2 pr-2 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Назад
      </button>
    </div>
  );
}
