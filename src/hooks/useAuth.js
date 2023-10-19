import {useContext, useState} from "react";
import {AuthContext} from "../contexts/AuthContext.js";

export const useAuth = () => useContext(AuthContext)

export const useAuthContext = () => {
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

  return {user, isLoggedIn, login, logout}
}