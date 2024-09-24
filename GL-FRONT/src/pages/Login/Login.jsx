import "./Login.css";
import Logomarca from "../../assets/lm-logomarca.png";

export default function Login() {
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
      </section>
    </div>
  );
}
