import { Link } from 'react-router-dom';
import { PageLayout, Section, Container, Button, Card } from '@components';
import { ROUTES } from '@utils/constants';

function EmDesenvolvimento() {
  return (
    <PageLayout>
      <Section centered className="animate-fade-in" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container size="small">
          <Card className="text-center" style={{ padding: '4rem 2rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
            <div className="icon-badge icon-badge-blue" style={{
              width: '6rem',
              height: '6rem',
              margin: '0 auto 2rem',
              fontSize: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: 'spin 3s linear infinite'
            }}>
              <i className="bi bi-gear-fill"></i>
            </div>

            <h1 style={{
              fontSize: 'var(--text-3xl)',
              marginBottom: '1rem',
              fontWeight: '700',
              color: 'var(--color-text)'
            }}>
              Em Desenvolvimento
            </h1>

            <p style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              marginBottom: '3rem',
              maxWidth: '400px',
              margin: '0 auto 3rem'
            }}>
              Estamos preparando algo incrível para você! Em breve esta funcionalidade estará disponível.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '3rem' }}>
              <Link to={ROUTES.HOME}>
                <Button variant="primary" size="large" icon="house-door">
                  Voltar ao Início
                </Button>
              </Link>
              <Link to={ROUTES.CONTACT}>
                <Button variant="secondary" size="large" icon="headset">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </Section>
    </PageLayout>
  );
}

export default EmDesenvolvimento;