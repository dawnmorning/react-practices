import React from "react";
function App() {
  // const App = document.createElement("div");
  // App.textContent = "Hello Webpack";
  // React.createElement("div", null, "Hello World");
  // return App;
  return (
    <div>
      Hello World
      <ul>
        {["1st", "2nd"].map((e) => {
          return <li>${e}</li>;
        })}
      </ul>
    </div>
  );
}

export { App };
