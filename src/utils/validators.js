
export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email é obrigatório';
  if (!regex.test(email)) return 'Email inválido';
  return null;
};

export const validatePassword = (password) => {
  if (!password) return 'Senha é obrigatória';
  if (password.length < 6) return 'Senha deve ter pelo menos 6 caracteres';
  if (!/\d/.test(password)) return 'Senha deve conter pelo menos um número';
  return null;
};

export const validatePasswordConfirmation = (password, confirmation) => {
  if (!confirmation) return 'Confirmação de senha é obrigatória';
  if (password !== confirmation) return 'As senhas não coincidem';
  return null;
};

export const validateCPF = (cpf) => {
  if (!cpf) return 'CPF é obrigatório';

  const cleanCPF = cpf.replace(/\D/g, '');

  if (cleanCPF.length !== 11) return 'CPF deve ter 11 dígitos';

  if (/^(\d)\1{10}$/.test(cleanCPF)) return 'CPF inválido';

  let sum = 0;
  let remainder;

  for (let i = 1; i <= 9; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (11 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.substring(9, 10))) return 'CPF inválido';

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum += parseInt(cleanCPF.substring(i - 1, i)) * (12 - i);
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cleanCPF.substring(10, 11))) return 'CPF inválido';

  return null;
};

export const validatePhone = (phone) => {
  if (!phone) return 'Telefone é obrigatório';

  const cleanPhone = phone.replace(/\D/g, '');

  if (cleanPhone.length < 10 || cleanPhone.length > 11) {
    return 'Telefone inválido';
  }

  return null;
};

export const validateCEP = (cep) => {
  if (!cep) return 'CEP é obrigatório';

  const cleanCEP = cep.replace(/\D/g, '');

  if (cleanCEP.length !== 8) return 'CEP deve ter 8 dígitos';

  return null;
};

export const validateRequired = (value, fieldName = 'Este campo') => {
  if (!value || (typeof value === 'string' && !value.trim())) {
    return `${fieldName} é obrigatório`;
  }
  return null;
};

export const validateMinLength = (value, minLength, fieldName = 'Este campo') => {
  if (!value || value.length < minLength) {
    return `${fieldName} deve ter pelo menos ${minLength} caracteres`;
  }
  return null;
};

export const validateMaxLength = (value, maxLength, fieldName = 'Este campo') => {
  if (value && value.length > maxLength) {
    return `${fieldName} deve ter no máximo ${maxLength} caracteres`;
  }
  return null;
};

export const validateNumber = (value, fieldName = 'Este campo') => {
  if (value && isNaN(value)) {
    return `${fieldName} deve ser um número`;
  }
  return null;
};

export const validateDate = (date, fieldName = 'Data') => {
  if (!date) return `${fieldName} é obrigatória`;

  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) {
    return `${fieldName} inválida`;
  }

  return null;
};

export const validateFutureDate = (date, fieldName = 'Data') => {
  const error = validateDate(date, fieldName);
  if (error) return error;

  const dateObj = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (dateObj < today) {
    return `${fieldName} deve ser futura`;
  }

  return null;
};

export const validateArea = (area) => {
  if (!area) return 'Área é obrigatória';

  const numArea = parseFloat(area);
  if (isNaN(numArea) || numArea <= 0) {
    return 'Área deve ser um número positivo';
  }

  if (numArea > 100000) {
    return 'Área parece estar incorreta';
  }

  return null;
};

export const validateSelection = (value, options, fieldName = 'Seleção') => {
  if (!value) return `${fieldName} é obrigatória`;

  if (!options.includes(value)) {
    return `${fieldName} inválida`;
  }

  return null;
};

export const validateCheckbox = (checked, message = 'Você deve marcar este campo') => {
  if (!checked) return message;
  return null;
};

export const composeValidators = (...validators) => (value) => {
  for (const validator of validators) {
    const error = validator(value);
    if (error) return error;
  }
  return null;
};

export const validateForm = (formData, validationRules) => {
  const errors = {};

  Object.keys(validationRules).forEach(field => {
    const value = formData[field];
    const validators = validationRules[field];
    const fieldErrors = [];

    if (typeof validators === 'function') {
      const error = validators(value, formData);
      if (error) fieldErrors.push(error);
    }
    else if (Array.isArray(validators)) {
      validators.forEach(validator => {
        const error = validator(value, formData);
        if (error) fieldErrors.push(error);
      });
    }

    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors[0];
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validators = {
  email: validateEmail,
  password: validatePassword,
  passwordConfirmation: validatePasswordConfirmation,
  cpf: validateCPF,
  phone: validatePhone,
  cep: validateCEP,
  required: validateRequired,
  minLength: (min) => (value, fieldName) => validateMinLength(value, min, fieldName),
  maxLength: (max) => (value, fieldName) => validateMaxLength(value, max, fieldName),
  number: validateNumber,
  date: validateDate,
  futureDate: validateFutureDate,
  area: validateArea,
  selection: (options) => (value, fieldName) => validateSelection(value, options, fieldName),
  checkbox: (message) => (checked) => validateCheckbox(checked, message)
};