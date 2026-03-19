function ImportanciaAgricultura() {
  return (
    <section className="importancia-agricultura">
      <div className="container">
        <div className="importancia-grid">
          <div className="importancia-content">
            <h2 className="section-title">Por que a agricultura familiar importa</h2>
            <p className="importancia-text">Milhões de famílias produzem boa parte dos alimentos que chegam à sua mesa e sustentam a economia de pequenas cidades em todo o país</p>
            <ul className="stats-list">
              <li className="stat-item-inline">
                <span className="stat-badge">84%</span>
                <span>dos estabelecimentos rurais brasileiros são de agricultura familiar</span>
              </li>
              <li className="stat-item-inline">
                <span className="stat-badge">70%</span>
                <span>do feijão consumido no Brasil vem desses produtores</span>
              </li>
              <li className="stat-item-inline">
                <span className="stat-badge">90%</span>
                <span>dos municípios com até 20 mil habitantes dependem da agricultura familiar</span>
              </li>
            </ul>
          </div>
          
          <div className="importance-image">
            <img src="/solucoes-importancia.jpg" alt="Agricultura familiar" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImportanciaAgricultura;
