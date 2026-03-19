function MercadoDigital() {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="feature-grid">
          <div className="card-image">
            <img src="/home-marketplace-direto.jpg" alt="Marketplace direto para produtores" />
          </div>
          <div className="feature-content">
            <h2 className="feature-title">Seu Mercado Digital</h2>
            <p className="feature-description">
              Conecte-se com restaurantes, mercados, feiras e consumidores. Venda sem atravessadores e aumente seu lucro
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Anuncie sua produção em segundos</span>
              </li>
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Acesse facilmente programas do governo (PAA e PNAE)</span>
              </li>
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Organize vendas em grupo para grandes pedidos</span>
              </li>
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Receba com segurança e facilite a entrega</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MercadoDigital;
