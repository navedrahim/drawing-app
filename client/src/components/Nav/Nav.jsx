import "./Nav.css"
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
    <nav>
      <NavLink className="logo" to="/">
        DrawBrite
      </NavLink>
      <NavLink className="link" to="/draw">
        Start Drawing!
      </NavLink>
    </nav>
    </>
  )
}

export default Nav