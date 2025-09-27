// สมมุติ login ง่าย ๆ
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // สมมุติ login ง่าย ๆ
    if(username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/"); // ไปหน้า Home
    } else {
      alert("username หรือ password ผิด");
    }
  };

  return (
    <div className="alingn-center">
      <h1 className="text-2xl font-bold">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input className="border border-purple-200" placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
