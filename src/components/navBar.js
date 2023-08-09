import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink to="/">FontSizeEx</NavLink>
      <NavLink to="/todo">ToDoListEx</NavLink>
    </nav>
  );
}

export default NavBar;
