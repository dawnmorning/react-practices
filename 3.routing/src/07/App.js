import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, useRoutes } from "react-router";

import { SiteLayout } from "./layout";

import Main from "./component/Main";
import Guestbook from "./component/Guestbook";
import About from "./component/About";
import { Gallery } from "./component/gallery";
import { Login, Join } from "./component/user";

import Error from "./component/error/Error";
import Error404 from "./component/error/Error404";

import "./assets/scss/App.scss";

export default function App() {
  useRoutes([
    { path: "/", element: <Main /> },
    { path: "/gallery", element: <Gallery /> },
    { path: "/guestbook", element: <Guestbook /> },
    { path: "/about", element: <About /> },
    { path: "/user/join", element: <Join /> },
    { path: "/user/login", element: <Login /> },
    { path: "/error", element: <Error404 /> },
    { path: "*", element: <Error404 /> },
  ]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/join" element={<Join />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </Router>
  );
}
