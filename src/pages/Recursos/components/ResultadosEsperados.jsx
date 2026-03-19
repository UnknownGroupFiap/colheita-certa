function ResultadosEsperados() {
  return (
    <section className="resultados-esperados">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resultados Esperados</h2>
        </div>
        
        <div className="resultados-grid">
          <div className="resultado-card">
            <div className="resultado-icon">
              <i className="bi bi-arrow-up-circle"></i>
            </div>
            <h3>Maior Produtividade</h3>
            <p>Aumento da produção por hectare e por trabalhador.</p>
          </div>
          
          <div className="resultado-card">
            <div className="resultado-icon">
              <i className="bi bi-currency-dollar"></i>
            </div>
            <h3>Mais Renda</h3>
            <p>Redução de perdas e melhor preço na comercialização.</p>
          </div>
          
          <div className="resultado-card">
            <div className="resultado-icon">
              <i className="bi bi-arrow-left-right"></i>
            </div>
            <h3>Menos Atravessadores</h3>
            <p>Acesso direto a mercados e compradores.</p>
          </div>
          
          <div className="resultado-card">
            <div className="resultado-icon">
              <i className="bi bi-tree"></i>
            </div>
            <h3>Sustentabilidade</h3>
            <p>Um jeito de produzir mais resistente ao clima e que cuida da terra</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResultadosEsperados;
