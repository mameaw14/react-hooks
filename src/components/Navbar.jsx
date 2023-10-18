import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../contexts/AuthContext.js";

export const Navbar = () => {
  const {user, isLoggedIn, login, logout} = useContext(AuthContext)
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>React Hooks</div>
        <nav id="sidebar" style={{display:'flex'}}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game" className={"nav-item"}>Game</NavLink>
          {isLoggedIn && <div className={"nav-item"}>{user}</div>}
          {isLoggedIn ? <button onClick={() => logout()}>Logout</button> :
            <button onClick={() => login('Mameaw')}>Login</button>}
        </nav>
      </div>
      <hr/>
    </>
  )
}