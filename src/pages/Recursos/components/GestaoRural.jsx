function GestaoRural() {
  return (
    <section className="gestao-rural">
      <div className="container">
        <div className="gestao-grid">
          <div className="gestao-content">
            <h2 className="section-title">Tudo que você precisa em um só lugar</h2>
            <p className="gestao-intro">Ferramentas práticas para produzir melhor e vender direto, sem complicação</p>
            
            <ul className="gestao-list">
              <li className="gestao-item">
                <div className="gestao-icon">
                  <i className="bi bi-bell"></i>
                </div>
                <div className="gestao-texto">
                  <h3>Orientação no momento certo</h3>
                  <p>Avisos e dicas na hora que você mais precisa</p>
                </div>
              </li>
              
              <li className="gestao-item">
                <div className="gestao-icon">
                  <i className="bi bi-cart3"></i>
                </div>
                <div className="gestao-texto">
                  <h3>Venda sem atravessador</h3>
                  <p>Conecte-se direto com quem quer comprar</p>
                </div>
              </li>
              
              <li className="gestao-item">
                <div className="gestao-icon">
                  <i className="bi bi-bar-chart"></i>
                </div>
                <div className="gestao-texto">
                  <h3>Controle simples</h3>
                  <p>Acompanhe seus gastos e ganhos de forma fácil</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="gestao-image">
            <img src="/recursos-gestao-rural.jpg" alt="Gestão Rural" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GestaoRural;
