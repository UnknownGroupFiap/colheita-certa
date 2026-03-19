function BeneficiosCadastro() {
  return (
    <div className="contact-info">
      <h2 className="section-title">Por que se cadastrar?</h2>
      <p className="contact-intro">Ao criar sua conta, você terá acesso a todas as ferramentas da plataforma</p>

      <div className="info-cards">
        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-shop"></i>
          </div>
          <div className="info-content">
            <h3>Mercado Digital</h3>
            <p>Venda direto ao consumidor e para empresas, sem atravessadores</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-cloud-sun"></i>
          </div>
          <div className="info-content">
            <h3>Orientação Técnica</h3>
            <p>Receba alertas climáticos e calendário de plantio personalizado</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-graph-up"></i>
          </div>
          <div className="info-content">
            <h3>Controle Financeiro</h3>
            <p>Registre sua produção e acompanhe seus lucros de forma simples</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-people"></i>
          </div>
          <div className="info-content">
            <h3>Rede de Apoio</h3>
            <p>Conecte-se com outros produtores e técnicos especializados</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeneficiosCadastro;
