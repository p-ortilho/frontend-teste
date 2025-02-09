import { Link } from 'react-router';
import style from './Login.module.css'

const Login = () => {
  return (

    <form onSubmit={console.log("teste")}>
        <img src="./Image/logo.svg" alt="logo" />

        <h1 className={style.titulo}>Login</h1>
        <div className={style.container}>
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Email" id="email"/>
            <label htmlFor="senha">Senha</label>

            <input type="text" placeholder="Senha" id="senha"/>
        </div>
        <button type="submit">Login</button>
        <Link to="/registrar">Não tem uma conta? Registre-se</Link>
    </form>
  )
}

export default Login;
