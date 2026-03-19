import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Solucoes from './pages/Solucoes/Solucoes';
import Recursos from './pages/Recursos/Recursos';
import Contato from './pages/Contato/Contato';
import Cadastro from './pages/Cadastro/Cadastro';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/solucoes" element={<Solucoes />} />
      <Route path="/recursos" element={<Recursos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default App;
