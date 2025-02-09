import { Link } from 'react-router';
import style from './Registrar.module.css'

const Registrar = () => {
  return (
    <form onSubmit={console.log("teste")}>
        <img src="./Image/logo.svg" alt="logo" />
        <h1 className={style.titulo}>Registrar</h1>
        <div className={style.container}>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Nome" id="nome"/>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email"/>
            <label htmlFor="senha">Senha</label>
            <input type="text" placeholder="Senha" id="senha"/>
        </div>
        <button type="submit">Registrar</button>
        <Link to="/">Já tem uma conta? Faça login</Link>
    </form>
  )
}

export default Registrar;
