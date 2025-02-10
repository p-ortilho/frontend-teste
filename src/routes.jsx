import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import ContextAuthProvider from './context/contextAuth';
import RotaProtegida from './componente/RotaProtegida';
import Layout from './componente/Layout';
import Home from './pages/Home';
import Agendar from './pages/Agendar';
import Reservas from './pages/Reservas';

const Rotas = () => {
  return (
    <BrowserRouter>
      <ContextAuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route element={
            <RotaProtegida>
              <Layout />
            </RotaProtegida>
          }>
            <Route path="/home" element={<Home />} />
            <Route path="/agendar" element={<Agendar />} />
            <Route path="/reservas" element={<Reservas />} />
          </Route>
        </Routes>
      </ContextAuthProvider>

    </BrowserRouter>
  );
};

export default Rotas;
