import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import CreateAccount from "./pages/create_account.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    
    { path: "/login", element: <Login setIsLoggedIn={setIsLoggedIn} /> },
    { path: "/create_account", element: <CreateAccount setIsLoggedIn={setIsLoggedIn} /> },

    // { path: "/home", element: <PrivateRoute isLoggedIn={isLoggedIn}><Home /></PrivateRoute> },

    { path: "/", element: <PrivateRoute isLoggedIn={isLoggedIn}><Home /></PrivateRoute> },
  ]);

  return <RouterProvider router={router} />;
}