import { Link } from "react-router";
import style from "./Cabecalho.module.css";

const Cabecalho = () => {
    return (
        <header className={style.cabecalho}>
            <nav>
                <ul className={style.lista}>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>

                    <li>
                        <Link to="/agendar">Agendar</Link>
                    </li>
                    <li>
                        <Link to="/reservas">Reservas</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Cabecalho;
