import { useState } from 'react';
import ResultadoDiagnostico from './ResultadoDiagnostico';
import '../../../styles/diagnostico.css';

const PERGUNTAS = [
  {
    id: 'producao',
    etapa: 'Etapa 1 de 5',
    pergunta: 'Qual é o seu tipo de produção?',
    opcoes: [
      { valor: 'hortalicas', texto: 'Hortaliças', icone: 'bi-flower1' },
      { valor: 'leite', texto: 'Leite', icone: 'bi-droplet' },
      { valor: 'graos', texto: 'Grãos', icone: 'bi-grid-3x3-gap' },
      { valor: 'frutas', texto: 'Frutas', icone: 'bi-basket' },
      { valor: 'mista', texto: 'Produção mista', icone: 'bi-layers' },
    ],
  },
  {
    id: 'dificuldade',
    etapa: 'Etapa 2 de 5',
    pergunta: 'Qual a sua principal dificuldade hoje?',
    opcoes: [
      { valor: 'gastos', texto: 'Controlar gastos', icone: 'bi-cash-coin' },
      { valor: 'organizacao', texto: 'Organizar a produção', icone: 'bi-calendar-check' },
      { valor: 'vendas', texto: 'Vender melhor', icone: 'bi-shop' },
      { valor: 'produtividade', texto: 'Acompanhar produtividade', icone: 'bi-graph-up-arrow' },
      { valor: 'desperdicios', texto: 'Reduzir desperdícios', icone: 'bi-trash' },
    ],
  },
  {
    id: 'smartphone',
    etapa: 'Etapa 3 de 5',
    pergunta: 'Você tem smartphone no dia a dia?',
    opcoes: [
      { valor: 'sempre', texto: 'Sim, uso sempre', icone: 'bi-phone' },
      { valor: 'as_vezes', texto: 'Uso às vezes', icone: 'bi-phone-vibrate' },
      { valor: 'quase_nao', texto: 'Quase não uso', icone: 'bi-phone-landscape' },
    ],
  },
  {
    id: 'controle',
    etapa: 'Etapa 4 de 5',
    pergunta: 'Como você controla sua produção hoje?',
    opcoes: [
      { valor: 'papel', texto: 'No papel', icone: 'bi-journal-text' },
      { valor: 'whatsapp', texto: 'No WhatsApp', icone: 'bi-chat-dots' },
      { valor: 'planilhas', texto: 'Em planilhas', icone: 'bi-file-earmark-spreadsheet' },
      { valor: 'nao_controla', texto: 'Não controlo direito', icone: 'bi-question-circle' },
      { valor: 'sistema', texto: 'Já uso algum sistema', icone: 'bi-laptop' },
    ],
  },
  {
    id: 'prioridade',
    etapa: 'Etapa 5 de 5',
    pergunta: 'O que seria mais valioso para você agora?',
    opcoes: [
      { valor: 'organizacao', texto: 'Mais organização', icone: 'bi-clipboard-check' },
      { valor: 'vendas', texto: 'Mais vendas', icone: 'bi-cart-check' },
      { valor: 'financeiro', texto: 'Mais controle financeiro', icone: 'bi-piggy-bank' },
      { valor: 'praticidade', texto: 'Mais praticidade', icone: 'bi-lightning' },
      { valor: 'seguranca', texto: 'Mais segurança na gestão', icone: 'bi-shield-check' },
    ],
  },
];

const FUNCIONALIDADES = {
  controleFinanceiro: {
    nome: 'Controle Financeiro Simplificado',
    descricao: 'Registre gastos e ganhos de forma fácil, saiba exatamente quanto custa produzir e quanto está lucrando',
    icone: 'bi-calculator',
  },
  mercadoDigital: {
    nome: 'Mercado Digital Direto',
    descricao: 'Anuncie seus produtos e venda direto para restaurantes, mercados e consumidores, sem atravessadores',
    icone: 'bi-shop',
  },
  calendarioAgricola: {
    nome: 'Calendário Agrícola Personalizado',
    descricao: 'Saiba a época certa de plantio e colheita para a sua região e tipo de cultura',
    icone: 'bi-calendar-check',
  },
  alertasClimaticos: {
    nome: 'Alertas Climáticos e de Pragas',
    descricao: 'Receba avisos de geada, seca e pragas na hora certa para proteger sua produção',
    icone: 'bi-cloud-sun',
  },
  registroDigital: {
    nome: 'Registro Digital da Produção',
    descricao: 'Substitua o caderno e organize tudo no celular: produção, perdas, vendas e estoque',
    icone: 'bi-journal-text',
  },
  relatorios: {
    nome: 'Relatórios de Desempenho',
    descricao: 'Acompanhe indicadores da sua produção com relatórios fáceis de entender',
    icone: 'bi-graph-up',
  },
  redeApoio: {
    nome: 'Rede de Apoio e Orientação',
    descricao: 'Conecte-se com técnicos, veterinários e outros produtores para trocar experiências',
    icone: 'bi-people',
  },
  acessoMobile: {
    nome: 'Acompanhamento pelo Celular',
    descricao: 'Acesse tudo direto do smartphone, com interface simples e pensada para o produtor',
    icone: 'bi-phone',
  },
  planejamento: {
    nome: 'Planejamento de Atividades',
    descricao: 'Organize as tarefas do dia a dia da propriedade e não perca prazos importantes',
    icone: 'bi-list-check',
  },
  programasGoverno: {
    nome: 'Acesso a Programas do Governo',
    descricao: 'Facilite seu cadastro no PAA e PNAE e venda para programas governamentais',
    icone: 'bi-building',
  },
};

