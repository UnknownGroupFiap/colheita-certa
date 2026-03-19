import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroInicio from './components/HeroInicio';
import PitchVideo from './components/PitchVideo';
import CardsValor from './components/CardsValor';
import EstatisticasImpacto from './components/EstatisticasImpacto';
import MercadoDigital from './components/MercadoDigital';
import AssistenciaTecnica from './components/AssistenciaTecnica';
import DiagnosticoRapido from './components/DiagnosticoRapido';
import CtaInicio from './components/CtaInicio';
import '../../styles/main.css';

function Inicio() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Header />

      <main id="main-content" role="main">
        <HeroInicio />
        <PitchVideo />
        <CardsValor />
        <EstatisticasImpacto />
        <MercadoDigital />
        <AssistenciaTecnica />
        <DiagnosticoRapido />
        <CtaInicio />
      </main>

      <Footer />
    </>
  );
}

export default Inicio;
