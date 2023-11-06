import React, { useEffect, useState } from "react";
import "./assets/scss/App.scss";
import RegisterForm from "./RegisterForm";
import SearchBar from "./SearchBar";
import Emaillist from "./Emaillist";
// import data from './assets/json/data';

function App() {
  const [emails, setEmails] = useState([]);
  const searchEmail = (keyword) => {
    const newEmails = data.filter(
      (email) =>
        email.firstName.indexOf(keyword) !== -1 ||
        email.lastName.indexOf(keyword) !== -1 ||
        email.email.indexOf(keyword) !== -1
    );
    setEmails(newEmails);
  };

  const getEmail = async () => {
    try {
      const res = await fetch(`/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      console.log("fetch");
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      if (data.result !== "success") {
        throw new Error(`${data.result} ${data.message}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addEmail = async (email) => {
    fetch("/api", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(email),
    });
  };

  useEffect(() => {
    getEmail();
  }, []);

  return (
    <div id={"App"}>
      <RegisterForm addEmail={addEmail} />
      <SearchBar searchEmail={searchEmail} />
      {emails === null ? null : <Emaillist emails={emails} />}
    </div>
  );
}

export { App };
