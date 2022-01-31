import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../store/index";
import classes from "./Header.module.css";

const Header = (props) => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
    console.log("user logged out");

    props.onLogout(isAuthenticated);
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
