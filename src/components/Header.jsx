import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const checkboxRef = useRef(null);
  const { isAuthenticated, user, logout } = useAuth();

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

  const handleLogout = () => {
    logout();
    navigate('/');
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

            {/* Botões de autenticação */}
            <li role="none" className="nav-auth-buttons">
              {isAuthenticated ? (
                <div className="auth-menu">
                  <Link
                    to="/dashboard"
                    className="nav-link dashboard-link"
                    onClick={handleLinkClick}
                  >
                    <i className="bi bi-speedometer2"></i>
                    Dashboard
                  </Link>
                  <button className="logout-button" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right"></i>
                    Sair
                  </button>
                </div>
              ) : (
                <div className="auth-buttons">
                  <Link
                    to="/login"
                    className="nav-link login-link"
                    onClick={handleLinkClick}
                  >
                    Entrar
                  </Link>
                  <Link
                    to="/registro"
                    className="nav-link register-link"
                    onClick={handleLinkClick}
                  >
                    Criar Conta
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
