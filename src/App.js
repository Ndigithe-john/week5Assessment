import React from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import Switch from "./Components/Switch";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Card />
      <Switch />
      <LoginForm />
    </div>
  );
}

export default App;
