function AssistenciaTecnica() {
  return (
    <section className="feature-section feature-reverse">
      <div className="container">
        <div className="feature-grid">
          <div className="feature-content">
            <h2 className="feature-title">Assistência Técnica no seu Celular</h2>
            <p className="feature-description">
              Receba orientações para sua lavoura, criação ou pesca. Avisos importantes na hora certa
            </p>
            <ul className="feature-list">
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Calendários de plantio e colheita por região</span>
              </li>
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Previsão do tempo e avisos de chuva forte, geada ou seca</span>
              </li>
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Dicas para o manejo da terra e controle de pragas</span>
              </li>
              <li className="feature-item">
                <i className="bi bi-check-circle-fill check-icon"></i>
                <span>Vídeos e áudios curtos, fáceis de entender</span>
              </li>
            </ul>
          </div>
          <div className="card-image">
            <img src="/home-suporte-tecnico.jpg" alt="Assistência técnica digital" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AssistenciaTecnica;
