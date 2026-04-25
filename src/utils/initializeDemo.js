// Função para inicializar usuário de demonstração
export function initializeDemoUser() {
  const demoUser = {
    id: 'demo-user-001',
    nome: 'João da Silva',
    email: 'demo@colheitacerta.com',
    senha: 'demo123',
    telefone: '(11) 99999-9999',
    tipoProducao: 'hortalicas',
    tamanhoPropriedade: 'media',
    cidade: 'Campinas',
    estado: 'SP',
    objetivoPrincipal: 'aumentar-producao',
    experiencia: 'experiente',
    usaTecnologia: true,
    aceitaTermos: true,
    createdAt: '2024-01-01T00:00:00.000Z',
    metrics: {
      totalProducao: 1250,
      totalVendas: 8500,
      totalLucro: 35,
      eficiencia: 78
    },
    diagnosticos: [
      {
        id: 'diag-001',
        data: '2024-01-15T10:00:00.000Z',
        respostas: {
          producao: 'hortalicas',
          dificuldade: 'vendas',
          smartphone: 'sempre',
          controle: 'planilhas',
          prioridade: 'vendas'
        }
      }
    ],
    metas: [
      {
        id: 'meta-001',
        titulo: 'Aumentar produção em 20%',
        status: 'em_progresso',
        progresso: 65
      },
      {
        id: 'meta-002',
        titulo: 'Reduzir desperdício para menos de 5%',
        status: 'concluida',
        progresso: 100
      }
    ]
  };

  // Verificar se já existe um array de usuários
  const existingUsers = JSON.parse(localStorage.getItem('colheitaCertaUsers') || '[]');

  // Verificar se o usuário demo já existe
  const demoExists = existingUsers.find(u => u.email === 'demo@colheitacerta.com');

  if (!demoExists) {
    // Adicionar o usuário demo
    existingUsers.push(demoUser);
    localStorage.setItem('colheitaCertaUsers', JSON.stringify(existingUsers));
    console.log('Usuário de demonstração criado com sucesso!');
  } else {
    console.log('Usuário de demonstração já existe.');
  }
}

// Executar quando o módulo for importado
initializeDemoUser();