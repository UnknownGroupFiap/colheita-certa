export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/registro',
  DASHBOARD: '/dashboard',
  EM_DESENVOLVIMENTO: '/em-desenvolvimento',
  SOLUTIONS: '/solucoes',
  RESOURCES: '/recursos',
  CONTACT: '/contato'
};

export const AUTH = {
  DEMO_EMAIL: 'demo@colheitacerta.com',
  DEMO_PASSWORD: 'demo123'
};

export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 6,
  MIN_NAME_LENGTH: 3,
  MAX_NAME_LENGTH: 100
};

export const MESSAGES = {
  LOADING: 'Carregando...',
  ERROR: 'Ocorreu um erro. Tente novamente.',
  SUCCESS: 'Operação realizada com sucesso!',
  SESSION_EXPIRED: 'Sua sessão expirou. Faça login novamente.',
  PASSWORDS_DONT_MATCH: 'As senhas não coincidem',
  FILL_ALL_FIELDS: 'Preencha todos os campos obrigatórios',
  PASSWORD_MIN_LENGTH: 'A senha deve ter no mínimo 6 caracteres',
  ACCEPT_TERMS: 'Você precisa aceitar os termos de uso'
};

export const FORM_MESSAGES = {
  REGISTRATION_SUCCESS: 'Cadastro realizado com sucesso!',
  LOGIN_SUCCESS: 'Login realizado com sucesso!',
  INVALID_CREDENTIALS: 'Email ou senha inválidos',
  EMAIL_ALREADY_EXISTS: 'Este email já está cadastrado',
  SENDING: 'Enviando...',
  MESSAGE_SENT: 'Mensagem enviada com sucesso!'
};

export const FORM_PLACEHOLDERS = {
  NAME: 'Digite seu nome completo',
  EMAIL: 'seu@email.com',
  PASSWORD: 'Sua senha',
  PASSWORD_CONFIRM: 'Confirme sua senha',
  PHONE: '(11) 98765-4321',
  MESSAGE: 'Escreva sua mensagem...',
  PROPERTY_NAME: 'Nome da propriedade'
};

export const APP = {
  NAME: 'Colheita Certa',
  EMAIL: 'suporte@colheitacerta.com'
};

export const COMPONENT_VARIANTS = {
  BUTTON: {
    VARIANT: ['primary', 'secondary', 'ghost', 'danger'],
    SIZE: ['small', 'medium', 'large']
  },
  BADGE: {
    VARIANT: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    SIZE: ['sm', 'md', 'lg']
  },
  ALERT: {
    TYPE: ['success', 'error', 'warning', 'info']
  },
  CARD: {
    VARIANT: ['default', 'info', 'success', 'warning', 'danger']
  },
  SPINNER: {
    SIZE: ['sm', 'md', 'lg'],
    VARIANT: ['primary', 'secondary', 'white']
  },
  MODAL: {
    SIZE: ['sm', 'md', 'lg', 'xl']
  }
};

