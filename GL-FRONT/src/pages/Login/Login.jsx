import "./Login.css";
import Logomarca from "../../assets/lm-logomarca.png";
import api from "../../services/api";

export default function Login() {
  async function handleTest() {
    try {
      const result = await api.get("/users");
      console.log(result);
    } catch (error) {}
  }
  return (
    <div className="login-container">
      <section>
        <img src={Logomarca} alt="" />
        <form action="">
          <h1>Login</h1>
          <label htmlFor="user-name">Usuario: </label>
          <input
            type="text"
            id="user-name"
            placeholder="Digite seu nome de Usuário"
            required
          />
          <label htmlFor="pass">Senha: </label>
          <input
            type="password"
            id="pass"
            placeholder="Digite sua senha"
            required
          />
          <button type="submit" id="button-submit">
            Login
          </button>
        </form>
        <button onClick={() => handleTest()}>TESTE</button>
      </section>
    </div>
  );
}
