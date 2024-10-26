import "./Header.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext, useState } from "react";
import { removeItem } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import PhotoIcon from "../../assets/photo-icon.png";
import ExpandMoreIcon from "../../assets/user-expandm-icon.png";
import ExpandLessIcon from "../../assets/user-expandl-icon.png";

export default function Header() {
  const { titleContentHome, userData } = useContext(GeneralContext);
  const [hiddenOpenedBox, setHiddenOpenedBox] = useState(true);
  const navigate = useNavigate();
  const { id, name, last_name } = userData;
  function handleClickOpenedBox() {
    hiddenOpenedBox ? setHiddenOpenedBox(false) : setHiddenOpenedBox(true);
  }
  function handleLogout() {
    removeItem("tokenGL");
    removeItem("userEmail");
    return navigate("/login");
  }

  return (
    <header>
      <h1>{titleContentHome}</h1>
      <div className="user-things">
        <img src={PhotoIcon} alt="" className="user-photo" />
        <strong onClick={() => handleClickOpenedBox()}>
          {name + " " + last_name}
          <img src={hiddenOpenedBox ? ExpandMoreIcon : ExpandLessIcon} alt="" />
        </strong>
        <div className="openedBox" hidden={hiddenOpenedBox}>
          <p onClick={() => handleLogout()}>Sair</p>
          <p onClick={() => handleClickOpenedBox()}>Fechar</p>
        </div>
      </div>
    </header>
  );
}
