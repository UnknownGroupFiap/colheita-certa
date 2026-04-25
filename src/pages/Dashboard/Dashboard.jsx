import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-logo">
            <i className="bi bi-leaf"></i>
            Colheita Certa
          </h2>
        </div>

        <nav className="sidebar-nav">
          <button
            className="nav-item active"
          >
            <i className="bi bi-grid-3x3"></i>
            <span>Dashboard</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            <i className="bi bi-box-arrow-left"></i>
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1>Dashboard</h1>
            <p className="welcome-message">
              Bem-vindo, {user?.nome || 'Usuário'}
            </p>
          </div>
          <div className="header-right">
            <div className="user-profile">
              <div className="user-avatar">
                <i className="bi bi-person-circle"></i>
              </div>
              <div className="user-info">
                <span className="user-name">{user?.nome || 'Usuário'}</span>
                <span className="user-role">Produtor</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="dashboard-content">
          <div className="work-in-progress">
            <div className="wip-icon">
              <i className="bi bi-hammer"></i>
            </div>
            <h2>Dashboard em Desenvolvimento</h2>
            <p>Estamos trabalhando para trazer as melhores funcionalidades para você gerenciar sua produção agrícola.</p>
            <div className="wip-features">
              <h3>Em breve:</h3>
              <ul>
                <li><i className="bi bi-check-circle"></i> Acompanhamento de culturas em tempo real</li>
                <li><i className="bi bi-check-circle"></i> Calendário de colheitas inteligente</li>
                <li><i className="bi bi-check-circle"></i> Integração com dados climáticos</li>
                <li><i className="bi bi-check-circle"></i> Análise de produtividade</li>
                <li><i className="bi bi-check-circle"></i> Conexão direta com compradores</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;