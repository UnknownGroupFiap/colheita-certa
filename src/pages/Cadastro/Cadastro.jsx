import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout, Section, Grid, HeroSection, Button, Card, Badge } from '@components';
import { ROUTES, FORM_OPTIONS, FORM_MESSAGES, FORM_PLACEHOLDERS } from '@utils/constants';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    localizacao: '',
    tamanhoPropriedade: '',
    tipoCultivo: '',
    tempoAtuacao: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro:', formData);
  };

  const beneficios = [
    { icon: 'bi-graph-up', text: 'Aumento de até 30% na produtividade' },
    { icon: 'bi-cash-coin', text: 'Redução de custos operacionais' },
    { icon: 'bi-shield-check', text: 'Assistência técnica especializada' },
    { icon: 'bi-people', text: 'Comunidade de produtores' },
    { icon: 'bi-award', text: 'Certificação de qualidade' },
    { icon: 'bi-truck', text: 'Logística facilitada' }
  ];

  return (
    <PageLayout
      hero={
        <HeroSection
          title="Transforme sua Produção Rural"
          subtitle="Cadastre-se gratuitamente e tenha acesso a ferramentas que vão revolucionar sua forma de produzir"
          variant="primary"
        />
      }
    >
      <Section>
        <Grid cols={2} gap="large" className="stack-mobile">
          <div>
            <h2 style={{ marginBottom: '2rem' }}>Por que se cadastrar?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {beneficios.map((item, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <i className={`${item.icon} bi`} style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}></i>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <Card variant="info" style={{ marginTop: '2rem' }}>
              <h4>Suporte Personalizado</h4>
              <p>Nossa equipe está pronta para ajudar você em cada etapa da jornada.</p>
            </Card>
          </div>

          <Card>
            <h3 style={{ marginBottom: '1.5rem' }}>Cadastro de Produtor</h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label htmlFor="nome" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="input"
                  placeholder={FORM_PLACEHOLDERS.NAME}
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                  placeholder={FORM_PLACEHOLDERS.EMAIL}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="telefone" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Telefone
                </label>
                <input
                  type="tel"
                  id="telefone"
                  name="telefone"
                  className="input"
                  placeholder={FORM_PLACEHOLDERS.PHONE}
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label htmlFor="localizacao" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Estado
                </label>
                <select
                  id="localizacao"
                  name="localizacao"
                  className="input"
                  value={formData.localizacao}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione seu estado</option>
                  {FORM_OPTIONS.BRAZILIAN_STATES.map(state => (
                    <option key={state.value} value={state.value}>{state.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="tipoCultivo" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                  Tipo de Produção
                </label>
                <select
                  id="tipoCultivo"
                  name="tipoCultivo"
                  className="input"
                  value={formData.tipoCultivo}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o tipo</option>
                  {FORM_OPTIONS.PRODUCTION_TYPE.map(type => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <Button type="submit" variant="primary" size="large" style={{ width: '100%', marginTop: '1rem' }}>
                Criar Conta Gratuita
              </Button>
            </form>

            <p style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.875rem' }}>
              Já tem uma conta?{' '}
              <Link to={ROUTES.LOGIN} style={{ color: 'var(--color-primary)' }}>
                Faça login
              </Link>
            </p>
          </Card>
        </Grid>
      </Section>
    </PageLayout>
  );
}

export default Cadastro;