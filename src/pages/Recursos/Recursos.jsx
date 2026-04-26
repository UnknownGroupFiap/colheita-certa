import { Link } from 'react-router-dom';
import { PageLayout, Section, Grid, Container, Button, Card, Badge } from '@components';
import { ROUTES } from '@utils/constants';

function Recursos() {
  const ferramentasPrincipais = [
    {
      icon: 'bi-cloud-sun',
      title: 'Orientação técnica gratuita',
      description: 'Dicas personalizadas para o seu tipo de plantação, cultura ou criação',
      features: [
        { icon: 'bi-calendar-check', text: 'Calendário com as épocas certas de plantio e colheita' },
        { icon: 'bi-cloud-lightning', text: 'Avisos de clima (geada, seca), pragas e outros riscos' },
        { icon: 'bi-play-circle', text: 'Notificações em linguagem simples, ícones e vídeos' }
      ]
    },
    {
      icon: 'bi-shop',
      title: 'Mercado Digital Direto',
      description: 'Anuncie sua produção para restaurantes, mercados e consumidores',
      features: [
        { icon: 'bi-megaphone', text: 'Publicação de ofertas para restaurantes, mercados e consumidores' },
        { icon: 'bi-building', text: 'Acesso fácil a programas do governo (PAA e PNAE)' },
        { icon: 'bi-people', text: 'Organize vendas em grupo e facilite a entrega' }
      ]
    },
    {
      icon: 'bi-calculator',
      title: 'Controle Financeiro',
      description: 'Saiba exatamente quanto gasta, quanto lucra e onde pode melhorar',
      features: [
        { icon: 'bi-journal-text', text: 'Registro de produção, perdas, gastos e preços' },
        { icon: 'bi-graph-up', text: 'Relatórios fáceis de entender sobre sua produção e lucro' },
        { icon: 'bi-lightbulb', text: 'Dicas automáticas para ajudar você a melhorar' }
      ]
    },
    {
      icon: 'bi-chat-dots',
      title: 'Rede de Apoio',
      description: 'Conecte-se com outros produtores e especialistas para trocar experiências',
      features: [
        { icon: 'bi-chat-square-text', text: 'Grupos de conversa para trocar experiências' },
        { icon: 'bi-person-badge', text: 'Acesso a técnicos, veterinários e agrônomos' },
        { icon: 'bi-star', text: 'Divulgação de novidades e técnicas de baixo custo' }
      ]
    }
  ];

  const outrasFerramentas = [
    {
      icon: 'bi-geo',
      title: 'Acesso à Terra',
      description: 'Caminhos para ajudar na regularização de posse e uso da terra'
    },
    {
      icon: 'bi-piggy-bank',
      title: 'Serviços Financeiros',
      description: 'Acesso a microcrédito e simulação de financiamentos'
    },
    {
      icon: 'bi-box-seam',
      title: 'Agregação de Valor',
      description: 'Passo a passo para processar seus produtos e vender melhor'
    }
  ];

  const resultadosEsperados = [
    {
      icon: 'bi-arrow-up-circle',
      title: 'Maior Produtividade',
      description: 'Aumento da produção por hectare e por trabalhador.'
    },
    {
      icon: 'bi-currency-dollar',
      title: 'Mais Renda',
      description: 'Redução de perdas e melhor preço na comercialização.'
    },
    {
      icon: 'bi-arrow-left-right',
      title: 'Menos Atravessadores',
      description: 'Acesso direto a mercados e compradores.'
    },
    {
      icon: 'bi-tree',
      title: 'Sustentabilidade',
      description: 'Um jeito de produzir mais resistente ao clima e que cuida da terra'
    }
  ];

  const heroContent = (
    <>
      <h1 className="hero-title">
        Recursos
      </h1>
      <p className="hero-subtitle">
        Tudo que você precisa para controlar sua produção e vender melhor, em um único aplicativo
      </p>
    </>
  );

  return (
    <PageLayout hero={heroContent} fullWidth>
      <Section>
        <Container>
          <h2 className="text-center">As principais ferramentas da plataforma</h2>
          <p className="text-center" style={{ marginBottom: '4rem' }}>
            Criado pensando em quem trabalha no campo
          </p>

          <Grid cols={2} gap="large" className="stack-mobile">
            {ferramentasPrincipais.map((ferramenta, index) => (
              <Card key={index} style={{
                padding: '2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--color-background)',
                border: '2px solid var(--color-border)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  background: 'linear-gradient(90deg, var(--green-500), var(--green-400))'
                }}></div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div className="icon-badge icon-badge-green" style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      flexShrink: 0
                    }}>
                      <i className={`bi ${ferramenta.icon}`} style={{ fontSize: '1.75rem' }}></i>
                    </div>
                    <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 0, color: 'var(--color-text)' }}>
                      {ferramenta.title}
                    </h3>
                  </div>
                  <p style={{
                    fontSize: 'var(--text-base)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: '1.6'
                  }}>
                    {ferramenta.description}
                  </p>
                </div>

                <div style={{
                  flex: 1,
                  background: 'var(--color-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.25rem',
                  border: '1px solid var(--color-border)'
                }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {ferramenta.features.map((feature, i) => (
                      <li key={i} style={{
                        marginBottom: i < ferramenta.features.length - 1 ? '0.875rem' : 0,
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem'
                      }}>
                        <i className={`bi ${feature.icon}`} style={{
                          color: 'var(--color-primary)',
                          fontSize: '1.125rem',
                          flexShrink: 0,
                          marginTop: '0.125rem'
                        }}></i>
                        <span style={{ fontSize: 'var(--text-sm)', lineHeight: '1.5' }}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="section-highlight">
        <Container>
          <h2 className="text-center">Tudo que você precisa em um só lugar</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            Ferramentas práticas para produzir melhor e vender direto, sem complicação
          </p>

          <Grid cols={2} gap="large" className="stack-mobile">
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="animate-fade-in">
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <i className="bi bi-bell" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}></i>
                    <div>
                      <h4>Orientação no momento certo</h4>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        Avisos e dicas na hora que você mais precisa
                      </p>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <i className="bi bi-cart3" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}></i>
                    <div>
                      <h4>Venda sem atravessador</h4>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        Conecte-se direto com quem quer comprar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <i className="bi bi-bar-chart" style={{ fontSize: '2rem', color: 'var(--color-primary)' }}></i>
                    <div>
                      <h4>Controle simples</h4>
                      <p style={{ color: 'var(--color-text-secondary)' }}>
                        Acompanhe seus gastos e ganhos de forma fácil
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-image">
              <img
                src="/recursos-gestao-rural.jpg"
                alt="Gestão rural completa"
                style={{
                  width: '100%',
                  height: '24rem',
                  objectFit: 'cover',
                  borderRadius: '0.75rem'
                }}
              />
            </div>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center">Outras ferramentas</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            Recursos complementares para potencializar seus resultados
          </p>
          <Grid cols={3} className="stack-mobile">
            {outrasFerramentas.map((ferramenta, index) => (
              <div key={index} className="value-card text-center animate-scale-in" style={{
                animationDelay: `${index * 100}ms`,
                background: 'var(--color-background)',
                border: '1px solid var(--color-border)',
                padding: '2rem',
                borderRadius: 'var(--radius-xl)'
              }}>
                <div className="icon-badge" style={{
                  background: 'linear-gradient(135deg, var(--green-500), var(--green-600))',
                  marginBottom: '1.5rem'
                }}>
                  <i className={`bi ${ferramenta.icon}`} style={{ fontSize: '2rem', color: 'white' }}></i>
                </div>
                <h3 style={{ marginBottom: '1rem', color: 'var(--color-text)' }}>{ferramenta.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)' }}>{ferramenta.description}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="section-dark">
        <Container>
          <h2 className="text-center" style={{ color: 'white', marginBottom: '3rem' }}>
            Resultados Esperados
          </h2>
          <Grid cols={4} className="stack-mobile">
            {resultadosEsperados.map((resultado, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="icon-badge" style={{ background: 'rgba(255, 255, 255, 0.1)', marginBottom: '1rem' }}>
                  <i className={`bi ${resultado.icon}`} style={{ fontSize: '2rem', color: 'white' }}></i>
                </div>
                <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>{resultado.title}</h4>
                <p style={{ color: 'white', opacity: 0.9, fontSize: 'var(--text-sm)' }}>{resultado.description}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="text-center">
        <Container>
          <Card style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto', background: 'linear-gradient(135deg, var(--green-50), white)' }}>
            <h2 style={{ marginBottom: '1rem' }}>Pronto para transformar sua produção?</h2>
            <p style={{ marginBottom: '2rem', fontSize: 'var(--text-lg)', color: 'var(--color-text-secondary)' }}>
              Junte-se aos produtores que já estão aumentando a renda com o Colheita Certa
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to={ROUTES.CADASTRO}>
                <Button variant="primary" size="large">
                  Cadastre-se Grátis
                </Button>
              </Link>
              <Link to={ROUTES.CONTACT}>
                <Button variant="secondary" size="large">
                  Conheça a Solução
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
    </PageLayout>
  );
}

export default Recursos;