import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Inicio from './pages/Inicio/Inicio';
import Solucoes from './pages/Solucoes/Solucoes';
import Recursos from './pages/Recursos/Recursos';
import Contato from './pages/Contato/Contato';
import Cadastro from './pages/Cadastro/Cadastro';
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solucoes" element={<Solucoes />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
