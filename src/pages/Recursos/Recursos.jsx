import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBannerRecursos from './components/HeroBannerRecursos';
import GestaoRural from './components/GestaoRural';
import FerramentasPrincipais from './components/FerramentasPrincipais';
import OutrasFerramentas from './components/OutrasFerramentas';
import ResultadosEsperados from './components/ResultadosEsperados';
import CtaRecursos from './components/CtaRecursos';
import '../../styles/recursos.css';

function Recursos() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Header />

      <main id="main-content" role="main">
        <HeroBannerRecursos />
        <GestaoRural />
        <FerramentasPrincipais />
        <OutrasFerramentas />
        <ResultadosEsperados />
        <CtaRecursos />
      </main>

      <Footer />
    </>
  );
}

export default Recursos;
