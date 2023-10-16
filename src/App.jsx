import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import {HomePage} from "./pages/HomePage.jsx";
import {GuessNumberPage} from "./pages/GuessNumberPage.jsx";

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
  return (
    <RouterProvider router={router}/>
  )
}

export default App
