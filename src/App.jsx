import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@contexts/AuthContext';
import { PrivateRoute, ThemeToggle } from '@components';
import Inicio from '@pages/Inicio/Inicio';
import Solucoes from '@pages/Solucoes/Solucoes';
import Recursos from '@pages/Recursos/Recursos';
import Contato from '@pages/Contato/Contato';
import Cadastro from '@pages/Cadastro/Cadastro';
import Login from '@pages/Login/Login';
import Registro from '@pages/Registro/Registro';
import EmDesenvolvimento from '@pages/EmDesenvolvimento/EmDesenvolvimento';

function App() {
  return (
    <AuthProvider>
      <ThemeToggle />
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
              <EmDesenvolvimento />
            </PrivateRoute>
          }
        />
        <Route
          path="/em-desenvolvimento"
          element={
            <PrivateRoute>
              <EmDesenvolvimento />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;