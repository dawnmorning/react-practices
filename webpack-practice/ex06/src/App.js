import "./assets/css/App.css";
import log from "./assets/images/logo.svg";
function App() {
  const App = document.createElement("div");
  App.textContent = "Hello Webpack";
  App.className = "Header";
  return App;
}

export { App };
