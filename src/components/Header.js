import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { authActions } from "../store/auth";
import { Fragment } from "react";

const Header = () => {
  const { logout } = authActions;
  const isLoggedIn = useSelector(state => state.auth.logged);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  const navContent = (
    <Fragment>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>{" "}
      <li>
        <button onClick={logoutHandler}>Logout</button>
      </li>
    </Fragment>
  );

  return (
    <header className={classes.header}>
      <h1>{!isLoggedIn && "Redux Auth"}</h1>
      <nav>
        <ul>{isLoggedIn && navContent}</ul>
      </nav>
    </header>
  );
};

export default Header;
