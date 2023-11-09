import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import Error404 from "./component/error/Error404";

import "./assets/scss/App.scss";
// import Login from "./../07/component/user/Login";
// import Join from "./../07/component/user/Join";
import { Login, Join } from "./component/user";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="guestbook" element={<Guestbook />} />
        <Route path="about" element={<About />} />
        <Route path="user/login" element={<Login />} />
        <Route path="user/join" element={<Join />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
