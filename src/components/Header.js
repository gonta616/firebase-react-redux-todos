import React from "react";
import { Link } from "react-router-dom";

const header = () => (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/list">List</Link>
      </li>
      <li>
        <Link to="/todo">Todo</Link>
      </li>
    </ul>
);

export default header;