function gerarRecomendacao(respostas) {
  const { dificuldade, smartphone, controle, prioridade } = respostas;

  const funcs = [];
  let titulo = '';
  let mensagem = '';
  let motivo = '';

  // Lógica principal baseada na dificuldade
  if (dificuldade === 'gastos') {
    funcs.push('controleFinanceiro', 'relatorios');
    titulo = 'Foco em Gestão Financeira';
    mensagem = 'Seu perfil mostra que controlar custos e entender a rentabilidade é prioridade. Preparamos recomendações para você ter clareza total sobre seus números.';
  } else if (dificuldade === 'vendas') {
    funcs.push('mercadoDigital', 'programasGoverno');
    titulo = 'Foco em Comercialização';
    mensagem = 'Vender melhor e com menos intermediários é o caminho para aumentar sua renda. Veja as ferramentas que vão conectar você diretamente ao mercado.';
  } else if (dificuldade === 'organizacao') {
    funcs.push('registroDigital', 'planejamento');
    titulo = 'Foco em Organização';
    mensagem = 'Organizar a rotina e ter controle do que acontece na propriedade é o primeiro passo para crescer. Veja como a plataforma pode ajudar.';
  } else if (dificuldade === 'produtividade') {
    funcs.push('relatorios', 'calendarioAgricola');
    titulo = 'Foco em Produtividade';
    mensagem = 'Acompanhar indicadores e planejar melhor o ciclo produtivo podem fazer sua produção render muito mais. Confira nossas sugestões.';
  } else {
    funcs.push('alertasClimaticos', 'calendarioAgricola');
    titulo = 'Foco em Redução de Perdas';
    mensagem = 'Reduzir desperdícios começa com informação na hora certa. Com alertas e planejamento, você protege sua produção e seu lucro.';
  }

  // Complemento baseado no controle atual
  if (controle === 'papel' || controle === 'nao_controla') {
    if (!funcs.includes('registroDigital')) {
      funcs.push('registroDigital');
    }
  } else if (controle === 'whatsapp') {
    if (!funcs.includes('planejamento')) {
      funcs.push('planejamento');
    }
  }

  // Complemento baseado no uso de smartphone
  if (smartphone === 'sempre') {
    if (!funcs.includes('acessoMobile')) {
      funcs.push('acessoMobile');
    }
  } else if (smartphone === 'quase_nao') {
    if (!funcs.includes('redeApoio')) {
      funcs.push('redeApoio');
    }
  }

  // Complemento baseado na prioridade
  if (prioridade === 'financeiro' && !funcs.includes('controleFinanceiro')) {
    funcs.push('controleFinanceiro');
  } else if (prioridade === 'vendas' && !funcs.includes('mercadoDigital')) {
    funcs.push('mercadoDigital');
  } else if (prioridade === 'organizacao' && !funcs.includes('planejamento')) {
    funcs.push('planejamento');
  } else if (prioridade === 'praticidade' && !funcs.includes('acessoMobile')) {
    funcs.push('acessoMobile');
  } else if (prioridade === 'seguranca' && !funcs.includes('relatorios')) {
    funcs.push('relatorios');
  }

  // Limitar a 4 funcionalidades
  const funcsFinal = funcs.slice(0, 4);

  // Montar motivo contextualizado
  const partes = [];
  if (dificuldade === 'gastos') {
    partes.push('sua necessidade de controlar melhor os custos');
  } else if (dificuldade === 'vendas') {
    partes.push('seu desejo de vender melhor e sem intermediários');
  } else if (dificuldade === 'organizacao') {
    partes.push('sua necessidade de organizar melhor a rotina produtiva');
  } else if (dificuldade === 'produtividade') {
    partes.push('seu objetivo de acompanhar e aumentar a produtividade');
  } else {
    partes.push('sua meta de reduzir perdas e desperdícios');
  }

  if (controle === 'papel' || controle === 'nao_controla') {
    partes.push('o fato de que você ainda não tem um controle digital');
  } else if (controle === 'planilhas') {
    partes.push('sua experiência com planilhas, que pode ser potencializada');
  }

  if (smartphone === 'sempre') {
    partes.push('seu uso frequente do celular, aproveitando ao máximo o acesso mobile');
  }

  motivo = 'Essas recomendações foram escolhidas com base em ' + partes.join(', ') + '. A combinação dessas ferramentas foi pensada para trazer resultados práticos para o seu dia a dia no campo.';

  // CTA baseado na dificuldade principal
  let ctaPrimario, ctaSecundario;
  if (dificuldade === 'vendas') {
    ctaPrimario = { texto: 'Criar minha conta', rota: '/cadastro', icone: 'bi-check-circle' };
    ctaSecundario = { texto: 'Conhecer a solução', rota: '/solucoes', icone: 'bi-arrow-right' };
  } else {
    ctaPrimario = { texto: 'Criar minha conta', rota: '/cadastro', icone: 'bi-check-circle' };
    ctaSecundario = { texto: 'Falar com a equipe', rota: '/contato', icone: 'bi-chat-dots' };
  }

  return {
    titulo,
    mensagem,
    motivo,
    funcionalidades: funcsFinal.map((key) => FUNCIONALIDADES[key]),
    ctaPrimario,
    ctaSecundario,
  };
}

