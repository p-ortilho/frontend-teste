import { useState, useEffect } from "react";
import Card from "../../componente/Card";
import { useAuth } from "../../hooks/useAuth";
import style from "./Home.module.css";

const Home = () => {
    const { MeusServicos } = useAuth();
    const [listaServicos, setListaServicos] = useState([]);


    useEffect(() => {
        async function carregarServicos() {
            const dados = await MeusServicos();
            setListaServicos(dados);
        }
        carregarServicos();
    }, []);


    return (
        <section className={style.home}>
            <h1>Historico de reservas, ultimas 5 reservas</h1>
            <div className={style.cards}>
                {listaServicos.slice(-5).map((servico, index) => (
                    <Card 
                        key={index}
                        data={servico.data} 
                        horario={servico.hora} 
                        servico={servico.servico} 

                    />
                ))}
            </div>
        </section>
    );
};

export default Home;
