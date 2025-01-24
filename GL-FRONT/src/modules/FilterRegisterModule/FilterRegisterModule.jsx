import "./FilterRegisterModule.css";
import SearchIcon from "../../assets/search-icon.png";

export default function FilterRegisterModule({ functionOpenModal }) {
  function handleClickOpenModal() {
    functionOpenModal(true);
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
