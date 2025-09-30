import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create_account({ setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  // ----------------------------------------
  // handleSubmit
  // ยังไม่ได้แก้นะตรงนี้
  // ปรับเป็น cerate account
  const handleSubmit = (e) => {
    e.preventDefault();
    // สมมุติ login ง่าย ๆ
    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/login");
    } else {
      alert("username หรือ password ผิด");
    }
  };
  // ------------------------------------------
  // render
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161616] text-white px-4 sm:px-0">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg bg-[#1a1a1a] rounded p-4 sm:p-10 pt-0 shadow-lg h-auto">
        <img src="src/assets/myhis-img.png" alt="logo" className="mx-auto w-30 h-30 sm:w-60 sm:h-60 md:w-60 md:h-60 bg-transparent mt-0" />
        <h1 className="text-xl md:text-2xl font-bold text-center mb-4 sm:mb-6 md:mb-8 mt-0">สร้างบัญชีผู้ใช้</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 md:gap-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="mb-1 text-gray-300 text-sm sm:text-base">ชื่อผู้ใช้</label>
            <input className="block w-auto h-10 sm:h-12 px-3 rounded bg-[#747474] focus:outline-none focus:ring-2 focus:ring-[#00ff6a] text-sm sm:text-base" placeholder="กรอกชื่อผู้ใช้" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-gray-300 text-sm sm:text-base">รหัสผ่าน</label>
            <input className="block w-auto h-10 sm:h-12 px-3 rounded bg-[#747474] focus:outline-none focus:ring-2 focus:ring-[#00ff6a] text-sm sm:text-base" placeholder="กรอกรหัสผ่าน" type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirm_password" className="mb-1 text-gray-300 text-sm sm:text-base">ยืนยันรหัสผ่าน</label>
            <input className="block w-auto h-10 sm:h-12 px-3 rounded bg-[#747474] focus:outline-none focus:ring-2 focus:ring-[#00ff6a] text-sm sm:text-base" placeholder="ยืนยันรหัสผ่าน" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-gray-300 text-sm sm:text-base">อีเมล</label>
            <input className="block w-auto h-10 sm:h-12 px-3 rounded bg-[#747474] focus:outline-none focus:ring-2 focus:ring-[#00ff6a] text-sm sm:text-base" placeholder="กรอกอีเมล" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button type="submit" className="block w-full h-10 sm:h-12 px-2 mt-4 sm:mt-5 text-sm sm:text-base rounded-2xl text-white mx-auto bg-[#575757] hover:bg-[#00ff6a] transition-colors duration-300">สมัครบัญชี</button>
        </form>
      </div>
    </div>
  );
}
