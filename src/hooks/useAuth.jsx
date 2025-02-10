import { useContext } from "react";
import { ContextAuth } from "../context/contextAuth";

export const useAuth = () => {
  const { user, setUser } = useContext(ContextAuth);

  async function registrar(nome, email, senha) {
    const response = await fetch("http://127.0.0.1:5000/registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: nome,
        email: email,
        senha: senha,
      }),
    });

    if (response.ok) {
      const novoUsuario = { email };
      setUser(novoUsuario);
      return true;
    } else {
      return false;
    }
  }

  async function login(email, senha) {
    const response = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    });

    if (response.ok) {
      const token = await response.json();
      localStorage.setItem("token", token.token);
      setUser({ email });
      return true;
    } else {
      return false;
    }
  }

  async function MeusServicos() {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://127.0.0.1:5000/auth/servicos/${user.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  }

  async function servicosAtuais() {
    const token = localStorage.getItem("token");

    const response = await fetch(
      `http://127.0.0.1:5000/auth/servicos/${user.email}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const dados = await response.json();

    const dataAtual = new Date();

    const servicosFuturos = dados.filter((servico) => {
      const dataServico = new Date(servico.data);
      return dataServico > dataAtual;
    });

    return servicosFuturos;
  }

  async function servicos(servico, data, horario) {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://127.0.0.1:5000/auth/agendar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: user.email,
          servico: servico,
          data: data,
          horario: horario,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        return { success: false, error: "Falha ao agendar serviço" };
      }
    } catch (error) {
      return { success: false, error: "Erro de conexão" };
    }
  }

  async function listagemServicos() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://127.0.0.1:5000/auth/servicos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  }

  async function atualizarServico(servico, data, hora) {
    const token = localStorage.getItem("token");  
    const response = await fetch("http://127.0.0.1:5000/auth/meus-agendamentos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        servico: servico,
        data: data,
        hora: hora,
        email: user.email,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false };
    }
  }

  async function teste() {
    const response = await fetch("http://127.0.0.1:5000/");

    const data = await response.json();
    console.log(data);
  }
  return {
    user,
    registrar,
    teste,
    login,
    servicos,
    MeusServicos,
    listagemServicos,
    servicosAtuais,
    atualizarServico,
  };
};