function DiagnosticoRapido() {
  const [iniciado, setIniciado] = useState(false);
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);

  const perguntaAtual = PERGUNTAS[etapaAtual];

  function iniciar() {
    setIniciado(true);
    setEtapaAtual(0);
    setRespostas({});
    setResultado(null);
  }

  function selecionarOpcao(valor) {
    setRespostas((prev) => ({ ...prev, [perguntaAtual.id]: valor }));
  }

  function avancar() {
    if (etapaAtual < PERGUNTAS.length - 1) {
      setEtapaAtual((prev) => prev + 1);
    } else {
      const rec = gerarRecomendacao(respostas);
      setResultado(rec);
    }
  }

  function voltar() {
    if (etapaAtual > 0) {
      setEtapaAtual((prev) => prev - 1);
    }
  }

  function reiniciar() {
    setIniciado(false);
    setEtapaAtual(0);
    setRespostas({});
    setResultado(null);
  }

  // Estado inicial: mostra introdução
  if (!iniciado) {
    return (
      <section className="diagnostico-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Diagnóstico Rápido</h2>
            <p className="section-subtitle">
              Descubra quais ferramentas do Colheita Certa combinam mais com o seu perfil
            </p>
          </div>
          <div className="diagnostico-card">
            <div className="diagnostico-intro">
              <p className="diagnostico-intro-text">
                Responda 5 perguntas rápidas sobre sua produção e receba uma recomendação
                personalizada das funcionalidades mais úteis para você.
              </p>
              <button className="diagnostico-start-btn" onClick={iniciar}>
                <i className="bi bi-play-circle"></i>
                Começar diagnóstico
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Mostra resultado final
  if (resultado) {
    return (
      <section className="diagnostico-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sua Recomendação</h2>
            <p className="section-subtitle">
              Com base nas suas respostas, preparamos sugestões sob medida para você
            </p>
          </div>
          <div className="diagnostico-card">
            <ResultadoDiagnostico resultado={resultado} onReiniciar={reiniciar} />
          </div>
        </div>
      </section>
    );
  }

  // Mostra pergunta atual
  const respostaAtual = respostas[perguntaAtual.id] || null;

  return (
    <section className="diagnostico-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Diagnóstico Rápido</h2>
          <p className="section-subtitle">
            Descubra quais ferramentas do Colheita Certa combinam mais com o seu perfil
          </p>
        </div>
        <div className="diagnostico-card">
          <div className="diagnostico-progresso">
            {PERGUNTAS.map((_, i) => (
              <div
                key={i}
                className={`diagnostico-progresso-step${i <= etapaAtual ? ' ativo' : ''}`}
              />
            ))}
          </div>

          <p className="diagnostico-etapa-label">{perguntaAtual.etapa}</p>
          <h3 className="diagnostico-pergunta">{perguntaAtual.pergunta}</h3>

          <div className="diagnostico-opcoes">
            {perguntaAtual.opcoes.map((opcao) => (
              <button
                key={opcao.valor}
                className={`diagnostico-opcao${respostaAtual === opcao.valor ? ' selecionada' : ''}`}
                onClick={() => selecionarOpcao(opcao.valor)}
              >
                <span className="diagnostico-opcao-icon">
                  <i className={`bi ${opcao.icone}`}></i>
                </span>
                {opcao.texto}
              </button>
            ))}
          </div>

          <div className="diagnostico-navegacao">
            {etapaAtual > 0 && (
              <button className="diagnostico-btn-voltar" onClick={voltar}>
                <i className="bi bi-arrow-left"></i>
                Voltar
              </button>
            )}
            <button
              className="diagnostico-btn-avancar"
              disabled={!respostaAtual}
              onClick={avancar}
            >
              {etapaAtual < PERGUNTAS.length - 1 ? 'Próxima' : 'Ver resultado'}
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiagnosticoRapido;
