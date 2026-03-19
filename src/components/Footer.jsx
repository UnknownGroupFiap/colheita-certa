import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <section className="footer-section" aria-labelledby="footer-about">
          <div className="footer-logo">
            <img src="/logo-white.png" alt="Logo Colheita Certa" className="footer-logo-image" />
            <span>Colheita Certa</span>
          </div>
          <p className="footer-description">
            A plataforma completa que ajuda pequenos produtores a aumentar sua renda e reduzir perdas através da tecnologia.
          </p>
        </section>
        
        <nav className="footer-section" aria-labelledby="footer-links">
          <h3 id="footer-links">Links Rápidos</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Início</Link></li>
            <li><Link to="/solucoes" className="footer-link">Soluções</Link></li>
            <li><Link to="/recursos" className="footer-link">Recursos</Link></li>
            <li><Link to="/contato" className="footer-link">Contato</Link></li>
          </ul>
        </nav>
        
        <section className="footer-section" aria-labelledby="footer-info">
          <h3 id="footer-info">Sobre</h3>
          <p className="footer-info-text">Desenvolvido pela equipe RAP como parte do projeto Agrotech.</p>
          <p className="footer-info-text">Alinhado aos objetivos de desenvolvimento sustentável da ONU.</p>
        </section>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Colheita Certa. Tecnologia para transformar a agricultura familiar</p>
      </div>
    </footer>
  );
}

export default Footer;
