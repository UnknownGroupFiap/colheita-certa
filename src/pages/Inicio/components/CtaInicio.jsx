import { Link } from 'react-router-dom';

function CtaInicio() {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title">Pronto para transformar sua produção?</h2>
        <p className="cta-subtitle">
          Junte-se aos produtores que já estão aumentando a renda com o Colheita Certa
        </p>
        <div className="button-group">
          <Link to="/cadastro" className="btn btn-light">Cadastre-se Grátis</Link>
          <Link to="/contato" className="btn btn-outline">Conheça a Solução</Link>
        </div>
        <p className="cta-note">
          * Alinhado aos Objetivos de Desenvolvimento Sustentável da ONU (ODS 2)
        </p>
      </div>
    </section>
  );
}

export default CtaInicio;
