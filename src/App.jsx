import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavigationBar from "./components/NavigationBar";


function App() {
  return (
    <div className="App">
     <NavigationBar/>
      <Outlet />
    </div>
  );
}
export default App;
