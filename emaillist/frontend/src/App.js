import React, { useEffect, useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data';

function App() {
  const [emails, setEmails] = useState([]);

  const f = async () => {
    try {
      const res = await fetch(`/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      if (json.result !== "success") {
        throw new Error(`${json.result} ${json.message}`);
      }
      const data = await res.json();
      console.log(data);
      console.log("fetch");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    f();
  }, []);

  return (
    <div id={"App"}>
      <RegisterForm />
      <SearchBar />
      {/* <Emaillist emails={data} /> */}
    </div>
  );
}

export { App };
