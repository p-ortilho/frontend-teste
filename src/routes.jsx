import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/Login';
import Registrar from './pages/Registrar';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrar" element={<Registrar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
