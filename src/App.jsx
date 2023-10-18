import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React, {useState} from "react";
import {HomePage} from "./pages/HomePage.jsx";
import {GuessNumberPage} from "./pages/GuessNumberPage.jsx";
import {AuthContext} from "./contexts/AuthContext.js";
import {useAuthContext} from "./hooks/useAuth.js";

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
  const authContextValue = useAuthContext()

  return (
    <AuthContext.Provider value={authContextValue}>
      <RouterProvider router={router}/>
    </AuthContext.Provider>
  )
}

export default App
