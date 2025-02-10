import style from "./CardUpdate.module.css";

const CardUpdate = ({ data, horario, servico}) => {
  return (
    <div className={style.card}>
      <p>Data: {data}</p>
      <p>Horario: {horario}</p>
      <p>Serviço: {servico}</p>
      <button onClick={() => console.log(servico)}>Atualizar</button>
    </div>
  );
};

export default CardUpdate;
