import style from "./CardUpdate.module.css";

const CardUpdate = ({ data, horario, servico, setOpen}) => {
  return (
    <div className={style.card}>
      <p>Data: {data}</p>
      <p>Horario: {horario}</p>
      <p>Serviço: {servico}</p>
      <button onClick={() => setOpen(true)}>Atualizar</button>
    </div>
  );
};

export default CardUpdate;
