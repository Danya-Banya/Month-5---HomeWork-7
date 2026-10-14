import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className="p-2">
      GeeksPro
      <button className="border-2 pl-2 pr-2 cursor-pointer ml-2" onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
