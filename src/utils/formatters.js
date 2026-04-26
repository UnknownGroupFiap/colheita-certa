
export const formatCurrency = (value) => {
  if (!value && value !== 0) return 'R$ 0,00';

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(numValue);
};

export const formatDate = (date, options = {}) => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isNaN(dateObj.getTime())) return '';

  const defaultOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    ...options
  };

  return new Intl.DateTimeFormat('pt-BR', defaultOptions).format(dateObj);
};

export const formatDateTime = (date) => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(dateObj);
};

export const formatRelativeTime = (date) => {
  if (!date) return '';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInMs = now - dateObj;
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  if (diffInDays > 30) {
    return formatDate(dateObj);
  } else if (diffInDays > 0) {
    return `há ${diffInDays} ${diffInDays === 1 ? 'dia' : 'dias'}`;
  } else if (diffInHours > 0) {
    return `há ${diffInHours} ${diffInHours === 1 ? 'hora' : 'horas'}`;
  } else if (diffInMinutes > 0) {
    return `há ${diffInMinutes} ${diffInMinutes === 1 ? 'minuto' : 'minutos'}`;
  } else {
    return 'agora mesmo';
  }
};

export const formatCPF = (cpf) => {
  if (!cpf) return '';

  const cleanCPF = cpf.replace(/\D/g, '');

  if (cleanCPF.length !== 11) return cpf;

  return cleanCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

export const formatCNPJ = (cnpj) => {
  if (!cnpj) return '';

  const cleanCNPJ = cnpj.replace(/\D/g, '');

  if (cleanCNPJ.length !== 14) return cnpj;

  return cleanCNPJ.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
};

export const formatPhone = (phone) => {
  if (!phone) return '';

  const cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length === 10) {
    return cleanPhone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  } else if (cleanPhone.length === 11) {
    return cleanPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  }

  return phone;
};

export const formatCEP = (cep) => {
  if (!cep) return '';

  const cleanCEP = cep.replace(/\D/g, '');

  if (cleanCEP.length !== 8) return cep;

  return cleanCEP.replace(/(\d{5})(\d{3})/, '$1-$2');
};

export const formatNumber = (value, decimals = 2) => {
  if (!value && value !== 0) return '0';

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(numValue);
};

export const formatPercentage = (value, decimals = 1) => {
  if (!value && value !== 0) return '0%';

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  return `${formatNumber(numValue, decimals)}%`;
};

export const formatArea = (value) => {
  if (!value && value !== 0) return '0 ha';

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (numValue < 1) {
    return `${formatNumber(numValue * 10000, 0)} m²`;
  }

  return `${formatNumber(numValue, 2)} ha`;
};

export const formatWeight = (value) => {
  if (!value && value !== 0) return '0 kg';

  const numValue = typeof value === 'string' ? parseFloat(value) : value;

  if (numValue < 1) {
    return `${formatNumber(numValue * 1000, 0)} g`;
  }

  if (numValue >= 1000) {
    return `${formatNumber(numValue / 1000, 2)} t`;
  }

  return `${formatNumber(numValue, 2)} kg`;
};

export const formatDaysUntil = (date) => {
  if (!date) return '';

  const targetDate = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffInMs = targetDate - today;
  const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 0) {
    return `${Math.abs(diffInDays)} ${Math.abs(diffInDays) === 1 ? 'dia atrás' : 'dias atrás'}`;
  } else if (diffInDays === 0) {
    return 'Hoje';
  } else if (diffInDays === 1) {
    return 'Amanhã';
  } else {
    return `Em ${diffInDays} dias`;
  }
};

export const formatShortName = (name) => {
  if (!name) return '';

  const parts = name.trim().split(' ');

  if (parts.length === 1) return parts[0];

  const firstName = parts[0];
  const lastName = parts[parts.length - 1];

  return `${firstName} ${lastName}`;
};

export const formatStatus = (status) => {
  const statusMap = {
    active: { label: 'Ativo', color: 'success' },
    inactive: { label: 'Inativo', color: 'danger' },
    pending: { label: 'Pendente', color: 'warning' },
    completed: { label: 'Concluído', color: 'success' },
    cancelled: { label: 'Cancelado', color: 'danger' },
    plantado: { label: 'Plantado', color: 'info' },
    crescendo: { label: 'Crescendo', color: 'primary' },
    colhendo: { label: 'Colhendo', color: 'warning' },
    finalizado: { label: 'Finalizado', color: 'success' }
  };

  return statusMap[status] || { label: status, color: 'secondary' };
};

export const removeFormatting = (value) => {
  if (!value) return '';
  return value.replace(/\D/g, '');
};

export const capitalize = (str) => {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str, maxLength = 50, suffix = '...') => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.substring(0, maxLength - suffix.length) + suffix;
};

export const formatters = {
  currency: formatCurrency,
  date: formatDate,
  dateTime: formatDateTime,
  relativeTime: formatRelativeTime,
  cpf: formatCPF,
  cnpj: formatCNPJ,
  phone: formatPhone,
  cep: formatCEP,
  number: formatNumber,
  percentage: formatPercentage,
  area: formatArea,
  weight: formatWeight,
  daysUntil: formatDaysUntil,
  shortName: formatShortName,
  status: formatStatus,
  removeFormatting,
  capitalize,
  truncate
};