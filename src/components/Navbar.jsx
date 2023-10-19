import {NavLink} from "react-router-dom";
import {useAuth} from "../hooks/useAuth.js";

export const Navbar = () => {
  const {user, isLoggedIn, login, logout} = useAuth()
  return (
    <>
      <div className={'nav-container'}>
        <div>React Hooks</div>
        <nav id="sidebar" className={'nav-item-container'}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game">Game</NavLink>
          {isLoggedIn && <div>{user}</div>}
          {isLoggedIn ? <button onClick={() => logout()}>Logout</button> :
            <button onClick={() => login('Mameaw')}>Login</button>}
        </nav>
      </div>
      <hr/>
    </>
  )
}