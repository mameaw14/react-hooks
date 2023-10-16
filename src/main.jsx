import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {GuessNumberPage} from "./pages/GuessNumberPage.jsx";
import {HomePage} from "./pages/HomePage.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element:  <HomePage />,
  },
  {
    path: "/game",
    element:  <GuessNumberPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />

)
