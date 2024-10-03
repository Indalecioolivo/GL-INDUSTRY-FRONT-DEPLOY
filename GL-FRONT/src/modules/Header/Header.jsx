import "./Header.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext, useState } from "react";
import PhotoIcon from "../../assets/photo-icon.png";
import ExpandMoreIcon from "../../assets/user-expandm-icon.png";
import ExpandLessIcon from "../../assets/user-expandl-icon.png";

export default function Header() {
  const { titleContentHome } = useContext(GeneralContext);
  const [hiddenOpenedBox, setHiddenOpenedBox] = useState(true);

  function handleClickOpenedBox() {
    hiddenOpenedBox ? setHiddenOpenedBox(false) : setHiddenOpenedBox(true);
  }

  return (
    <header>
      <h1>{titleContentHome}</h1>
      <div className="user-things">
        <img src={PhotoIcon} alt="" className="user-photo" />
        <strong onClick={() => handleClickOpenedBox()}>
          User Name
          <img src={hiddenOpenedBox ? ExpandMoreIcon : ExpandLessIcon} alt="" />
        </strong>
        <div className="openedBox" hidden={hiddenOpenedBox}>
          <p>Sair</p>
          <p onClick={() => handleClickOpenedBox()}>Fechar</p>
        </div>
      </div>
    </header>
  );
}
