// Mock Data para o Dashboard
export const mockData = {
  // Dados do usuário
  user: {
    id: 'user-001',
    nome: 'João da Silva',
    email: 'joao.silva@colheitacerta.com',
    telefone: '(11) 99999-9999',
    avatar: null,
    tipoProducao: 'Hortaliças e Frutas',
    tamanhoPropriedade: '25 hectares',
    cidade: 'Campinas',
    estado: 'SP',
    experiencia: 'veterano',
    dataCadastro: '2023-01-15',
    plano: 'Premium',
    status: 'Ativo'
  },

  // Culturas em Produção
  culturasAtivas: [
    {
      id: 'cult-001',
      nome: 'Tomate Cereja',
      area: '2 hectares',
      dataPlantio: '2024-10-15',
      previsaoColheita: '2025-01-20',
      diasAteColheita: 28,
      statusCrescimento: 75,
      fase: 'Frutificação',
      irrigacao: 'Normal',
      risco: null,
      ultimaAplicacao: '2024-12-18',
      producaoEstimada: '6000 kg'
    },
    {
      id: 'cult-002',
      nome: 'Alface Americana',
      area: '1.5 hectares',
      dataPlantio: '2024-11-20',
      previsaoColheita: '2025-01-10',
      diasAteColheita: 18,
      statusCrescimento: 85,
      fase: 'Maturação',
      irrigacao: 'Reduzida',
      risco: null,
      ultimaAplicacao: '2024-12-10',
      producaoEstimada: '4500 unidades'
    },
    {
      id: 'cult-003',
      nome: 'Cenoura',
      area: '3 hectares',
      dataPlantio: '2024-10-01',
      previsaoColheita: '2025-01-05',
      diasAteColheita: 13,
      statusCrescimento: 92,
      fase: 'Pronta para colheita',
      irrigacao: 'Suspensa',
      risco: null,
      ultimaAplicacao: '2024-12-05',
      producaoEstimada: '8000 kg'
    },
    {
      id: 'cult-004',
      nome: 'Beterraba',
      area: '2 hectares',
      dataPlantio: '2024-09-25',
      previsaoColheita: '2024-12-30',
      diasAteColheita: 7,
      statusCrescimento: 95,
      fase: 'Pronta para colheita',
      irrigacao: 'Suspensa',
      risco: 'Prazo de colheita',
      ultimaAplicacao: '2024-12-01',
      producaoEstimada: '5500 kg'
    },
    {
      id: 'cult-005',
      nome: 'Pimentão Verde',
      area: '1 hectare',
      dataPlantio: '2024-09-10',
      previsaoColheita: '2025-01-25',
      diasAteColheita: 33,
      statusCrescimento: 70,
      fase: 'Frutificação',
      irrigacao: 'Normal',
      risco: null,
      ultimaAplicacao: '2024-12-20',
      producaoEstimada: '3000 kg'
    },
    {
      id: 'cult-006',
      nome: 'Couve',
      area: '0.5 hectare',
      dataPlantio: '2024-11-01',
      previsaoColheita: '2025-01-15',
      diasAteColheita: 23,
      statusCrescimento: 80,
      fase: 'Crescimento foliar',
      irrigacao: 'Normal',
      risco: null,
      ultimaAplicacao: '2024-12-15',
      producaoEstimada: '2000 maços'
    }
  ],

  // Calendário de Colheitas
  calendarioColheitas: [
    { data: '2024-12-30', cultura: 'Beterraba', quantidade: '5500 kg', status: 'agendada' },
    { data: '2025-01-05', cultura: 'Cenoura', quantidade: '8000 kg', status: 'agendada' },
    { data: '2025-01-10', cultura: 'Alface Americana', quantidade: '4500 unidades', status: 'agendada' },
    { data: '2025-01-15', cultura: 'Couve', quantidade: '2000 maços', status: 'agendada' },
    { data: '2025-01-20', cultura: 'Tomate Cereja', quantidade: '6000 kg', status: 'agendada' },
    { data: '2025-01-25', cultura: 'Pimentão Verde', quantidade: '3000 kg', status: 'agendada' }
  ],

  // Histórico de Colheitas
  historicoColheitas: [
    { data: '2024-12-20', cultura: 'Alface Crespa', quantidade: '3000 unidades', receita: 4500.00, status: 'concluída' },
    { data: '2024-12-15', cultura: 'Rúcula', quantidade: '1500 maços', receita: 3000.00, status: 'concluída' },
    { data: '2024-12-10', cultura: 'Tomate Italiano', quantidade: '4000 kg', receita: 12000.00, status: 'concluída' },
    { data: '2024-12-05', cultura: 'Cenoura', quantidade: '3500 kg', receita: 7000.00, status: 'concluída' },
    { data: '2024-11-30', cultura: 'Beterraba', quantidade: '2800 kg', receita: 5600.00, status: 'concluída' },
    { data: '2024-11-25', cultura: 'Pimentão Amarelo', quantidade: '2000 kg', receita: 8000.00, status: 'concluída' }
  ],

  // Métricas principais - Alinhadas com o propósito da Colheita Certa
  metrics: {
    // Produção e Colheita
    producaoMensal: {
      valor: 3250,
      unidade: 'kg',
      variacao: 15.3,
      meta: 3000,
      periodo: 'Dezembro 2024',
      descricao: 'Total produzido este mês'
    },

    // Vendas e Receita
    vendasMensais: {
      valor: 28750.00,
      moeda: 'BRL',
      variacao: 12.5,
      meta: 25000.00,
      periodo: 'Dezembro 2024',
      descricao: 'Receita total do mês'
    },

    // Conexão com Mercado (principal benefício da plataforma)
    conexoesMercado: {
      valor: 47,
      unidade: 'compradores',
      variacao: 8,
      novos: 5,
      recorrentes: 42,
      descricao: 'Compradores conectados pela plataforma'
    },

    // Redução de Perdas (economia pela plataforma)
    reducaoPerdas: {
      valor: 84,
      unidade: '%',
      economizado: 3400.00,
      variacao: 12,
      meta: 80,
      descricao: 'Produtos vendidos vs desperdiçados'
    },

    // Assistência Técnica Digital (diagnóstico rápido)
    diagnosticosRealizados: {
      valor: 12,
      unidade: 'análises',
      problemasSolucionados: 10,
      economiaEstimada: 4500.00,
      descricao: 'Diagnósticos via plataforma'
    },

    // Preço Médio de Venda (melhoria via plataforma)
    precoMedioVenda: {
      valor: 8.85,
      unidade: 'R$/kg',
      aumentoPercentual: 22,
      precoMercadoTradicional: 7.25,
      descricao: 'Preço obtido via venda direta'
    }
  },

  // Dados de produção por mês (últimos 12 meses)
  producaoHistorico: [
    { mes: 'Jan', ano: 2024, quantidade: 2800, valor: 22400, cultura: 'Tomate' },
    { mes: 'Fev', ano: 2024, quantidade: 2650, valor: 21200, cultura: 'Tomate' },
    { mes: 'Mar', ano: 2024, quantidade: 3100, valor: 24800, cultura: 'Tomate' },
    { mes: 'Abr', ano: 2024, quantidade: 2950, valor: 23600, cultura: 'Alface' },
    { mes: 'Mai', ano: 2024, quantidade: 3200, valor: 25600, cultura: 'Alface' },
    { mes: 'Jun', ano: 2024, quantidade: 3350, valor: 26800, cultura: 'Alface' },
    { mes: 'Jul', ano: 2024, quantidade: 3150, valor: 25200, cultura: 'Cenoura' },
    { mes: 'Ago', ano: 2024, quantidade: 3400, valor: 27200, cultura: 'Cenoura' },
    { mes: 'Set', ano: 2024, quantidade: 3500, valor: 28000, cultura: 'Beterraba' },
    { mes: 'Out', ano: 2024, quantidade: 3300, valor: 26400, cultura: 'Diversos' },
    { mes: 'Nov', ano: 2024, quantidade: 3450, valor: 27600, cultura: 'Diversos' },
    { mes: 'Dez', ano: 2024, quantidade: 3250, valor: 28750, cultura: 'Diversos' }
  ],

  // Vendas por categoria
  vendasPorCategoria: [
    { categoria: 'Hortaliças', valor: 15800, porcentagem: 55 },
    { categoria: 'Frutas', valor: 8625, porcentagem: 30 },
    { categoria: 'Grãos', valor: 2875, porcentagem: 10 },
    { categoria: 'Outros', valor: 1450, porcentagem: 5 }
  ],

  // Principais clientes
  topClientes: [
    {
      id: 'cli-001',
      nome: 'Restaurante Sabor da Terra',
      tipo: 'Restaurante',
      totalCompras: 8500.00,
      frequencia: 'Semanal',
      ultimaCompra: '2024-12-20'
    },
    {
      id: 'cli-002',
      nome: 'Mercado Central',
      tipo: 'Varejo',
      totalCompras: 6200.00,
      frequencia: '2x semana',
      ultimaCompra: '2024-12-22'
    },
    {
      id: 'cli-003',
      nome: 'Feira Orgânica SP',
      tipo: 'Feira',
      totalCompras: 4800.00,
      frequencia: 'Semanal',
      ultimaCompra: '2024-12-21'
    },
    {
      id: 'cli-004',
      nome: 'Hotel Plaza',
      tipo: 'Hotel',
      totalCompras: 3500.00,
      frequencia: '3x semana',
      ultimaCompra: '2024-12-19'
    },
    {
      id: 'cli-005',
      nome: 'Quitanda do Zé',
      tipo: 'Varejo',
      totalCompras: 2750.00,
      frequencia: 'Diária',
      ultimaCompra: '2024-12-23'
    }
  ],

  // Atividades recentes
  atividadesRecentes: [
    {
      id: 'act-001',
      tipo: 'venda',
      icone: 'bi-cart-check',
      titulo: 'Nova venda realizada',
      descricao: 'Venda de 150kg de tomates para Restaurante Sabor da Terra',
      valor: 1200.00,
      timestamp: '2024-12-23T14:30:00',
      status: 'concluida'
    },
    {
      id: 'act-002',
      tipo: 'producao',
      icone: 'bi-plus-circle',
      titulo: 'Produção registrada',
      descricao: 'Colheita de 280kg de alface americana',
      valor: 280,
      timestamp: '2024-12-23T09:15:00',
      status: 'concluida'
    },
    {
      id: 'act-003',
      tipo: 'alerta',
      icone: 'bi-exclamation-triangle',
      titulo: 'Alerta climático',
      descricao: 'Previsão de geada para os próximos 3 dias',
      timestamp: '2024-12-22T18:00:00',
      status: 'ativo'
    },
    {
      id: 'act-004',
      tipo: 'pedido',
      icone: 'bi-box-seam',
      titulo: 'Novo pedido recebido',
      descricao: 'Pedido de 200kg de cenouras do Mercado Central',
      valor: 800.00,
      timestamp: '2024-12-22T11:45:00',
      status: 'pendente'
    },
    {
      id: 'act-005',
      tipo: 'meta',
      icone: 'bi-trophy',
      titulo: 'Meta atingida!',
      descricao: 'Meta de vendas mensais superada em 15%',
      timestamp: '2024-12-21T17:00:00',
      status: 'concluida'
    },
    {
      id: 'act-006',
      tipo: 'manutencao',
      icone: 'bi-wrench',
      titulo: 'Manutenção agendada',
      descricao: 'Manutenção do sistema de irrigação programada',
      timestamp: '2024-12-21T08:00:00',
      status: 'agendado'
    }
  ],

  // Estoque atual
  estoque: [
    {
      produto: 'Tomate',
      quantidade: 450,
      unidade: 'kg',
      valorUnitario: 8.00,
      valorTotal: 3600.00,
      status: 'normal',
      diasValidade: 5
    },
    {
      produto: 'Alface',
      quantidade: 280,
      unidade: 'unidades',
      valorUnitario: 3.50,
      valorTotal: 980.00,
      status: 'normal',
      diasValidade: 3
    },
    {
      produto: 'Cenoura',
      quantidade: 320,
      unidade: 'kg',
      valorUnitario: 4.00,
      valorTotal: 1280.00,
      status: 'baixo',
      diasValidade: 10
    },
    {
      produto: 'Beterraba',
      quantidade: 180,
      unidade: 'kg',
      valorUnitario: 5.00,
      valorTotal: 900.00,
      status: 'normal',
      diasValidade: 12
    },
    {
      produto: 'Couve',
      quantidade: 150,
      unidade: 'maços',
      valorUnitario: 2.50,
      valorTotal: 375.00,
      status: 'critico',
      diasValidade: 2
    }
  ],

  // Tarefas/Lembretes
  tarefas: [
    {
      id: 'task-001',
      titulo: 'Preparar solo para próximo plantio',
      descricao: 'Área norte - preparação para plantio de milho',
      prazo: '2024-12-28',
      prioridade: 'alta',
      status: 'pendente',
      categoria: 'plantio'
    },
    {
      id: 'task-002',
      titulo: 'Aplicar fertilizante orgânico',
      descricao: 'Canteiros de hortaliças - setor 3',
      prazo: '2024-12-25',
      prioridade: 'media',
      status: 'em_andamento',
      categoria: 'manutencao'
    },
    {
      id: 'task-003',
      titulo: 'Entregar pedido Mercado Central',
      descricao: '200kg cenouras + 100kg beterrabas',
      prazo: '2024-12-24',
      prioridade: 'alta',
      status: 'pendente',
      categoria: 'entrega'
    },
    {
      id: 'task-004',
      titulo: 'Reunião com cooperativa',
      descricao: 'Discussão sobre novos contratos de fornecimento',
      prazo: '2024-12-26',
      prioridade: 'media',
      status: 'agendado',
      categoria: 'administrativo'
    }
  ],

  // Análise de custos
  custos: {
    total: 16625.00,
    categorias: [
      { nome: 'Insumos', valor: 5500.00, porcentagem: 33 },
      { nome: 'Mão de obra', valor: 6800.00, porcentagem: 41 },
      { nome: 'Transporte', valor: 2100.00, porcentagem: 13 },
      { nome: 'Energia/Água', valor: 1225.00, porcentagem: 7 },
      { nome: 'Outros', valor: 1000.00, porcentagem: 6 }
    ]
  },

  // Previsão do tempo
  clima: {
    hoje: {
      temperatura: 22,
      maxima: 28,
      minima: 18,
      condicao: 'Parcialmente nublado',
      umidade: 65,
      chanceChuva: 20,
      vento: 15
    },
    proximos7Dias: [
      { dia: 'Seg', max: 29, min: 19, chuva: 10, condicao: 'Sol' },
      { dia: 'Ter', max: 27, min: 18, chuva: 30, condicao: 'Nublado' },
      { dia: 'Qua', max: 25, min: 17, chuva: 60, condicao: 'Chuva' },
      { dia: 'Qui', max: 24, min: 16, chuva: 40, condicao: 'Chuva fraca' },
      { dia: 'Sex', max: 26, min: 17, chuva: 20, condicao: 'Parcialmente nublado' },
      { dia: 'Sáb', max: 28, min: 18, chuva: 15, condicao: 'Sol' },
      { dia: 'Dom', max: 30, min: 20, chuva: 5, condicao: 'Sol' }
    ]
  },

  // Metas e objetivos
  metas: [
    {
      id: 'meta-001',
      titulo: 'Aumentar produção em 20%',
      prazo: '2025-03-31',
      progresso: 65,
      status: 'em_andamento',
      valorAtual: 3250,
      valorMeta: 3900
    },
    {
      id: 'meta-002',
      titulo: 'Reduzir perdas para menos de 3%',
      prazo: '2025-02-28',
      progresso: 80,
      status: 'em_andamento',
      valorAtual: 4.2,
      valorMeta: 3.0
    },
    {
      id: 'meta-003',
      titulo: 'Conquistar certificação orgânica',
      prazo: '2025-06-30',
      progresso: 45,
      status: 'em_andamento',
      etapasCompletas: 5,
      etapasTotal: 11
    },
    {
      id: 'meta-004',
      titulo: 'Expandir base de clientes em 30%',
      prazo: '2025-04-30',
      progresso: 55,
      status: 'em_andamento',
      valorAtual: 47,
      valorMeta: 61
    }
  ],

  // Notificações
  notificacoes: [
    {
      id: 'notif-001',
      tipo: 'info',
      titulo: 'Relatório mensal disponível',
      mensagem: 'Seu relatório de dezembro está pronto para visualização',
      lida: false,
      timestamp: '2024-12-23T10:00:00'
    },
    {
      id: 'notif-002',
      tipo: 'alerta',
      titulo: 'Estoque baixo',
      mensagem: 'O estoque de cenouras está abaixo do mínimo recomendado',
      lida: false,
      timestamp: '2024-12-23T08:30:00'
    },
    {
      id: 'notif-003',
      tipo: 'sucesso',
      titulo: 'Pagamento recebido',
      mensagem: 'Pagamento de R$ 8.500 do Restaurante Sabor da Terra confirmado',
      lida: true,
      timestamp: '2024-12-22T16:45:00'
    }
  ]
};

