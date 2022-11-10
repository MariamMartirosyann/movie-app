import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Routes from "./app/routes";
import { Router } from "react-router-dom";

function App() {
  return <Routes />;
}

export default App;
