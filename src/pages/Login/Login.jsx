import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '@contexts/AuthContext';
import { AuthLayout, Section, Button, Input, Card, Alert, Badge } from '@components';
import { AUTH, ICONS, ROUTES, MESSAGES } from '@utils/constants';

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.email || !formData.senha) {
      setError(MESSAGES.FILL_ALL_FIELDS);
      setLoading(false);
      return;
    }

    const result = await login(formData.email, formData.senha);

    if (result.success) {
      navigate(ROUTES.EM_DESENVOLVIMENTO);
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const fillDemoData = () => {
    setFormData({
      email: AUTH.DEMO_EMAIL,
      senha: AUTH.DEMO_PASSWORD
    });
    setError('');
  };

  return (
    <AuthLayout>
      <Section centered className="animate-fade-in">
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <Card
            title="Bem-vindo de volta!"
            subtitle="Entre na sua conta para acessar o painel"
            className="animate-slide-up"
          >
            {error && (
              <Alert type="error" dismissible onDismiss={() => setError('')}>
                {error}
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
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
                label="Senha"
                type="password"
                name="senha"
                value={formData.senha}
                onChange={handleChange}
                placeholder="Digite sua senha"
                icon={ICONS.FORM.PASSWORD}
                required
              />

              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={loading}
                icon={ICONS.ACTION.LOGIN}
              >
                {loading ? MESSAGES.LOADING : 'Entrar'}
              </Button>
            </form>

            <div className="text-center" style={{ margin: '1.5rem 0' }}>
              <span style={{ color: 'var(--color-text-secondary)' }}>ou</span>
            </div>

            <Card variant="info" className="text-center">
              <h3>Conta de Demonstração</h3>
              <div style={{ marginTop: '1rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <Badge variant="secondary">Email</Badge>
                  <code style={{ marginLeft: '0.5rem' }}>{AUTH.DEMO_EMAIL}</code>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <Badge variant="secondary">Senha</Badge>
                  <code style={{ marginLeft: '0.5rem' }}>{AUTH.DEMO_PASSWORD}</code>
                </div>
              </div>
              <Button
                variant="ghost"
                onClick={fillDemoData}
                icon={ICONS.ACTION.DEMO}
                size="small"
              >
                Preencher com dados demo
              </Button>
            </Card>

            <div className="text-center" style={{ marginTop: '1.5rem' }}>
              <p>
                Ainda não tem uma conta?{' '}
                <Link to={ROUTES.REGISTER} className="link">
                  Criar conta grátis
                </Link>
              </p>
            </div>
          </Card>
        </div>
      </Section>
    </AuthLayout>
  );
}

export default Login;