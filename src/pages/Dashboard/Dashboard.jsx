import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getDashboardData } from '../../data/mockData';
import '../../styles/dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('culturas');
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    // Carregar dados do dashboard
    loadDashboardData();

    // Atualizar a cada 30 segundos (simulação de tempo real)
    const interval = setInterval(loadDashboardData, 30000);
    return () => clearInterval(interval);
  }, [user]);

  const loadDashboardData = () => {
    const data = getDashboardData();
    setDashboardData(data);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Se não tiver dados ainda, mostrar loading
  if (!dashboardData) {
    return (
      <div className="dashboard-loading">
        <div className="spinner-large"></div>
        <p>Carregando dashboard...</p>
      </div>
    );
  }

  // Formatar data
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short'
    }).replace('.', '');
  };

  // Calcular dias restantes
  const getDaysUntil = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const diff = Math.ceil((date - today) / (1000 * 60 * 60 * 24));
    return diff;
  };

  // Obter cor baseada no status de crescimento
  const getProgressColor = (percentage) => {
    if (percentage >= 90) return '#22c55e'; // verde
    if (percentage >= 70) return '#eab308'; // amarelo
    if (percentage >= 50) return '#3b82f6'; // azul
    return '#6b7280'; // cinza
  };

  // Obter cor da fase
  const getFaseColor = (fase) => {
    const fases = {
      'Germinação': '#94a3b8',
      'Crescimento vegetativo': '#3b82f6',
      'Crescimento foliar': '#06b6d4',
      'Floração': '#a855f7',
      'Frutificação': '#f59e0b',
      'Maturação': '#eab308',
      'Pronta para colheita': '#22c55e'
    };
    return fases[fase] || '#6b7280';
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
            className={`nav-item ${activeTab === 'culturas' ? 'active' : ''}`}
            onClick={() => setActiveTab('culturas')}
          >
            <i className="bi bi-grid-3x3"></i>
            <span>Culturas Ativas</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'calendario' ? 'active' : ''}`}
            onClick={() => setActiveTab('calendario')}
          >
            <i className="bi bi-calendar-week"></i>
            <span>Calendário de Colheitas</span>
          </button>
          <button
            className={`nav-item ${activeTab === 'historico' ? 'active' : ''}`}
            onClick={() => setActiveTab('historico')}
          >
            <i className="bi bi-clock-history"></i>
            <span>Histórico</span>
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
            <h1>Gestão de Culturas</h1>
            <p className="welcome-message">
              Propriedade: {user?.tamanhoPropriedade || '25 hectares'} - {user?.cidade}, {user?.estado}
            </p>
          </div>
          <div className="header-right">
            <div className="header-stats">
              <div className="stat-badge">
                <i className="bi bi-grid-3x3"></i>
                <span>{dashboardData.culturasAtivas?.length || 0} culturas ativas</span>
              </div>
              <div className="stat-badge warning">
                <i className="bi bi-exclamation-triangle"></i>
                <span>{dashboardData.culturasAtivas?.filter(c => c.risco).length || 0} alertas</span>
              </div>
            </div>
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
          {activeTab === 'culturas' && (
            <div className="culturas-container">
              <div className="section-header">
                <h2>Culturas em Produção</h2>
                <p>Acompanhe o desenvolvimento de cada cultura plantada</p>
              </div>

              {/* Climate Widget integrado */}
              <div className="clima-widget">
                <div className="clima-widget-header">
                  <h3>Condições Atuais - {user?.cidade}, {user?.estado}</h3>
                  <span className="clima-update">Atualizado há 5 minutos</span>
                </div>
                <div className="clima-widget-content">
                  <div className="clima-current">
                    <div className="clima-temp">
                      <span className="temp-big">{dashboardData.weather.hoje.temperatura}°</span>
                      <div className="temp-minmax">
                        <span>{dashboardData.weather.hoje.minima}°</span>
                        <span className="divider">/</span>
                        <span>{dashboardData.weather.hoje.maxima}°</span>
                      </div>
                    </div>
                    <div className="clima-condition">
                      <i className="bi bi-cloud-sun"></i>
                      <span>{dashboardData.weather.hoje.condicao}</span>
                    </div>
                  </div>

                  <div className="clima-factors">
                    <div className="factor-item">
                      <i className="bi bi-droplet"></i>
                      <div className="factor-info">
                        <span className="factor-label">Umidade</span>
                        <span className="factor-value">{dashboardData.weather.hoje.umidade}%</span>
                      </div>
                    </div>
                    <div className="factor-item">
                      <i className="bi bi-umbrella"></i>
                      <div className="factor-info">
                        <span className="factor-label">Chuva</span>
                        <span className="factor-value">{dashboardData.weather.hoje.chanceChuva}%</span>
                      </div>
                    </div>
                    <div className="factor-item">
                      <i className="bi bi-wind"></i>
                      <div className="factor-info">
                        <span className="factor-label">Vento</span>
                        <span className="factor-value">{dashboardData.weather.hoje.vento} km/h</span>
                      </div>
                    </div>
                    <div className="factor-item">
                      <i className="bi bi-sun"></i>
                      <div className="factor-info">
                        <span className="factor-label">UV</span>
                        <span className="factor-value">Alto</span>
                      </div>
                    </div>
                  </div>

                  <div className="clima-forecast-mini">
                    {dashboardData.weather.proximos7Dias.slice(0, 5).map((dia, index) => (
                      <div key={index} className="forecast-mini-day">
                        <span className="mini-day">{dia.dia}</span>
                        <i className={`bi bi-${dia.chuva > 50 ? 'cloud-rain' : dia.chuva > 20 ? 'cloud' : 'sun'}`}></i>
                        <span className="mini-temp">{dia.max}°</span>
                        {dia.chuva > 30 && (
                          <span className="mini-rain">{dia.chuva}%</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="clima-recommendations">
                  <div className="recommendation-item optimal">
                    <i className="bi bi-check-circle"></i>
                    <span>Condições ideais para aplicação de defensivos nas próximas 48h</span>
                  </div>
                  {dashboardData.weather.proximos7Dias[2].chuva > 50 && (
                    <div className="recommendation-item warning">
                      <i className="bi bi-exclamation-triangle"></i>
                      <span>Chuva prevista para {dashboardData.weather.proximos7Dias[2].dia} - considere antecipar colheitas sensíveis</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="culturas-grid">
                {dashboardData.culturasAtivas.map(cultura => {
                  // Determinar recomendação baseada no clima e fase da cultura
                  const needsIrrigation = dashboardData.weather.hoje.umidade < 50 &&
                                         dashboardData.weather.hoje.chanceChuva < 30 &&
                                         cultura.irrigacao !== 'Suspensa';
                  const harvestWarning = cultura.diasAteColheita <= 7 &&
                                       dashboardData.weather.proximos7Dias.some(d => d.chuva > 60);

                  return (
                    <div key={cultura.id} className="cultura-card">
                      <div className="cultura-header">
                        <div className="cultura-title">
                          <h3>{cultura.nome}</h3>
                          <span className="area-badge">{cultura.area}</span>
                        </div>
                        {cultura.risco && (
                          <span className="risco-badge">
                            <i className="bi bi-exclamation-triangle"></i>
                            {cultura.risco}
                          </span>
                        )}
                      </div>

                      <div className="cultura-progress">
                        <div className="progress-header">
                          <span className="progress-label">Desenvolvimento</span>
                          <span className="progress-value">{cultura.statusCrescimento}%</span>
                        </div>
                        <div className="progress-bar-wrapper">
                          <div
                            className="progress-bar-fill"
                            style={{
                              width: `${cultura.statusCrescimento}%`,
                              backgroundColor: getProgressColor(cultura.statusCrescimento)
                            }}
                          ></div>
                        </div>
                        <div
                          className="fase-badge"
                          style={{ backgroundColor: getFaseColor(cultura.fase) }}
                        >
                          {cultura.fase}
                        </div>
                      </div>

                      <div className="cultura-timeline">
                        <div className="timeline-item">
                          <i className="bi bi-calendar-check"></i>
                          <div className="timeline-content">
                            <span className="timeline-label">Plantio</span>
                            <span className="timeline-date">{formatDate(cultura.dataPlantio)}</span>
                          </div>
                        </div>
                        <div className="timeline-divider">
                          <i className="bi bi-arrow-right"></i>
                        </div>
                        <div className="timeline-item">
                          <i className="bi bi-basket"></i>
                          <div className="timeline-content">
                            <span className="timeline-label">Colheita prevista</span>
                            <span className="timeline-date">{formatDate(cultura.previsaoColheita)}</span>
                          </div>
                        </div>
                      </div>

                      <div className="cultura-info">
                        <div className="info-row">
                          <span className="info-label">Dias até colheita:</span>
                          <span className="info-value">{cultura.diasAteColheita} dias</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Irrigação:</span>
                          <span className={`info-value ${cultura.irrigacao.toLowerCase()}`}>
                            {cultura.irrigacao}
                          </span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Última aplicação:</span>
                          <span className="info-value">{formatDate(cultura.ultimaAplicacao)}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Produção estimada:</span>
                          <span className="info-value strong">{cultura.producaoEstimada}</span>
                        </div>
                      </div>

                      {/* Recomendações baseadas no clima */}
                      {(needsIrrigation || harvestWarning) && (
                        <div className="cultura-clima-alert">
                          {needsIrrigation && (
                            <div className="clima-alert-item info">
                              <i className="bi bi-droplet"></i>
                              <span>Baixa umidade - irrigação recomendada</span>
                            </div>
                          )}
                          {harvestWarning && (
                            <div className="clima-alert-item warning">
                              <i className="bi bi-cloud-rain"></i>
                              <span>Chuva prevista - avaliar antecipação</span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'calendario' && (
            <div className="calendario-container">
              <div className="section-header">
                <h2>Calendário de Colheitas</h2>
                <p>Próximas colheitas agendadas</p>
              </div>

              <div className="calendario-timeline">
                {dashboardData.calendarioColheitas.map((colheita, index) => {
                  const daysUntil = getDaysUntil(colheita.data);
                  const isUrgent = daysUntil <= 7;
                  const isSoon = daysUntil <= 14;

                  return (
                    <div
                      key={index}
                      className={`colheita-item ${isUrgent ? 'urgent' : isSoon ? 'soon' : ''}`}
                    >
                      <div className="colheita-date">
                        <span className="day">{new Date(colheita.data).getDate()}</span>
                        <span className="month">
                          {new Date(colheita.data).toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}
                        </span>
                        <span className="days-until">
                          {daysUntil === 0 ? 'Hoje' :
                           daysUntil === 1 ? 'Amanhã' :
                           `${daysUntil} dias`}
                        </span>
                      </div>
                      <div className="colheita-details">
                        <h3>{colheita.cultura}</h3>
                        <p className="quantidade">{colheita.quantidade}</p>
                        <span className={`status-badge ${colheita.status}`}>
                          {colheita.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="timeline-visual">
                <h3>Linha do Tempo - Próximos 30 dias</h3>
                <div className="timeline-chart">
                  {dashboardData.culturasAtivas.map(cultura => {
                    const daysUntil = cultura.diasAteColheita;
                    const position = Math.min((daysUntil / 30) * 100, 100);

                    return (
                      <div key={cultura.id} className="timeline-row">
                        <span className="cultura-name">{cultura.nome}</span>
                        <div className="timeline-track">
                          <div
                            className="harvest-marker"
                            style={{ left: `${position}%` }}
                            title={`${cultura.nome} - ${cultura.diasAteColheita} dias`}
                          >
                            <span className="marker-dot"></span>
                            <span className="marker-label">{cultura.diasAteColheita}d</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="timeline-scale">
                  <span>Hoje</span>
                  <span>7 dias</span>
                  <span>14 dias</span>
                  <span>21 dias</span>
                  <span>30 dias</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'historico' && (
            <div className="historico-container">
              <div className="section-header">
                <h2>Histórico de Colheitas</h2>
                <p>Registro das últimas colheitas realizadas</p>
              </div>

              <div className="historico-table">
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Cultura</th>
                      <th>Quantidade</th>
                      <th>Receita</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardData.historicoColheitas.map((item, index) => (
                      <tr key={index}>
                        <td>{formatDate(item.data)}</td>
                        <td className="cultura-name">{item.cultura}</td>
                        <td>{item.quantidade}</td>
                        <td className="receita">
                          R$ {item.receita.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </td>
                        <td>
                          <span className={`status-badge ${item.status}`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="historico-summary">
                <div className="summary-card">
                  <i className="bi bi-basket"></i>
                  <div className="summary-content">
                    <span className="summary-label">Total colhido este mês</span>
                    <span className="summary-value">18.300 kg</span>
                  </div>
                </div>
                <div className="summary-card">
                  <i className="bi bi-cash-coin"></i>
                  <div className="summary-content">
                    <span className="summary-label">Receita total</span>
                    <span className="summary-value">R$ 40.100,00</span>
                  </div>
                </div>
                <div className="summary-card">
                  <i className="bi bi-graph-up"></i>
                  <div className="summary-content">
                    <span className="summary-label">Média por colheita</span>
                    <span className="summary-value">R$ 6.683,33</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default Dashboard;