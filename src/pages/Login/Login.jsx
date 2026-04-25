import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import '../../styles/auth.css';

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

    // Validações
    if (!formData.email || !formData.senha) {
      setError('Preencha todos os campos');
      setLoading(false);
      return;
    }

    // Tentar fazer login
    const result = login(formData.email, formData.senha);

    if (result.success) {
      navigate('/dashboard');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const fillDemoData = () => {
    setFormData({
      email: 'demo@colheitacerta.com',
      senha: 'demo123'
    });
    setError('');
  };

  return (
    <>
      <Header />
      <main className="auth-main">
        <div className="container">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1>Bem-vindo de volta!</h1>
              <p>Entre na sua conta para acessar o painel</p>
            </div>

            {error && (
              <div className="alert alert-error">
                <i className="bi bi-exclamation-circle"></i>
                {error}
              </div>
            )}

            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Digite sua senha"
                  className="form-input"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-submit"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Entrando...
                  </>
                ) : (
                  'Entrar'
                )}
              </button>
            </form>

            <div className="auth-divider">
              <span>ou</span>
            </div>

            <div className="demo-credentials">
              <h3>Conta de Demonstração</h3>
              <div className="demo-info">
                <div className="credential">
                  <span className="label">Email:</span>
                  <code>demo@colheitacerta.com</code>
                </div>
                <div className="credential">
                  <span className="label">Senha:</span>
                  <code>demo123</code>
                </div>
              </div>
              <button
                type="button"
                className="btn-demo"
                onClick={fillDemoData}
              >
                <i className="bi bi-lightning"></i>
                Preencher com dados demo
              </button>
            </div>

            <div className="auth-footer">
              <p>
                Ainda não tem uma conta?{' '}
                <Link to="/registro" className="link">
                  Criar conta grátis
                </Link>
              </p>
            </div>
          </div>

          <div className="auth-benefits">
            <h2>Por que usar o Colheita Certa?</h2>
            <ul className="benefits-list">
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Acompanhe suas métricas de produção em tempo real</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Gerencie clientes e vendas de forma organizada</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Receba alertas climáticos para sua região</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Acesse relatórios detalhados sobre sua propriedade</span>
              </li>
              <li>
                <i className="bi bi-check-circle"></i>
                <span>Conecte-se com outros produtores e compradores</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}

export default Login;