import React from "react";
import { Link } from "react-router-dom";

function Navigation(props) {
  return (
    <ul>
      <li>
        <Link to="/">Jeopardy</Link>
      </li>
      <li>
        <Link to="/welcome/NoName">Welcome</Link>
      </li>
    </ul>
  );
}

export default Navigation;
