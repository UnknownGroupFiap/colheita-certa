import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBannerContato from './components/HeroBannerContato';
import InformacoesContato from './components/InformacoesContato';
import FormularioContato from './components/FormularioContato';
import FaqSection from './components/FaqSection';
import '../../styles/contato.css';

function Contato() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Header />

      <main id="main-content" role="main">
        <HeroBannerContato />

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <InformacoesContato />
              <FormularioContato />
            </div>
          </div>
        </section>

        <FaqSection />
      </main>

      <Footer />
    </>
  );
}

export default Contato;
