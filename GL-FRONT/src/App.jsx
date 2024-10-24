import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./modules/Header/Header";
import NavBar from "./modules/NavBar/NavBar";

function App() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
