import { Link } from 'react-router-dom';

function ResultadoDiagnostico({ resultado, onReiniciar }) {
  return (
    <div>
      <div className="resultado-header">
        <div className="resultado-icon">
          <i className="bi bi-check-lg"></i>
        </div>
        <h3 className="resultado-titulo">{resultado.titulo}</h3>
        <p className="resultado-mensagem">{resultado.mensagem}</p>
      </div>

      <div className="resultado-lista">
        {resultado.funcionalidades.map((func, index) => (
          <div className="resultado-item" key={index}>
            <i className={`bi ${func.icone} resultado-item-icon`}></i>
            <div className="resultado-item-content">
              <h4>{func.nome}</h4>
              <p>{func.descricao}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="resultado-motivo">
        <p className="resultado-motivo-titulo">Por que essas recomendações?</p>
        <p className="resultado-motivo-texto">{resultado.motivo}</p>
      </div>

      <div className="resultado-acoes">
        <Link to={resultado.ctaPrimario.rota} className="resultado-btn-primario">
          <i className={`bi ${resultado.ctaPrimario.icone}`}></i>
          {resultado.ctaPrimario.texto}
        </Link>
        <Link to={resultado.ctaSecundario.rota} className="resultado-btn-secundario">
          <i className={`bi ${resultado.ctaSecundario.icone}`}></i>
          {resultado.ctaSecundario.texto}
        </Link>
      </div>

      <div className="resultado-reiniciar">
        <button className="resultado-reiniciar-btn" onClick={onReiniciar}>
          <i className="bi bi-arrow-counterclockwise"></i>
          Refazer diagnóstico
        </button>
      </div>
    </div>
  );
}

export default ResultadoDiagnostico;
