import { Link, useNavigate } from "react-router";
import style from "./Login.module.css";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {

  const [formulario, setFormulario] = useState({
    email: "",
    senha: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const resultado = await login(formulario.email, formulario.senha);
    if (resultado) {
      navigate("/home");
    } else {
      alert("Email ou senha inválidos");
    }
  };


  return (
    
    <form onSubmit={enviarFormulario} className={style.form__login}>
      <img src="./Image/logo.svg" alt="logo" />


      <h1 className={style.titulo}>Login</h1>
      <div className={style.container}>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="Email" id="email"  value={formulario.email} onChange={(e) => setFormulario({ ...formulario, email: e.target.value })} required/>
        <label htmlFor="senha">Senha</label>

        <input type="password" placeholder="Senha" id="senha" value={formulario.senha} onChange={(e) => setFormulario({ ...formulario, senha: e.target.value })} required/>
      </div>
      <button type="submit">Login</button>
      <Link to="/registrar">Não tem uma conta? Registre-se</Link>

    </form>
  );
};

export default Login;
