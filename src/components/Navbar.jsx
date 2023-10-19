import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className={'nav-container'}>
        <div>React Hooks</div>
        <nav id="sidebar" className={'nav-item-container'}>
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game">Game</NavLink>
        </nav>
      </div>
      <hr/>
    </>
  )
}