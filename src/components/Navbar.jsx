import {NavLink} from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>React Hooks</div>
        <nav id="sidebar">
          <NavLink to="/" className={"nav-item"}>Home</NavLink>
          <NavLink to="/game" className={"nav-item"}>Game</NavLink>
        </nav>
      </div>
      <hr/>
    </>
  )
}