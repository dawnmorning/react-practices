import React from "react";
import "./assets/scss/App.scss";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
import data from "./assets/json/data";
import RegisterForm from "./Registerform";

function App() {
  return (
    <div id={"App"}>
      <RegisterForm />
      <SearchBar />
      <Emaillist emails={data} />
    </div>
  );
}

export { App };
