import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import style from "./FormularioAtualizar.module.css";

const FormularioAtualizar = ({ setOpen }) => {
  const { listagemServicos, atualizarServico } = useAuth();
  const [listaServicos, setListaServicos] = useState([]);
  const [servico, setServico] = useState({
    servico: "", 
    data: "", 
    horario: ""
  });

  useEffect(() => {
    async function carregarServicos() {
      const dados = await listagemServicos();
      setListaServicos(dados);
    }
    carregarServicos();
  }, []);

  const atualizar = async (e) => {
    e.preventDefault();
    const resultado = await atualizarServico(servico.servico, servico.data, servico.horario);
    if (resultado.success) {
      const dados = await listagemServicos();
      setListaServicos(dados);
      setOpen(false);
    } else {
      alert("Erro ao atualizar o serviço");
    }
  };


  return (
    <form onSubmit={atualizar} className={style.form__atualizar}>
        <div className={style.formAtualizar}>
          <label htmlFor="servico">Serviço</label>
          <select
            id="servico"
            name="servico"
            onChange={(e) => setServico({ ...servico, servico: e.target.value })}
            required
          >
            <option value="">Selecione um serviço</option>
            {listaServicos.map((servico) => (
              <option
                key={servico.id}
                value={servico.nome}
              >
                {servico.nome}
              </option>
            ))}
          </select>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            required
            onChange={(e) => setServico({ ...servico, data: e.target.value })}
          />
          <label htmlFor="horario">Horário</label>
          <input
            type="time"
            id="horario"
            name="horario"
            onChange={(e) =>
              setServico({ ...servico, horario: e.target.value })
            }
            required
          />
        </div>
        <button type="submit" className={style.button__atualizar}>
          Atualizar
        </button>
      </form>
  );
};

export default FormularioAtualizar;
