import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';
import { AuthLayout, Section, Button, Input, Card, Alert, Badge, Select, Checkbox } from '@components';
import {
  FORM_OPTIONS,
  ICONS,
  ROUTES,
  MESSAGES,
  VALIDATION,
  REGISTRATION_STEPS
} from '@utils/constants';

function Registro() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',
    tipoProducao: '',
    tamanhoPropriedade: '',
    cidade: '',
    estado: '',
    objetivoPrincipal: '',
    experiencia: '',
    usaTecnologia: false,
    aceitaTermos: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const validateStep = () => {
    switch(step) {
      case 1:
        if (!formData.nome || !formData.email || !formData.senha || !formData.confirmarSenha) {
          setError(MESSAGES.FILL_ALL_FIELDS);
          return false;
        }
        if (formData.senha !== formData.confirmarSenha) {
          setError(MESSAGES.PASSWORDS_DONT_MATCH);
          return false;
        }
        if (formData.senha.length < VALIDATION.MIN_PASSWORD_LENGTH) {
          setError(MESSAGES.PASSWORD_MIN_LENGTH);
          return false;
        }
        break;
      case 2:
        if (!formData.tipoProducao || !formData.tamanhoPropriedade || !formData.cidade || !formData.estado) {
          setError(MESSAGES.FILL_ALL_FIELDS);
          return false;
        }
        break;
      case 3:
        if (!formData.objetivoPrincipal || !formData.experiencia) {
          setError(MESSAGES.FILL_ALL_FIELDS);
          return false;
        }
        if (!formData.aceitaTermos) {
          setError(MESSAGES.ACCEPT_TERMS);
          return false;
        }
        break;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setStep(prev => prev - 1);
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateStep()) {
      return;
    }

    setLoading(true);

    const { confirmarSenha, ...userData } = formData;

    const result = await register(userData);

    if (result.success) {
      navigate(ROUTES.EM_DESENVOLVIMENTO);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <AuthLayout>
      <Section centered className="animate-fade-in">
        <Card
          title="Crie sua conta"
          subtitle="Complete seu cadastro em 3 passos simples"
          className="animate-slide-up"
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          <div style={{ marginBottom: '2rem' }}>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
              {REGISTRATION_STEPS.map(s => (
                <Badge
                  key={s.num}
                  variant={step >= s.num ? 'primary' : 'secondary'}
                  size="sm"
                >
                  {s.num}. {s.title}
                </Badge>
              ))}
            </div>
          </div>

          {error && (
            <Alert type="error" dismissible onDismiss={() => setError('')}>
              {error}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="animate-fade-in">
                <Input
                  label="Nome completo"
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="João da Silva"
                  icon={ICONS.FORM.NAME}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  icon={ICONS.FORM.EMAIL}
                  required
                />

                <Input
                  label="Telefone (WhatsApp)"
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  icon={ICONS.FORM.PHONE}
                />

                <Input
                  label="Senha"
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder={`Mínimo ${VALIDATION.MIN_PASSWORD_LENGTH} caracteres`}
                  icon={ICONS.FORM.PASSWORD}
                  required
                />

                <Input
                  label="Confirmar senha"
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Repita a senha"
                  icon={ICONS.FORM.PASSWORD_CONFIRM}
                  required
                />
              </div>
            )}

            {step === 2 && (
              <div className="animate-fade-in">
                <Select
                  label="Tipo de produção principal"
                  name="tipoProducao"
                  value={formData.tipoProducao}
                  onChange={handleChange}
                  icon={ICONS.FORM.PRODUCTION}
                  required
                >
                  <option value="">Selecione...</option>
                  {FORM_OPTIONS.PRODUCTION_TYPE.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>

                <Select
                  label="Tamanho da propriedade"
                  name="tamanhoPropriedade"
                  value={formData.tamanhoPropriedade}
                  onChange={handleChange}
                  icon={ICONS.FORM.PROPERTY_SIZE}
                  required
                >
                  <option value="">Selecione...</option>
                  {FORM_OPTIONS.PROPERTY_SIZE.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>

                <Input
                  label="Cidade"
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                  placeholder="Sua cidade"
                  icon={ICONS.FORM.LOCATION}
                  required
                />

                <Select
                  label="Estado"
                  name="estado"
                  value={formData.estado}
                  onChange={handleChange}
                  icon={ICONS.FORM.STATE}
                  required
                >
                  <option value="">UF</option>
                  {FORM_OPTIONS.BRAZILIAN_STATES.map(state => (
                    <option key={state.value} value={state.value}>
                      {state.label}
                    </option>
                  ))}
                </Select>
              </div>
            )}

            {step === 3 && (
              <div className="animate-fade-in">
                <Select
                  label="Qual seu objetivo principal?"
                  name="objetivoPrincipal"
                  value={formData.objetivoPrincipal}
                  onChange={handleChange}
                  icon={ICONS.FORM.GOAL}
                  required
                >
                  <option value="">Selecione...</option>
                  {FORM_OPTIONS.MAIN_GOAL.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>

                <Select
                  label="Sua experiência com agricultura"
                  name="experiencia"
                  value={formData.experiencia}
                  onChange={handleChange}
                  icon={ICONS.FORM.EXPERIENCE}
                  required
                >
                  <option value="">Selecione...</option>
                  {FORM_OPTIONS.EXPERIENCE_LEVEL.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </Select>

                <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                  <Checkbox
                    name="usaTecnologia"
                    checked={formData.usaTecnologia}
                    onChange={handleChange}
                  >
                    Já uso tecnologia na produção
                  </Checkbox>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <Checkbox
                    name="aceitaTermos"
                    checked={formData.aceitaTermos}
                    onChange={handleChange}
                  >
                    Li e concordo com os <Link to="/termos" className="link">Termos de Uso</Link> e{' '}
                    <Link to="/privacidade" className="link">Política de Privacidade</Link>
                  </Checkbox>
                </div>
              </div>
            )}

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between', marginTop: '2rem' }}>
              {step > 1 && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={prevStep}
                  icon={ICONS.ACTION.PREVIOUS}
                >
                  Anterior
                </Button>
              )}

              {step < 3 ? (
                <Button
                  type="button"
                  variant="primary"
                  onClick={nextStep}
                  icon={ICONS.ACTION.NEXT}
                  iconPosition="right"
                  style={{ marginLeft: step === 1 ? 'auto' : '0' }}
                >
                  Próximo
                </Button>
              ) : (
                <Button
                  type="submit"
                  variant="primary"
                  loading={loading}
                  disabled={loading}
                  icon={ICONS.ACTION.SAVE}
                >
                  {loading ? MESSAGES.LOADING : 'Criar conta'}
                </Button>
              )}
            </div>
          </form>

          <div className="text-center" style={{ marginTop: '2rem' }}>
            <p>
              Já tem uma conta?{' '}
              <Link to={ROUTES.LOGIN} className="link">
                Fazer login
              </Link>
            </p>
          </div>
        </Card>
      </Section>
    </AuthLayout>
  );
}

export default Registro;