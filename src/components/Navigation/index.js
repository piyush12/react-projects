import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <NavLink className="nav-link" activeClassName="active" to="/timerApp">
          Timer App
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/autoComplete"
          activeClassName="active"
        >
          AutoComplete
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/tictactoe" activeClassName="active">
          Tic Tac Toe
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/booklist" activeClassName="active">
          Book List
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/shoppingApp"
          activeClassName="active"
        >
          Shopping App
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
