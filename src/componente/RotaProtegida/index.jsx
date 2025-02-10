import { Navigate } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const RotaProtegida = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default RotaProtegida;