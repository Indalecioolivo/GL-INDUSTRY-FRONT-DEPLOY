import "./SearchModule.css";
import SearchIcon from "../../assets/search-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function SearchModule() {
  const { setShowModalRegisterFlow } = useContext(GeneralContext);
  return (
    <div className="filter-register-div">
      <button onClick={() => setShowModalRegisterFlow(true)}>Registrar</button>
      <div className="toInput">
        <input type="text" />
        <img src={SearchIcon} className="searchIcon" alt="" />
      </div>
    </div>
  );
}
