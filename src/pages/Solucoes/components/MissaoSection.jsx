function MissaoSection() {
  return (
    <section className="missao">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Nossa Missão</h2>
          <p className="section-subtitle">
            Dar ao pequeno produtor o poder da tecnologia acessível, para que possa prosperar,
            aumentar sua renda e contribuir para um sistema de alimentos mais justo e sustentável
          </p>
        </div>
        
        <div className="pilares-grid">
          <div className="pilar-card">
            <div className="pilar-icon">
              <i className="bi bi-people"></i>
            </div>
            <h3>Foco no Produtor</h3>
            <p>Cada ferramenta é pensada para resolver seus problemas reais do dia a dia</p>
          </div>
          
          <div className="pilar-card">
            <div className="pilar-icon">
              <i className="bi bi-phone"></i>
            </div>
            <h3>Tecnologia Simples</h3>
            <p>Fácil de usar, funciona até sem internet e não precisa saber de tecnologia</p>
          </div>
          
          <div className="pilar-card">
            <div className="pilar-icon">
              <i className="bi bi-heart"></i>
            </div>
            <h3>Impacto Social</h3>
            <p>Ajudando a garantir o alimento na mesa e o desenvolvimento do campo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissaoSection;
