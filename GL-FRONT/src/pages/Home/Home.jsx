import "./Home.css";
import Header from "../../modules/Header/Header";
import NavBar from "../../modules/NavBar/NavBar";

export default function Home() {
  return (
    <div className="home-container">
      <NavBar />
      <div className="content-container">
        <Header />
      </div>
    </div>
  );
}
