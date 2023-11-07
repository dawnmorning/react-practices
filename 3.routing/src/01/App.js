import React, { useState, useEffect } from "react";
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";

export default function App() {
  const [route, setRoute] = useState("/");
  useEffect(() => {
    window.addEventListener("hashchange", handlerHashChage);
    return () => {
      window.removeEventListener("hashchange", handlerHashChage);
    };
  }, []);

  const handlerHashChage = () => {
    console.log(window.location.hash);
    setRoute(window.location.hash);
  };
  return (() => {
    switch (route) {
      case "/":
        return <Main />;
      case "/guestbook":
        return <Guestbook />;
      case "/gallery":
        return <Gallery />;
      default:
        return null;
    }
  })();
}
