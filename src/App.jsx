import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import './index.css'
import Login from "./pages/login";
import Create_account from "./pages/create_account";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/create_account" element={<Create_account setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/"
          element={isLoggedIn ? <Login /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;