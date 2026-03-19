import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBannerSolucoes from './components/HeroBannerSolucoes';
import DesafiosGrid from './components/DesafiosGrid';
import ImportanciaAgricultura from './components/ImportanciaAgricultura';
import MissaoSection from './components/MissaoSection';
import AlinhamentoOds from './components/AlinhamentoOds';
import CtaSolucoes from './components/CtaSolucoes';
import '../../styles/solucoes.css';

function Solucoes() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Header />

      <main id="main-content" role="main">
        <HeroBannerSolucoes />
        <DesafiosGrid />
        <ImportanciaAgricultura />
        <MissaoSection />
        <AlinhamentoOds />
        <CtaSolucoes />
      </main>

      <Footer />
    </>
  );
}

export default Solucoes;
