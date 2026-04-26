import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageLayout, Section, Grid, Container, Button, Card, Badge } from '@components';
import { ROUTES } from '@utils/constants';

function Inicio() {
  const [diagnosticoIniciado, setDiagnosticoIniciado] = useState(false);
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [respostas, setRespostas] = useState({});

  const perguntas = [
    {
      id: 'producao',
      pergunta: 'Qual é o seu tipo de produção?',
      opcoes: [
        { valor: 'hortalicas', texto: 'Hortaliças', icone: 'bi-flower1' },
        { valor: 'leite', texto: 'Leite', icone: 'bi-droplet' },
        { valor: 'graos', texto: 'Grãos', icone: 'bi-grid-3x3-gap' },
        { valor: 'frutas', texto: 'Frutas', icone: 'bi-basket' }
      ]
    },
    {
      id: 'dificuldade',
      pergunta: 'Qual a sua principal dificuldade?',
      opcoes: [
        { valor: 'gastos', texto: 'Controlar gastos', icone: 'bi-cash-coin' },
        { valor: 'organizacao', texto: 'Organizar produção', icone: 'bi-calendar-check' },
        { valor: 'vendas', texto: 'Vender melhor', icone: 'bi-shop' },
        { valor: 'produtividade', texto: 'Produtividade', icone: 'bi-graph-up-arrow' }
      ]
    }
  ];

  const stats = [
    { value: '500+', label: 'Produtores Conectados' },
    { value: '30%', label: 'Aumento de Renda' },
    { value: '24/7', label: 'Assistência Digital' },
    { value: '100%', label: 'Gratuito' }
  ];

  const cardsValor = [
    {
      icon: 'bi-graph-up-arrow',
      title: 'Aumente sua Renda',
      description: 'Venda direto ao consumidor e para empresas, sem atravessadores',
      colorClass: 'icon-badge-green'
    },
    {
      icon: 'bi-shield-check',
      title: 'Reduza Perdas',
      description: 'Receba alertas climáticos, calendários de plantio e recomendações na hora certa',
      colorClass: 'icon-badge-blue'
    },
    {
      icon: 'bi-hand-thumbs-up',
      title: 'Fácil de Usar',
      description: 'Aplicativo simples, funciona até sem internet e com vídeos fáceis de entender',
      colorClass: 'icon-badge-purple'
    }
  ];

  const mercadoFeatures = [
    { icon: 'bi-shop', text: 'Anuncie sua produção em segundos' },
    { icon: 'bi-bank', text: 'Acesse facilmente programas do governo (PAA e PNAE)' },
    { icon: 'bi-people', text: 'Organize vendas em grupo para grandes pedidos' },
    { icon: 'bi-shield-check', text: 'Receba com segurança e facilite a entrega' }
  ];

  const assistenciaFeatures = [
    { icon: 'bi-calendar-check', text: 'Calendários de plantio e colheita por região' },
    { icon: 'bi-cloud-sun', text: 'Previsão do tempo e avisos de chuva forte, geada ou seca' },
    { icon: 'bi-bug', text: 'Dicas para o manejo da terra e controle de pragas' },
    { icon: 'bi-play-circle', text: 'Vídeos e áudios curtos, fáceis de entender' }
  ];

  const heroContent = (
    <>
      <Badge variant="success" size="lg" style={{ marginBottom: '1rem' }}>
        Tecnologia para o campo
      </Badge>
      <h1 className="hero-title">
        Aumente sua produção e sua renda no campo
      </h1>
      <p className="hero-subtitle">
        O Colheita Certa é a plataforma completa que conecta pequenos produtores a novos mercados,
        oferece assistência técnica digital e ajuda a aumentar seus lucros
      </p>
      <div className="hero-actions">
        <Link to={ROUTES.REGISTER}>
          <Button variant="primary" size="large">Cadastre-se Grátis</Button>
        </Link>
        <Link to="/solucoes">
          <Button variant="secondary" size="large">Conheça a Solução</Button>
        </Link>
      </div>
    </>
  );

  return (
    <PageLayout hero={heroContent} fullWidth>
      <Section className="video-section">
        <Container>
          <h2 className="text-center">Pitch Video</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            Conheça nossa proposta em poucos minutos
          </p>
          <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              borderRadius: '1rem',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                src="https://www.youtube.com/embed/FL9ThVxMK0g"
                title="Pitch Video - Colheita Certa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '1rem'
                }}
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center">Tudo que você precisa em uma única plataforma</h2>
          <p className="text-center" style={{ marginBottom: '4rem' }}>
            Criada especialmente para agricultores familiares, criadores, pescadores e produtores de pequena escala
          </p>
          <Grid cols={3} className="stack-mobile">
            {cardsValor.map((card, index) => (
              <div className="value-card text-center animate-scale-in" key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`icon-badge ${card.colorClass}`}>
                  <i className={`bi ${card.icon}`} style={{ fontSize: '2.25rem' }}></i>
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="section-dark">
        <Container>
          <h2 className="text-center" style={{ marginBottom: '3rem', color: 'white' }}>Nosso Impacto</h2>
          <Grid cols={4} className="stack-mobile">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 style={{ fontSize: '3rem', color: 'white', marginBottom: '0.5rem', opacity: 0.95 }}>
                  {stat.value}
                </h3>
                <p style={{ color: 'white', opacity: 0.85 }}>{stat.label}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <Grid cols={2} gap="large" className="stack-mobile">
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Seu Mercado Digital</h2>
              <p style={{ marginBottom: '2rem', fontSize: 'var(--text-lg)' }}>
                Conecte-se com restaurantes, mercados, feiras e consumidores.
                Venda sem atravessadores e aumente seu lucro.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {mercadoFeatures.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <i className={`${feature.icon} bi`} style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link to={ROUTES.REGISTER} style={{ display: 'inline-block', marginTop: '2rem' }}>
                <Button variant="primary">Começar a Vender</Button>
              </Link>
            </div>
            <div className="feature-image">
              <img
                src="/home-marketplace-direto.jpg"
                alt="Mercado Digital - Conecte-se diretamente com compradores"
                style={{
                  width: '100%',
                  height: '24rem',
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section className="section-highlight">
        <Container>
          <Grid cols={2} gap="large" className="stack-mobile">
            <div className="feature-image">
              <img
                src="/home-suporte-tecnico.jpg"
                alt="Assistência Técnica Digital"
                style={{
                  width: '100%',
                  height: '24rem',
                  objectFit: 'cover',
                  borderRadius: '0.75rem',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Assistência Técnica no seu Celular</h2>
              <p style={{ marginBottom: '2rem', fontSize: 'var(--text-lg)' }}>
                Receba orientações para sua lavoura, criação ou pesca.
                Avisos importantes na hora certa.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {assistenciaFeatures.map((feature, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <i className={`${feature.icon} bi`} style={{ fontSize: '1.5rem', color: 'var(--color-success)' }}></i>
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
              <Link to={ROUTES.CONTACT} style={{ display: 'inline-block', marginTop: '2rem' }}>
                <Button variant="secondary">Falar com Especialista</Button>
              </Link>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center">Diagnóstico Rápido</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            Descubra quais ferramentas combinam mais com seu perfil
          </p>
          <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
            {!diagnosticoIniciado ? (
              <div className="text-center">
                <p style={{ marginBottom: '2rem' }}>
                  Responda 2 perguntas rápidas sobre sua produção e receba uma recomendação
                  personalizada das funcionalidades mais úteis para você.
                </p>
                <Button
                  variant="primary"
                  size="large"
                  onClick={() => setDiagnosticoIniciado(true)}
                  style={{ width: '100%' }}
                >
                  <i className="bi bi-play-circle" style={{ marginRight: '0.5rem' }}></i>
                  Começar Diagnóstico
                </Button>
              </div>
            ) : etapaAtual < perguntas.length ? (
              <div>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem' }}>
                  {perguntas.map((_, i) => (
                    <div
                      key={i}
                      style={{
                        flex: 1,
                        height: '4px',
                        backgroundColor: i <= etapaAtual ? 'var(--color-primary)' : 'var(--color-border)',
                        borderRadius: 'var(--radius-full)'
                      }}
                    />
                  ))}
                </div>
                <h3>{perguntas[etapaAtual].pergunta}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginTop: '2rem' }}>
                  {perguntas[etapaAtual].opcoes.map((opcao) => (
                    <button
                      key={opcao.valor}
                      style={{
                        padding: '1rem',
                        border: `2px solid ${respostas[perguntas[etapaAtual].id] === opcao.valor ? 'var(--color-primary)' : 'var(--color-border)'}`,
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: respostas[perguntas[etapaAtual].id] === opcao.valor ? 'var(--color-primary-light)' : 'transparent',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onClick={() => {
                        setRespostas({...respostas, [perguntas[etapaAtual].id]: opcao.valor});
                        if (etapaAtual < perguntas.length - 1) {
                          setTimeout(() => setEtapaAtual(etapaAtual + 1), 300);
                        } else {
                          setTimeout(() => setEtapaAtual(etapaAtual + 1), 300);
                        }
                      }}
                    >
                      <i className={`${opcao.icone} bi`} style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}></i>
                      {opcao.texto}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Badge variant="success" size="lg" style={{ marginBottom: '1rem' }}>Recomendação Pronta!</Badge>
                <h3>Baseado no seu perfil, recomendamos:</h3>
                <ul style={{ textAlign: 'left', marginTop: '2rem', marginBottom: '2rem', listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem' }}>
                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-success)', marginRight: '0.5rem' }}></i>
                    Sistema de gestão financeira simplificado
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-success)', marginRight: '0.5rem' }}></i>
                    Marketplace para venda direta
                  </li>
                  <li style={{ marginBottom: '1rem' }}>
                    <i className="bi bi-check-circle-fill" style={{ color: 'var(--color-success)', marginRight: '0.5rem' }}></i>
                    Alertas climáticos personalizados
                  </li>
                </ul>
                <Link to={ROUTES.REGISTER}>
                  <Button variant="primary" size="large" style={{ width: '100%' }}>
                    Criar Minha Conta Agora
                  </Button>
                </Link>
                <button
                  onClick={() => {
                    setDiagnosticoIniciado(false);
                    setEtapaAtual(0);
                    setRespostas({});
                  }}
                  style={{
                    marginTop: '1rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--color-primary)',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Refazer diagnóstico
                </button>
              </div>
            )}
          </Card>
        </Container>
      </Section>

      <Section className="text-center section-dark">
        <Container>
          <h2 style={{ color: 'white' }}>Pronto para transformar sua produção?</h2>
          <p style={{ marginBottom: '2rem', color: 'white', opacity: 0.9 }}>
            Junte-se a centenas de produtores que já estão aumentando sua renda
          </p>
          <Link to={ROUTES.REGISTER}>
            <Button variant="primary" size="large" icon="arrow-right" iconPosition="right">
              Começar Agora - É Grátis
            </Button>
          </Link>
        </Container>
      </Section>
    </PageLayout>
  );
}

export default Inicio;