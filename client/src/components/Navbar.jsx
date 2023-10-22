import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const BACKEND_URL = process.env.BACKEND_URL;
  const logout = () => {
    window.open(`${BACKEND_URL}/auth/logout`, "_self");
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Hassan App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt="AVATAR"
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;