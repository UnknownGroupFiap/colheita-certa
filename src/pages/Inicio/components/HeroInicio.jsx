import { Link } from 'react-router-dom';

function HeroInicio() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="container">
          <span className="badge">Tecnologia para o campo</span>
          <h1 className="hero-title">Aumente sua produção e sua renda no campo</h1>
          <p className="hero-subtitle">
            O Colheita Certa é a plataforma completa que conecta pequenos produtores a novos
            mercados, oferece assistência técnica digital e ajuda a aumentar seus lucros
          </p>
          <div className="button-group">
            <Link to="/cadastro" className="btn btn-primary">Cadastre-se Grátis</Link>
            <Link to="/solucoes" className="btn btn-secondary">Conheça a Solução</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroInicio;
