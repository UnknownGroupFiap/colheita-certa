function DesafiosGrid() {
  return (
    <section className="desafios">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Principais desafios da agricultura familiar</h2>
          <p className="section-subtitle">Problemas reais que afetam sua renda e sua produção no campo</p>
        </div>
        
        <div className="desafios-grid">
          <div className="desafio-card">
            <div className="desafio-header">
              <div className="desafio-icon">
                <i className="bi bi-cash-coin"></i>
              </div>
              <h3>Preços baixos</h3>
            </div>
            <p className="desafio-texto">Atravessadores ficam com grande parte do lucro, deixando pouco para quem produz</p>
            <div className="solucao-box">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p><strong>Nossa solução:</strong> um mercado digital que conecta você direto aos compradores</p>
            </div>
          </div>
          
          <div className="desafio-card">
            <div className="desafio-header">
              <div className="desafio-icon">
                <i className="bi bi-exclamation-triangle"></i>
              </div>
              <h3>Perdas na produção</h3>
            </div>
            <p className="desafio-texto">Sem orientação técnica adequada, muita produção se perde por pragas, clima ou colheita no momento errado</p>
            <div className="solucao-box">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p><strong>Nossa solução:</strong> alertas do clima e um calendário agrícola para a sua produção</p>
            </div>
          </div>

          <div className="desafio-card">
            <div className="desafio-header">
              <div className="desafio-icon">
                <i className="bi bi-door-closed"></i>
              </div>
              <h3>Acesso limitado a mercados</h3>
            </div>
            <p className="desafio-texto">Difícil chegar em mercados maiores, feiras regionais e programas governamentais de compra</p>
            <div className="solucao-box">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p><strong>Nossa solução:</strong> acesso fácil ao PAA, PNAE e a uma rede de compradores cadastrados</p>
            </div>
          </div>

          <div className="desafio-card">
            <div className="desafio-header">
              <div className="desafio-icon">
                <i className="bi bi-clipboard-x"></i>
              </div>
              <h3>Falta de controle financeiro</h3>
            </div>
            <p className="desafio-texto">Difícil saber exatamente quanto custa produzir, quanto está lucrando e onde pode melhorar</p>
            <div className="solucao-box">
              <svg className="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <p><strong>Nossa solução:</strong> ferramentas fáceis para controlar seus gastos e ganhos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesafiosGrid;
