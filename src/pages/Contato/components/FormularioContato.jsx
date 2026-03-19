import { useState, useRef, useEffect } from 'react';

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

function FormularioContato() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const successRef = useRef(null);

  useEffect(() => {
    setCharCount(message.length);
  }, [message]);

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
    if (phoneValor !== "") {
      if (phoneNumeros.length < 10) {
        newErrors.phone = 'Telefone incompleto. Use (DD) XXXX-XXXX.';
        temErro = true;
      } else if (phoneNumeros.length > 11) {
        newErrors.phone = 'Telefone com dígitos a mais.';
        temErro = true;
      }
    }

    // VALIDAÇÃO 4: ASSUNTO - campo obrigatório original (required no HTML)
    // O original não tinha validação JS explícita para subject, mas o select tem required

    // VALIDAÇÃO 5: MENSAGEM
    const msgValor = message.trim();
    if (!msgValor) {
      newErrors.message = 'A mensagem não pode estar vazia.';
      temErro = true;
    } else if (msgValor.length > 500) {
      newErrors.message = 'A mensagem excedeu o limite de 500 caracteres.';
      temErro = true;
    }

    setErrors(newErrors);

    if (!temErro) {
      setShowSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setSubject('');
      setMessage('');

      setTimeout(() => {
        if (successRef.current) {
          successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 0);

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);

      console.log('Formulário validado e "enviado" com sucesso!');
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h2 className="section-title">Envie uma mensagem</h2>
      <form className="contact-form" id="contactForm" noValidate onSubmit={handleSubmit}>
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
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
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
          <label htmlFor="subject">Assunto *</label>
          <select
            id="subject"
            name="subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          >
            <option value="">Selecione um assunto</option>
            <option value="duvidas">Dúvidas sobre a plataforma</option>
            <option value="suporte">Suporte técnico</option>
            <option value="parceria">Proposta de parceria</option>
            <option value="feedback">Opinião ou sugestão</option>
            <option value="outro">Outro assunto</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensagem *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Conte mais sobre sua dúvida ou sugestão"
            maxLength="500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          {errors.message && (
            <small className="error-message">
              <i className="bi bi-exclamation-circle"></i> {errors.message}
            </small>
          )}
          <div className={`char-counter${charCount >= 500 ? ' limit-reached' : ''}`}>
            {charCount}/500
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-submit">
          <i className="bi bi-send"></i>
          Enviar Mensagem
        </button>

        <div
          className="form-success"
          id="successMessage"
          ref={successRef}
          style={{ display: showSuccess ? 'flex' : 'none' }}
        >
          <i className="bi bi-check-circle-fill"></i>
          <p>Mensagem enviada com sucesso! Entraremos em contato em breve.</p>
        </div>
      </form>
    </div>
  );
}

export default FormularioContato;
