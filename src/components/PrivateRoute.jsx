import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    // Mostrar um loading enquanto verifica a autenticação
    return (
      <div className="loading-container">
        <div className="spinner-large"></div>
        <p>Carregando...</p>
      </div>
    );
  }

  // Se não estiver autenticado, redireciona para o login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Se estiver autenticado, renderiza o componente filho
  return children;
}

export default PrivateRoute;