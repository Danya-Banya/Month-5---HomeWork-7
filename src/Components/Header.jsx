import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex gap-1 bg-[#222] text-white font-mono p-2">
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contacts"}>Contacts</Link>
    </div>
  );
}
