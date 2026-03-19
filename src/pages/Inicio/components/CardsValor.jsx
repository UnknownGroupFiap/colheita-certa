function CardsValor() {
  return (
    <section className="value-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tudo que você precisa em uma única plataforma</h2>
          <p className="section-subtitle">
            Criada especialmente para agricultores familiares, criadores, pescadores e produtores de pequena escala
          </p>
        </div>

        <div className="cards-grid">
          <div className="card card-green">
            <div className="card-icon card-icon-green">
              <i className="bi bi-graph-up-arrow"></i>
            </div>
            <h3 className="card-title">Aumente sua Renda</h3>
            <p className="card-text">
              Venda direto ao consumidor e para empresas, sem atravessadores
            </p>
          </div>

          <div className="card card-blue">
            <div className="card-icon card-icon-blue">
              <i className="bi bi-shield-check"></i>
            </div>
            <h3 className="card-title">Reduza Perdas</h3>
            <p className="card-text">
              Receba alertas climáticos, calendários de plantio e recomendações na hora certa para sua colheita
            </p>
          </div>

          <div className="card card-purple">
            <div className="card-icon card-icon-purple">
              <i className="bi bi-hand-thumbs-up"></i>
            </div>
            <h3 className="card-title">Fácil de Usar</h3>
            <p className="card-text">
              Aplicativo simples, funciona até sem internet e tem vídeos fáceis de entender. Feito pensando em você
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardsValor;
