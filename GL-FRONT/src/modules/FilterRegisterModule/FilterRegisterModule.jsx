import "./FilterRegisterModule.css";
import SearchIcon from "../../assets/search-icon.png";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function FilterRegisterModule() {
  const { showModalRegisterRawMaterial, setShowModalRegisterRawMaterial } =
    useContext(GeneralContext);
  function handleClickOpenModal() {
    setShowModalRegisterRawMaterial(true);
  }
  return (
    <div className="filter-register-div">
      <button onClick={handleClickOpenModal}>Registrar</button>
      <div className="toInput">
        <input type="text" />
        <img src={SearchIcon} className="searchIcon" alt="" />
      </div>
    </div>
  );
}
