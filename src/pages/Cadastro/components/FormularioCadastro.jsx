import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function phoneMask(value, inputType) {
  let digits = value.replace(/\D/g, '');
  let formattedValue = '';

  if (digits.length > 10) {
    formattedValue = `(${digits.substring(0, 2)}) ${digits.substring(2, 7)}-${digits.substring(7, 11)}`;
  } else if (digits.length > 6) {
    formattedValue = `(${digits.substring(0, 2)}) ${digits.substring(2, 6)}-${digits.substring(6, 10)}`;
  } else if (digits.length > 2) {
    formattedValue = `(${digits.substring(0, 2)}) ${digits.substring(2)}`;
  } else if (digits.length > 0) {
    formattedValue = `(${digits}`;
  }

  if (formattedValue.length > 15) {
    formattedValue = formattedValue.substring(0, 15);
  }

  if (inputType === 'deleteContentBackward') {
    return value;
  }

  return formattedValue;
}

function FormularioCadastro() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const successRef = useRef(null);

  const handlePhoneChange = (e) => {
    const masked = phoneMask(e.target.value, e.nativeEvent.inputType);
    setPhone(masked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let temErro = false;

    // VALIDAÇÃO 1: NOME COMPLETO
    const nomeValor = name.trim();
    const partesNome = nomeValor.split(/\s+/);

    if (!nomeValor) {
      newErrors.name = 'O campo nome é obrigatório.';
      temErro = true;
    } else if (partesNome.length < 2) {
      newErrors.name = 'Por favor, digite seu nome e sobrenome.';
      temErro = true;
    } else {
      const nomeValido = partesNome.every(parte => parte.length >= 2);
      if (!nomeValido) {
        newErrors.name = 'Nome e sobrenome devem ter no mínimo 2 letras cada.';
        temErro = true;
      }
    }

    // VALIDAÇÃO 2: E-MAIL
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'O e-mail é obrigatório.';
      temErro = true;
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = 'Digite um e-mail válido (ex: seu@email.com).';
      temErro = true;
    }

    // VALIDAÇÃO 3: TELEFONE
    const phoneValor = phone.trim();
    const phoneNumeros = phoneValor.replace(/\D/g, '');
    if (!phoneValor) {
      newErrors.phone = 'O telefone é obrigatório.';
      temErro = true;
    } else if (phoneNumeros.length < 10) {
      newErrors.phone = 'Telefone incompleto. Use (DD) XXXX-XXXX.';
      temErro = true;
    } else if (phoneNumeros.length > 11) {
      newErrors.phone = 'Telefone com dígitos a mais.';
      temErro = true;
    }

    // VALIDAÇÃO 4: SENHA
    if (!password) {
      newErrors.password = 'A senha é obrigatória.';
      temErro = true;
    } else if (password.length < 6) {
      newErrors.password = 'A senha deve ter no mínimo 6 caracteres.';
      temErro = true;
    }

    // VALIDAÇÃO 5: TERMOS DE USO
    if (!terms) {
      newErrors.terms = 'Você precisa aceitar os termos de uso para continuar.';
      temErro = true;
    }

    setErrors(newErrors);

    if (!temErro) {
      setShowSuccess(true);

      setTimeout(() => {
        if (successRef.current) {
          successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 0);

      console.log('Cadastro validado com sucesso!');
      console.log('Nome:', nomeValor);
      console.log('Email:', email.trim());
      console.log('Telefone:', phoneValor);

      alert('Cadastro criado com sucesso!');

      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h2 className="section-title">Criar conta</h2>
      <form className="contact-form" id="signupForm" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Seu nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && (
            <small className="error-message">
              <i className="bi bi-exclamation-circle"></i> {errors.name}
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && (
            <small className="error-message">
              <i className="bi bi-exclamation-circle"></i> {errors.email}
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(00) 00000-0000"
            value={phone}
            onChange={handlePhoneChange}
            className={errors.phone ? 'input-error' : ''}
          />
          {errors.phone && (
            <small className="error-message">
              <i className="bi bi-exclamation-circle"></i> {errors.phone}
            </small>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha *</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Mínimo 6 caracteres"
            minLength="6"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? 'input-error' : ''}
          />
          {errors.password && (
            <small className="error-message">
              <i className="bi bi-exclamation-circle"></i> {errors.password}
            </small>
          )}
        </div>

        <div className="form-group checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <span>Aceito os termos de uso e política de privacidade *</span>
          </label>
          {errors.terms && (
            <small className="error-message">
              <i className="bi bi-exclamation-circle"></i> {errors.terms}
            </small>
          )}
        </div>

        <button type="submit" className="btn btn-primary btn-submit">
          <i className="bi bi-check-circle"></i>
          Criar cadastro
        </button>

        <div
          className="form-success"
          id="successMessage"
          ref={successRef}
          style={{ display: showSuccess ? 'flex' : 'none' }}
        >
          <i className="bi bi-check-circle-fill"></i>
          <p>Cadastro criado com sucesso! Redirecionando...</p>
        </div>
      </form>
    </div>
  );
}

export default FormularioCadastro;
