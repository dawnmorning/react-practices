function App() {
  const App = document.createElement("h1");
  App.textContent = "Hello React";
  return App;
}

document.getElementById("root").appendChild(App());
