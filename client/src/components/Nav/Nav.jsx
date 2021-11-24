import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-out">
        Sign Out
      </NavLink>
    </>
  );
  const unauthenticatedOptions = (
    <>
      <NavLink className="link" to="/sign-up">
        Sign Up
      </NavLink>
      <NavLink className="link" to="/sign-in">
        Sign In
      </NavLink>
    </>
  );
  const alwaysOptions = (
    <>
      <NavLink className="link" to="/draw">
        Start Drawing!
      </NavLink>
      <NavLink className="link" to="/drawings">
        Gallery
      </NavLink>
    </>
  );

  return (
    <>
      <nav>
        <NavLink className="logo" to="/">
          DrawBrite
        </NavLink>
        <div className="nav">
          <div className="links">
            <h4 id="greeting">{user ? `Hello, ${user?.username}!` : null}</h4>
            {alwaysOptions}
            {user ? authenticatedOptions : unauthenticatedOptions}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
