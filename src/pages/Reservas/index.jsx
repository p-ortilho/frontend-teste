import { useState, useEffect } from "react";
import CardUpdate from "../../componente/CardUpdate";
import { useAuth } from "../../hooks/useAuth";
import style from "./Reservas.module.css";
import Dialog from "../../componente/Dialog";
const Reservas = () => {
    const { servicosAtuais } = useAuth();
    const [listaServicos, setListaServicos] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function carregarServicos() {
            const dados = await servicosAtuais();
            setListaServicos(dados);
            setOpen(false);
        }
        carregarServicos();
    }, []);


    return (
        <section className={style.reservas}>
            <h1>Todas as reservas agendadas</h1>
            <div className={style.cards__reservas}>
                {listaServicos.map((servico, index) => (
                    <CardUpdate 
                        key={index}
                        id={servico.id}
                        data={servico.data} 
                        horario={servico.hora} 
                        servico={servico.servico}
                        setOpen={setOpen}
                    />
                ))}
            </div>
            <Dialog open={open} setOpen={setOpen} />
        </section>
    );
};




export default Reservas;
