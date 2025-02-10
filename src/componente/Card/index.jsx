import style from "./Card.module.css";

const Card = ({ data, horario, servico }) => {
  return (
    <div className={style.card}>

      <p>Data: {data}</p>
      <p>Horario: {horario}</p>
      <p>Serviço: {servico}</p>
    </div>
  );
};

export default Card;
