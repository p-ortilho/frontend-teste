import { Link, useNavigate } from "react-router";
import style from "./Registrar.module.css";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Registrar = () => {
  const [formulario, setFormulario] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const { registrar} = useAuth();

  const navigate = useNavigate();

  const enviarFormulario = async (e) => {
    e.preventDefault();
    const resultado = await registrar(formulario.nome, formulario.email, formulario.senha);

    if (!resultado) {
      alert("Usuario já existe!");
    } else {
      navigate("/");
    }

  };

  return (
    <form onSubmit={enviarFormulario} className={style.form__registrar}>
      <img src="./Image/logo.svg" alt="logo" />
      <h1 className={style.titulo}>Registrar</h1>
      <div className={style.container}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          id="nome"
          value={formulario.nome}
          onChange={(e) =>
            setFormulario({ ...formulario, nome: e.target.value })
          }
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={formulario.email}
          onChange={(e) =>
            setFormulario({ ...formulario, email: e.target.value })
          }
          required
        />
        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          id="senha"
          value={formulario.senha}
          onChange={(e) =>
            setFormulario({ ...formulario, senha: e.target.value })
          }
          required
        />
      </div>
      <button type="submit">Registrar</button>
      <Link to="/">Já tem uma conta? Faça login</Link>
    </form>
  );
};

export default Registrar;