export const FORM_OPTIONS = {
  PRODUCTION_TYPE: [
    { value: 'hortalicas', label: 'Hortaliças' },
    { value: 'frutas', label: 'Frutas' },
    { value: 'graos', label: 'Grãos' },
    { value: 'leite', label: 'Leite e derivados' },
    { value: 'carnes', label: 'Carnes' },
    { value: 'organicos', label: 'Orgânicos' },
    { value: 'mista', label: 'Produção mista' },
    { value: 'outros', label: 'Outros' }
  ],
  PROPERTY_SIZE: [
    { value: 'pequena', label: 'Até 10 hectares' },
    { value: 'media', label: '10 a 50 hectares' },
    { value: 'grande', label: '50 a 200 hectares' },
    { value: 'muito-grande', label: 'Acima de 200 hectares' }
  ],
  MAIN_GOAL: [
    { value: 'aumentar-producao', label: 'Aumentar produção' },
    { value: 'reduzir-custos', label: 'Reduzir custos' },
    { value: 'melhorar-vendas', label: 'Melhorar vendas' },
    { value: 'organizar-gestao', label: 'Organizar gestão' },
    { value: 'certificacao', label: 'Obter certificações' },
    { value: 'sustentabilidade', label: 'Práticas sustentáveis' }
  ],
  EXPERIENCE_LEVEL: [
    { value: 'iniciante', label: 'Iniciante (menos de 2 anos)' },
    { value: 'intermediario', label: 'Intermediário (2 a 5 anos)' },
    { value: 'experiente', label: 'Experiente (5 a 10 anos)' },
    { value: 'veterano', label: 'Veterano (mais de 10 anos)' }
  ],
  BRAZILIAN_STATES: [
    { value: 'AC', label: 'AC' },
    { value: 'AL', label: 'AL' },
    { value: 'AP', label: 'AP' },
    { value: 'AM', label: 'AM' },
    { value: 'BA', label: 'BA' },
    { value: 'CE', label: 'CE' },
    { value: 'DF', label: 'DF' },
    { value: 'ES', label: 'ES' },
    { value: 'GO', label: 'GO' },
    { value: 'MA', label: 'MA' },
    { value: 'MT', label: 'MT' },
    { value: 'MS', label: 'MS' },
    { value: 'MG', label: 'MG' },
    { value: 'PA', label: 'PA' },
    { value: 'PB', label: 'PB' },
    { value: 'PR', label: 'PR' },
    { value: 'PE', label: 'PE' },
    { value: 'PI', label: 'PI' },
    { value: 'RJ', label: 'RJ' },
    { value: 'RN', label: 'RN' },
    { value: 'RS', label: 'RS' },
    { value: 'RO', label: 'RO' },
    { value: 'RR', label: 'RR' },
    { value: 'SC', label: 'SC' },
    { value: 'SP', label: 'SP' },
    { value: 'SE', label: 'SE' },
    { value: 'TO', label: 'TO' }
  ]
};

export const REGISTRATION_STEPS = [
  { num: 1, title: 'Dados básicos' },
  { num: 2, title: 'Sua produção' },
  { num: 3, title: 'Preferências' }
];

export const PLATFORM_BENEFITS = [
  {
    icon: 'check-circle-fill',
    text: 'Acompanhe suas métricas de produção em tempo real'
  },
  {
    icon: 'check-circle-fill',
    text: 'Gerencie clientes e vendas de forma organizada'
  },
  {
    icon: 'check-circle-fill',
    text: 'Receba alertas climáticos para sua região'
  },
  {
    icon: 'check-circle-fill',
    text: 'Acesse relatórios detalhados sobre sua propriedade'
  },
  {
    icon: 'check-circle-fill',
    text: 'Conecte-se com outros produtores e compradores'
  }
];

export const ICONS = {
  FORM: {
    EMAIL: 'envelope',
    PASSWORD: 'lock',
    PASSWORD_CONFIRM: 'lock-fill',
    NAME: 'person',
    PHONE: 'whatsapp',
    PRODUCTION: 'basket3',
    PROPERTY_SIZE: 'grid-3x3',
    LOCATION: 'geo-alt',
    STATE: 'map',
    GOAL: 'bullseye',
    EXPERIENCE: 'award'
  },
  ACTION: {
    LOGIN: 'box-arrow-in-right',
    LOGOUT: 'box-arrow-right',
    REGISTER: 'person-plus',
    SAVE: 'check-circle',
    CANCEL: 'x-circle',
    EDIT: 'pencil',
    DELETE: 'trash',
    ADD: 'plus-circle',
    NEXT: 'arrow-right',
    PREVIOUS: 'arrow-left',
    REFRESH: 'arrow-clockwise',
    DEMO: 'lightning'
  },
  STATUS: {
    SUCCESS: 'check-circle',
    ERROR: 'exclamation-circle',
    WARNING: 'exclamation-triangle',
    INFO: 'info-circle'
  }
};