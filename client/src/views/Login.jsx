import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth";

const Login = () => {

  const { authenticated, login } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", {email, password})
    login(email, password) //integração com contexto/api
  };

  return (
    <section className="login-container">
      <div className="login-card">
        <p>{String(authenticated)}</p>
        <h2>Login</h2>
        <form className="form-login">
          <input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <div className="div-button-login">
          <button id="button-login" onClick={handleSubmit}>
            Entrar
          </button>
          <a href="/">
            <button id="button-login">Voltar</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login
