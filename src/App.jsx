import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useState} from "react";
import {HomePage} from "./pages/HomePage.jsx";
import {GuessNumberPage} from "./pages/GuessNumberPage.jsx";
import {AuthContext} from "./contexts/AuthContext.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/game",
    element: <GuessNumberPage/>,
  },
]);

function App() {
  const [user, setUser] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const login = (user) => {
    setUser(user)
    setIsLoggedIn(true)
  }
  const logout = () => {
    setUser('')
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{user, isLoggedIn, login, logout }}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
