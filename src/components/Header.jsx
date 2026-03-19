import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';

function Header() {
  const location = useLocation();
  const checkboxRef = useRef(null);

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/solucoes', label: 'Soluções' },
    { to: '/recursos', label: 'Recursos' },
    { to: '/contato', label: 'Contato' },
  ];

  const handleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <header className="header">
      <nav className="nav-container" aria-label="Navegação principal">
        <div className="nav-wrapper">
          <Link to="/" className="logo-button" aria-label="Voltar para a página inicial">
            <img src="/logo.svg" alt="Logo Colheita Certa" className="logo-image" />
            <span className="logo-text">Colheita Certa</span>
          </Link>

          <input type="checkbox" id="menu-toggle" className="menu-toggle" ref={checkboxRef} />
          <label htmlFor="menu-toggle" className="mobile-menu-btn" aria-label="Abrir menu">
            <i className="bi bi-list menu-icon" aria-hidden="true"></i>
            <i className="bi bi-x close-icon" aria-hidden="true"></i>
          </label>

          <ul className="nav-menu" role="menubar">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li role="none" key={link.to}>
                  <Link
                    to={link.to}
                    className={`nav-link${isActive ? ' active' : ''}`}
                    role="menuitem"
                    aria-current={isActive ? 'page' : undefined}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
