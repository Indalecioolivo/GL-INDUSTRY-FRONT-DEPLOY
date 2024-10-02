import "./SearchModule.css";
import SearchIcon from "../../assets/search-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function SearchModule() {
  const { showModalRegister, setShowModalRegister } =
    useContext(GeneralContext);
  return (
    <div className="filter-register-div">
      <button
        onClick={() =>
          setShowModalRegister({ ...showModalRegister, showModal: true })
        }
      >
        Registrar
      </button>
      <div className="toInput">
        <input type="text" />
        <img src={SearchIcon} className="searchIcon" alt="" />
      </div>
    </div>
  );
}