// Função para simular atualização de dados em tempo real
export function getUpdatedMetrics() {
  const base = mockData.metrics.producaoMensal.valor;
  const variation = (Math.random() - 0.5) * 100;
  return {
    ...mockData.metrics,
    producaoMensal: {
      ...mockData.metrics.producaoMensal,
      valor: Math.round(base + variation)
    }
  };
}

// Função para adicionar nova atividade
export function addNewActivity(activity) {
  mockData.atividadesRecentes.unshift({
    id: `act-${Date.now()}`,
    timestamp: new Date().toISOString(),
    status: 'nova',
    ...activity
  });

  // Manter apenas as últimas 10 atividades
  if (mockData.atividadesRecentes.length > 10) {
    mockData.atividadesRecentes.pop();
  }
}

// Função para obter dados do dashboard formatados
export function getDashboardData() {
  return {
    user: mockData.user,
    culturasAtivas: mockData.culturasAtivas,
    calendarioColheitas: mockData.calendarioColheitas,
    historicoColheitas: mockData.historicoColheitas,
    metrics: mockData.metrics,
    charts: {
      producao: mockData.producaoHistorico,
      vendas: mockData.vendasPorCategoria,
      custos: mockData.custos
    },
    activities: mockData.atividadesRecentes.slice(0, 5),
    tasks: mockData.tarefas.filter(t => t.status === 'pendente'),
    stock: mockData.estoque.filter(e => e.status !== 'normal'),
    weather: mockData.clima,
    notifications: mockData.notificacoes.filter(n => !n.lida).length
  };
}