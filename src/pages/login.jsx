// สมมุติ login ง่าย ๆ
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // ----------------------------------------
  // handleSubmit
  // ยังไม่ได้แก้นะตรงนี้
  const handleSubmit = (e) => {
    e.preventDefault();
    // สมมุติ login ง่าย ๆ
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("username หรือ password ผิด");
    }
  };
  // ------------------------------------------
  // render
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161616] text-white">
      <div className="w-full max-w-sm bg-[#1a1a1a] rounded p-10 pt-0 shadow-lg">
        <img src="src/assets/myhis-img.png" alt="logo" className="mx-auto w-80 h-80 bg-transparent"/>
        <h1 className="text-3xl font-bold text-center mb-10 mt-0">Sing In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
           <div className="flex flex-col">
            {/* ค่อยทำ onclick ที่หลัง */}
            <label htmlFor="username" className="mb-1.5 text-gray-300 text-m">ชื่อผู้ใช้</label> 
          <input className="block w-full h-10 px-3 rounded bg-[#747474]" placeholder="กรอกชื่อผู้ใช้" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col">
            {/* ค่อยทำ onclick ที่หลัง */}
            <label htmlFor="password" className="mb-1.5 text-gray-300 text-m">รหัสผ่าน</label>
          <input className="block w-full h-10 px-3 rounded bg-[#747474]" placeholder="กรอกรหัสผ่าน" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="block w-30 h-10 px-2 mt-5 text-sm rounded-2xl text-white mx-auto bg-[#575757] hover:bg-[#00ff6a] transition-colors duration-300">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  );
}
