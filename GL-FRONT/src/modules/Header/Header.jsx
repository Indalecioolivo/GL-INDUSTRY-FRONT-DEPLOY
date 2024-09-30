import "./Header.css";
import { GeneralContext } from "../../context/GeneralContext";
import { useContext } from "react";

export default function Header() {
  const { titleContentHome } = useContext(GeneralContext);
  return (
    <header>
      <h1>{titleContentHome}</h1>
    </header>
  );
}
