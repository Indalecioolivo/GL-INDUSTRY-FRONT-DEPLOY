import "./Login.css";
import { useContext, useState } from "react";
import { setItem } from "../../utils/storage";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "../../context/GeneralContext";
import Logomarca from "../../assets/lm-logomarca.png";
import api from "../../services/api";

export default function Login() {
  const { setUserData } = useContext(GeneralContext);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    userEmail: "",
    userPassword: "",
  });

  function handleChange(e) {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const result = await api.post("/login", { credentials });
      if (result.status === 200) {
        const { token, id, name, last_name } = result.data;
        setItem("tokenGL", token);
        setUserData({ id, name, last_name });

        navigate("/");
      }
    } catch (error) {
      if (error.status === 404) {
        return alert(error.response.data.message);
      } else {
        return alert("Algo deu errado.");
      }
    }
  }

  return (
    <div className="login-container">
      <section>
        <img src={Logomarca} alt="" />
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <h1>Login</h1>
          <label htmlFor="user-name">Usuario: </label>
          <input
            type="text"
            id="userName"
            name="userEmail"
            placeholder="Digite seu email de Usuário"
            onChange={(e) => handleChange(e)}
            required
          />
          <label htmlFor="pass">Senha: </label>
          <input
            type="password"
            id="userPassword"
            name="userPassword"
            placeholder="Digite sua senha"
            onChange={(e) => handleChange(e)}
            required
          />
          <button type="submit" id="button-submit">
            Login
          </button>
        </form>
      </section>
    </div>
  );
}
