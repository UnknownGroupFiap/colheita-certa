function InformacoesContato() {
  return (
    <div className="contact-info">
      <h2 className="section-title">Nossos Canais</h2>
      <p className="contact-intro">Tire suas dúvidas ou envie sugestões pelos canais abaixo</p>

      <div className="info-cards">
        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-envelope"></i>
          </div>
          <div className="info-content">
            <h3>Email</h3>
            <p>contato@colheitacerta.com.br</p>
            <p>suporte@colheitacerta.com.br</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-telephone"></i>
          </div>
          <div className="info-content">
            <h3>Telefone</h3>
            <p>(11) 3000-0000</p>
            <p>WhatsApp: (11) 99999-9999</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-geo-alt"></i>
          </div>
          <div className="info-content">
            <h3>Localização</h3>
            <p>São Paulo, SP</p>
            <p>Brasil</p>
          </div>
        </div>

        <div className="info-card">
          <div className="info-icon">
            <i className="bi bi-clock"></i>
          </div>
          <div className="info-content">
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta: 8h às 18h</p>
            <p>Sábado: 8h às 12h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformacoesContato;
