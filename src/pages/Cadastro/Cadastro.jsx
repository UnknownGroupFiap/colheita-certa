import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroBannerCadastro from './components/HeroBannerCadastro';
import BeneficiosCadastro from './components/BeneficiosCadastro';
import FormularioCadastro from './components/FormularioCadastro';
import '../../styles/contato.css';
import '../../styles/cadastro.css';

function Cadastro() {
  return (
    <>
      <a href="#main-content" className="skip-link">Pular para o conteúdo principal</a>
      <Header />

      <main id="main-content" role="main">
        <HeroBannerCadastro />

        <section className="contact-section">
          <div className="container">
            <div className="contact-grid">
              <BeneficiosCadastro />
              <FormularioCadastro />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Cadastro;
