function OutrasFerramentas() {
  return (
    <section className="recursos-adicionais">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Outras ferramentas</h2>
        </div>
        
        <div className="adicionais-grid">
          <div className="adicional-card">
            <div className="adicional-icon">
              <i className="bi bi-geo"></i>
            </div>
            <h3>Acesso à Terra</h3>
            <p>Caminhos para ajudar na regularização de posse e uso da terra</p>
          </div>
          
          <div className="adicional-card">
            <div className="adicional-icon">
              <i className="bi bi-piggy-bank"></i>
            </div>
            <h3>Serviços Financeiros</h3>
            <p>Acesso a microcrédito e simulação de financiamentos</p>
          </div>
          
          <div className="adicional-card">
            <div className="adicional-icon">
              <i className="bi bi-box-seam"></i>
            </div>
            <h3>Agregação de Valor</h3>
            <p>Passo a passo para processar seus produtos e vender melhor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OutrasFerramentas;
