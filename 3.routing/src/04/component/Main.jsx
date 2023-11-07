import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Main() {
  return (
    <>
      <Link to={"/main"}>
        <h1>Main</h1>
      </Link>
      <ul>
        <li>
          <Link to={`/guestbook`}>[Guestbook]</Link>
        </li>
      </ul>
    </>
  );
}
