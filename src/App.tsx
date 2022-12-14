import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import Routes from "./app/routes";

function App() {
  return (
    <Provider store={store}>
       <Routes />
      </Provider>
   
  )
  
}

export default App;
