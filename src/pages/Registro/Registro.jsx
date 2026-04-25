import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import '../../styles/auth.css';

function Registro() {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Dados básicos
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    telefone: '',

    // Step 2 - Dados da produção
    tipoProducao: '',
    tamanhoPropriedade: '',
    cidade: '',
    estado: '',

    // Step 3 - Preferências
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
          setError('Preencha todos os campos obrigatórios');
          return false;
        }
        if (formData.senha !== formData.confirmarSenha) {
          setError('As senhas não coincidem');
          return false;
        }
        if (formData.senha.length < 6) {
          setError('A senha deve ter no mínimo 6 caracteres');
          return false;
        }
        break;
      case 2:
        if (!formData.tipoProducao || !formData.tamanhoPropriedade || !formData.cidade || !formData.estado) {
          setError('Preencha todos os campos obrigatórios');
          return false;
        }
        break;
      case 3:
        if (!formData.objetivoPrincipal || !formData.experiencia) {
          setError('Preencha todos os campos obrigatórios');
          return false;
        }
        if (!formData.aceitaTermos) {
          setError('Você precisa aceitar os termos de uso');
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

    // Remover confirmarSenha antes de salvar
    const { confirmarSenha, ...userData } = formData;

    const result = register(userData);

    if (result.success) {
      // Redirecionar para o dashboard
      navigate('/dashboard');
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <>
      <Header />
      <main className="auth-main">
        <div className="container">
          <div className="auth-card auth-card-register">
              <div className="auth-header">
                <h1>Crie sua conta</h1>
                <p>Complete seu cadastro em 3 passos simples</p>
              </div>

              {/* Progress bar */}
              <div className="register-progress">
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
                <div className="progress-steps">
                  <span className={`progress-step ${step >= 1 ? 'active' : ''}`}>
                    1. Dados básicos
                  </span>
                  <span className={`progress-step ${step >= 2 ? 'active' : ''}`}>
                    2. Sua produção
                  </span>
                  <span className={`progress-step ${step >= 3 ? 'active' : ''}`}>
                    3. Preferências
                  </span>
                </div>
              </div>

              {error && (
                <div className="alert alert-error">
                  <i className="bi bi-exclamation-circle"></i>
                  {error}
                </div>
              )}

              <form className="auth-form" onSubmit={handleSubmit}>
                {/* Step 1 - Dados básicos */}
                {step === 1 && (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="nome">Nome completo</label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="João da Silva"
                        className="form-input"
                        required
                      />
                    </div>

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
                      <label htmlFor="telefone">Telefone (WhatsApp)</label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="form-input"
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
                        placeholder="Mínimo 6 caracteres"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="confirmarSenha">Confirmar senha</label>
                      <input
                        type="password"
                        id="confirmarSenha"
                        name="confirmarSenha"
                        value={formData.confirmarSenha}
                        onChange={handleChange}
                        placeholder="Repita a senha"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 2 - Dados da produção */}
                {step === 2 && (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="tipoProducao">Tipo de produção principal</label>
                      <select
                        id="tipoProducao"
                        name="tipoProducao"
                        value={formData.tipoProducao}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="hortalicas">Hortaliças</option>
                        <option value="frutas">Frutas</option>
                        <option value="graos">Grãos</option>
                        <option value="leite">Leite e derivados</option>
                        <option value="carnes">Carnes</option>
                        <option value="organicos">Orgânicos</option>
                        <option value="mista">Produção mista</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="tamanhoPropriedade">Tamanho da propriedade</label>
                      <select
                        id="tamanhoPropriedade"
                        name="tamanhoPropriedade"
                        value={formData.tamanhoPropriedade}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="pequena">Até 10 hectares</option>
                        <option value="media">10 a 50 hectares</option>
                        <option value="grande">50 a 200 hectares</option>
                        <option value="muito-grande">Acima de 200 hectares</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="cidade">Cidade</label>
                      <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleChange}
                        placeholder="Sua cidade"
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="estado">Estado</label>
                      <select
                        id="estado"
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">UF</option>
                      <option value="AC">AC</option>
                      <option value="AL">AL</option>
                      <option value="AP">AP</option>
                      <option value="AM">AM</option>
                      <option value="BA">BA</option>
                      <option value="CE">CE</option>
                      <option value="DF">DF</option>
                      <option value="ES">ES</option>
                      <option value="GO">GO</option>
                      <option value="MA">MA</option>
                      <option value="MT">MT</option>
                      <option value="MS">MS</option>
                      <option value="MG">MG</option>
                      <option value="PA">PA</option>
                      <option value="PB">PB</option>
                      <option value="PR">PR</option>
                      <option value="PE">PE</option>
                      <option value="PI">PI</option>
                      <option value="RJ">RJ</option>
                      <option value="RN">RN</option>
                      <option value="RS">RS</option>
                      <option value="RO">RO</option>
                      <option value="RR">RR</option>
                      <option value="SC">SC</option>
                      <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3 - Preferências */}
                {step === 3 && (
                  <div className="form-step">
                    <div className="form-group">
                      <label htmlFor="objetivoPrincipal">Qual seu objetivo principal?</label>
                      <select
                        id="objetivoPrincipal"
                        name="objetivoPrincipal"
                        value={formData.objetivoPrincipal}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="aumentar-producao">Aumentar produção</option>
                        <option value="reduzir-custos">Reduzir custos</option>
                        <option value="melhorar-vendas">Melhorar vendas</option>
                        <option value="organizar-gestao">Organizar gestão</option>
                        <option value="certificacao">Obter certificações</option>
                        <option value="sustentabilidade">Práticas sustentáveis</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="experiencia">Sua experiência com agricultura</label>
                      <select
                        id="experiencia"
                        name="experiencia"
                        value={formData.experiencia}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="iniciante">Iniciante (menos de 2 anos)</option>
                        <option value="intermediario">Intermediário (2 a 5 anos)</option>
                        <option value="experiente">Experiente (5 a 10 anos)</option>
                        <option value="veterano">Veterano (mais de 10 anos)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="usaTecnologia"
                          checked={formData.usaTecnologia}
                          onChange={handleChange}
                        />
                        <span>Já uso tecnologia na produção</span>
                      </label>
                    </div>

                    <div className="form-group">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="aceitaTermos"
                          checked={formData.aceitaTermos}
                          onChange={handleChange}
                          required
                        />
                        <span>
                          Li e concordo com os <Link to="/termos" className="link">Termos de Uso</Link> e{' '}
                          <Link to="/privacidade" className="link">Política de Privacidade</Link>
                        </span>
                      </label>
                    </div>
                  </div>
                )}

                {/* Navigation buttons */}
                <div className="form-navigation">
                  {step > 1 && (
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={prevStep}
                    >
                      <i className="bi bi-arrow-left"></i>
                      Anterior
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      className="btn-primary"
                      onClick={nextStep}
                    >
                      Próximo
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn-submit"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="spinner"></span>
                          Criando conta...
                        </>
                      ) : (
                        'Criar conta'
                      )}
                    </button>
                  )}
                </div>
              </form>

              <div className="auth-footer">
                <p>
                  Já tem uma conta?{' '}
                  <Link to="/login" className="link">
                    Fazer login
                  </Link>
                </p>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Registro;