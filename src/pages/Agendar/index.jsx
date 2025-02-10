import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import style from "./Agendar.module.css";

const Agendar = () => {
  const { listagemServicos, servicos } = useAuth();
  const [listaServicos, setListaServicos] = useState([]);
  const [servico, setServico] = useState({
    servico: "",

    data: "",
    horario: "",
  });
  const [valor, setValor] = useState(0);

  useEffect(() => {
    async function carregarServicos() {
      const dados = await listagemServicos();
      setListaServicos(dados);
    }
    carregarServicos();
  }, []);

  const servicoSelecionado = (e) => {
    const servicoEncontrado = listaServicos.find(
      (servico) => servico.nome === e.target.value
    );
    setValor(servicoEncontrado ? servicoEncontrado.preco : 0);
    setServico({ ...servico, servico: e.target.value });
  };

  const enviarServico = async (e) => {
    e.preventDefault();
    const resultado = await servicos(servico.servico, servico.data, servico.horario);
    
    if (resultado.success) {
      setServico({
        servico: "",
        data: "",
        horario: "",
      });
      setValor(0);
      
      // Resetar o select para a opção padrão
      const selectElement = document.getElementById("servico");
      selectElement.value = "";
      
      // Resetar os inputs de data e hora
      document.getElementById("data").value = "";
      document.getElementById("horario").value = "";
      
      alert("Serviço agendado com sucesso!");
    } else {
      alert(resultado.error || "Erro ao agendar serviço");
    }
  };

  return (
    <section className={style.agendar}>
      <h1>Faça seu agendamento</h1>

      <form onSubmit={enviarServico} className={style.form__agendar}>
        <div className={style.formGroup}>
          <label htmlFor="servico">Serviço</label>
          <select
            id="servico"
            name="servico"
            onChange={servicoSelecionado}
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
        <button type="submit" className={style.button__agendar}>
          Agendar
        </button>
      </form>
      <h3>Valor: R$ {valor.toFixed(2).replace(".", ",")}</h3>
    </section>
  );
};

export default Agendar;
