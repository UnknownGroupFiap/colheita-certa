function FerramentasPrincipais() {
  return (
    <section className="recursos">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">As principais ferramentas da plataforma</h2>
          <p className="section-subtitle">Criado pensando em quem trabalha no campo</p>
        </div>
        
        <div className="recursos-grid">
          <div className="recurso-card">
            <div className="recurso-header">
              <div className="recurso-icon">
                <i className="bi bi-cloud-sun"></i>
              </div>
              <h3>Orientação técnica gratuita</h3>
            </div>
            <p className="recurso-desc">Dicas personalizadas para o seu tipo de plantação, cultura ou criação</p>
            <ul className="sub-features">
              <li>
                <i className="bi bi-calendar-check"></i>
                <span>Calendário com as épocas certas de plantio e colheita</span>
              </li>
              <li>
                <i className="bi bi-cloud-lightning"></i>
                <span>Avisos de clima (geada, seca), pragas e outros riscos</span>
              </li>
              <li>
                <i className="bi bi-play-circle"></i>
                <span>Notificações em linguagem simples, ícones e vídeos</span>
              </li>
            </ul>
          </div>
          
          <div className="recurso-card">
            <div className="recurso-header">
              <div className="recurso-icon">
                <i className="bi bi-shop"></i>
              </div>
              <h3>Mercado Digital Direto</h3>
            </div>
            <p className="recurso-desc">Anuncie sua produção para restaurantes, mercados e consumidores</p>
            <ul className="sub-features">
              <li>
                <i className="bi bi-megaphone"></i>
                <span>Publicação de ofertas para restaurantes, mercados e consumidores</span>
              </li>
              <li>
                <i className="bi bi-building"></i>
                <span>Acesso fácil a programas do governo (PAA e PNAE)</span>
              </li>
              <li>
                <i className="bi bi-people"></i>
                <span>Organize vendas em grupo e facilite a entrega"</span>
              </li>
            </ul>
          </div>
          
          <div className="recurso-card">
            <div className="recurso-header">
              <div className="recurso-icon">
                <i className="bi bi-calculator"></i>
              </div>
              <h3>Controle Financeiro</h3>
            </div>
            <p className="recurso-desc">Saiba exatamente quanto gasta, quanto lucra e onde pode melhorar</p>
            <ul className="sub-features">
              <li>
                <i className="bi bi-journal-text"></i>
                <span>Registro de produção, perdas, gastos e preços</span>
              </li>
              <li>
                <i className="bi bi-graph-up"></i>
                <span>Relatórios fáceis de entender sobre sua produção e lucro</span>
              </li>
              <li>
                <i className="bi bi-lightbulb"></i>
                <span>Dicas automáticas para ajudar você a melhorar</span>
              </li>
            </ul>
          </div>
          
          <div className="recurso-card">
            <div className="recurso-header">
              <div className="recurso-icon">
                <i className="bi bi-chat-dots"></i>
              </div>
              <h3>Rede de Apoio</h3>
            </div>
            <p className="recurso-desc">Conecte-se com outros produtores e especialistas para trocar experiências</p>
            <ul className="sub-features">
              <li>
                <i className="bi bi-chat-square-text"></i>
                <span>Grupos de conversa para trocar experiências</span>
              </li>
              <li>
                <i className="bi bi-person-badge"></i>
                <span>Acesso a técnicos, veterinários e agrônomos</span>
              </li>
              <li>
                <i className="bi bi-star"></i>
                <span>"Divulgação de novidades e técnicas de baixo custo</span>
              </li>
            </ul>
          </div>     
        </div>
      </div>
    </section>
  );
}

export default FerramentasPrincipais;
