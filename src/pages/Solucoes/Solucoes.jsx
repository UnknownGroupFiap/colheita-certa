import { Link } from 'react-router-dom';
import { PageLayout, Section, Grid, Container, Button, Card, Badge } from '@components';
import { ROUTES } from '@utils/constants';

function Solucoes() {
  const desafios = [
    {
      icon: 'bi-cash-coin',
      title: 'Preços baixos',
      problema: 'Atravessadores ficam com grande parte do lucro, deixando pouco para quem produz',
      solucao: 'um mercado digital que conecta você direto aos compradores'
    },
    {
      icon: 'bi-exclamation-triangle',
      title: 'Perdas na produção',
      problema: 'Sem orientação técnica adequada, muita produção se perde por pragas, clima ou colheita no momento errado',
      solucao: 'alertas do clima e um calendário agrícola para a sua produção'
    },
    {
      icon: 'bi-door-closed',
      title: 'Acesso limitado a mercados',
      problema: 'Difícil chegar em mercados maiores, feiras regionais e programas governamentais de compra',
      solucao: 'acesso fácil ao PAA, PNAE e a uma rede de compradores cadastrados'
    },
    {
      icon: 'bi-clipboard-x',
      title: 'Falta de controle financeiro',
      problema: 'Difícil saber exatamente quanto custa produzir, quanto está lucrando e onde pode melhorar',
      solucao: 'ferramentas fáceis para controlar seus gastos e ganhos'
    }
  ];

  const pilaresMissao = [
    {
      icon: 'bi-people',
      title: 'Foco no Produtor',
      description: 'Cada ferramenta é pensada para resolver seus problemas reais do dia a dia'
    },
    {
      icon: 'bi-phone',
      title: 'Tecnologia Simples',
      description: 'Fácil de usar, funciona até sem internet e não precisa saber de tecnologia'
    },
    {
      icon: 'bi-heart',
      title: 'Impacto Social',
      description: 'Ajudando a garantir o alimento na mesa e o desenvolvimento do campo'
    }
  ];

  const heroContent = (
    <>
      <h1 className="hero-title">
        Soluções feitas para o produtor rural
      </h1>
      <p className="hero-subtitle">
        Criamos soluções pensadas para os desafios reais que o pequeno produtor brasileiro enfrenta todos os dias
      </p>
    </>
  );

  return (
    <PageLayout hero={heroContent} fullWidth>
      <Section>
        <Container>
          <h2 className="text-center">Por que a agricultura familiar importa</h2>
          <p className="text-center" style={{ marginBottom: '3rem' }}>
            Milhões de famílias produzem boa parte dos alimentos que chegam à sua mesa e sustentam a economia de pequenas cidades em todo o país
          </p>

          <Grid cols={2} gap="large" className="stack-mobile">
            <div className="feature-image">
              <img
                src="/solucoes-importancia.jpg"
                alt="Importância da agricultura familiar"
                style={{
                  width: '100%',
                  height: '24rem',
                  objectFit: 'cover',
                  borderRadius: '0.75rem'
                }}
              />
            </div>
            <div>
              <div className="stats-list" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="stat-item animate-fade-in">
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>84%</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    dos estabelecimentos rurais brasileiros são de agricultura familiar
                  </p>
                </div>
                <div className="stat-item animate-fade-in" style={{ animationDelay: '100ms' }}>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>70%</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    do feijão consumido no Brasil vem desses produtores
                  </p>
                </div>
                <div className="stat-item animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>90%</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>
                    dos municípios com até 20 mil habitantes dependem da agricultura familiar
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      <Section className="section-highlight">
        <Container>
          <h2 className="text-center">Principais desafios da agricultura familiar</h2>
          <p className="text-center" style={{ marginBottom: '4rem' }}>
            Problemas reais que afetam sua renda e sua produção no campo
          </p>

          <Grid cols={2} gap="large" className="stack-mobile">
            {desafios.map((desafio, index) => (
              <Card key={index} style={{
                padding: '2rem',
                background: 'var(--color-background)',
                border: '2px solid var(--color-border)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div className="icon-badge" style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    flexShrink: 0,
                    background: 'linear-gradient(135deg, #EF4444, #DC2626)',
                    boxShadow: '0 4px 6px -1px rgba(239, 68, 68, 0.3)'
                  }}>
                    <i className={`bi ${desafio.icon}`} style={{ fontSize: '1.75rem', color: 'white' }}></i>
                  </div>
                  <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 0, color: 'var(--color-text)' }}>{desafio.title}</h3>
                </div>

                <p style={{
                  color: 'var(--color-text-secondary)',
                  marginBottom: '2rem',
                  lineHeight: '1.7',
                  fontSize: 'var(--text-base)'
                }}>
                  {desafio.problema}
                </p>

                <div style={{
                  padding: '1.25rem',
                  background: 'var(--green-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--green-300)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'var(--color-success)'
                  }}></div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', paddingLeft: '0.5rem' }}>
                    <i className="bi bi-check-circle-fill" style={{
                      color: 'var(--color-success)',
                      fontSize: '1.5rem',
                      flexShrink: 0,
                      marginTop: '0.125rem'
                    }}></i>
                    <p style={{ margin: 0, color: 'var(--green-800)' }}>
                      <strong style={{ color: 'var(--green-900)' }}>Nossa solução:</strong> {desafio.solucao}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center">Nossa Missão</h2>
          <p className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem' }}>
            Dar ao pequeno produtor o poder da tecnologia acessível, para que possa prosperar,
            aumentar sua renda e contribuir para um sistema de alimentos mais justo e sustentável
          </p>

          <Grid cols={3} className="stack-mobile">
            {pilaresMissao.map((pilar, index) => (
              <div key={index} className="value-card text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="icon-badge icon-badge-green">
                  <i className={`bi ${pilar.icon}`} style={{ fontSize: '2rem' }}></i>
                </div>
                <h3>{pilar.title}</h3>
                <p>{pilar.description}</p>
              </div>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="section-highlight">
        <Container>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div className="icon-badge icon-badge-blue animate-scale-in" style={{
              width: '8rem',
              height: '8rem',
              margin: '0 auto 2.5rem',
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.4)'
            }}>
              <i className="bi bi-globe-americas" style={{ fontSize: '4rem', color: 'white' }}></i>
            </div>

            <h2 style={{ marginBottom: '2rem', fontSize: 'var(--text-3xl)', color: 'var(--color-text)' }}>
              Alinhamento com ODS 2
            </h2>

            <p style={{
              marginBottom: '1.5rem',
              fontSize: 'var(--text-lg)',
              lineHeight: '1.8',
              color: 'var(--color-text)'
            }}>
              O Colheita Certa está alinhado ao <strong>Objetivo de Desenvolvimento Sustentável 2</strong> da ONU
              (Fome Zero e Agricultura Sustentável), especialmente à <strong>Meta 2.3</strong>, que busca dobrar
              a produtividade e renda de pequenos produtores até 2030
            </p>

            <div style={{
              padding: '1.5rem',
              background: 'var(--color-surface)',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--color-border)',
              marginTop: '2rem'
            }}>
              <p style={{
                color: 'var(--color-text-secondary)',
                fontSize: 'var(--text-base)',
                margin: 0,
                lineHeight: '1.7'
              }}>
                <i className="bi bi-info-circle-fill" style={{ marginRight: '0.5rem', color: 'var(--color-info)' }}></i>
                Nossa plataforma contribui para essa meta oferecendo ferramentas práticas que
                aumentam a produção, reduzem perdas e facilitam o acesso a novos mercados
              </p>
            </div>
          </div>
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

export default Solucoes;