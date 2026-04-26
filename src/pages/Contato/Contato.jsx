import { useState } from 'react';
import { PageLayout, Section, Grid, Container, Button, Card, Badge } from '@components';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [enviando, setEnviando] = useState(false);
  const [mensagemEnviada, setMensagemEnviada] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validarNomeCompleto = (nome) => {
    const palavras = nome.trim().split(/\s+/);
    return palavras.length >= 2 && palavras.every(palavra => palavra.length >= 2);
  };

  const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarNomeCompleto(formData.nome)) {
      alert('Por favor, digite seu nome completo (nome e sobrenome)');
      return;
    }

    if (!validarEmail(formData.email)) {
      alert('Por favor, digite um email válido');
      return;
    }

    setEnviando(true);

    setTimeout(() => {
      console.log('Contato:', formData);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
      });
      setEnviando(false);
      setMensagemEnviada(true);
      setTimeout(() => setMensagemEnviada(false), 5000);
    }, 1500);
  };

  const canaisContato = [
    {
      icon: 'bi-envelope',
      title: 'Email',
      lines: ['contato@colheitacerta.com.br', 'suporte@colheitacerta.com.br']
    },
    {
      icon: 'bi-telephone',
      title: 'Telefone',
      lines: ['(11) 3000-0000', 'WhatsApp: (11) 99999-9999']
    },
    {
      icon: 'bi-geo-alt',
      title: 'Localização',
      lines: ['São Paulo, SP', 'Brasil']
    },
    {
      icon: 'bi-clock',
      title: 'Horário de Atendimento',
      lines: ['Segunda a Sexta: 8h às 18h', 'Sábado: 8h às 12h']
    }
  ];

  const faqItems = [
    {
      question: 'Como faço para criar uma conta?',
      answer: 'Você pode criar sua conta grátis clicando em "Cadastre-se" aqui no site. O processo é simples e leva só alguns minutos'
    },
    {
      question: 'A plataforma é gratuita?',
      answer: 'Sim! O Colheita Certa oferece um plano gratuito com as ferramentas essenciais para o pequeno produtor. Também temos planos pagos com ferramentas mais avançadas'
    },
    {
      question: 'Como funciona o marketplace?',
      answer: 'No nosso Mercado Digital, você pode anunciar seus produtos e se conectar direto com compradores, eliminando atravessadores e aumentando seu lucro'
    },
    {
      question: 'Preciso de internet para usar?',
      answer: 'Algumas ferramentas funcionam até sem internet, mas para acessar o Mercado Digital e receber avisos na hora, você precisará de uma conexão'
    },
    {
      question: 'Vocês oferecem treinamento?',
      answer: 'Sim! Oferecemos vídeos curtos, guias com passo a passo e suporte da nossa equipe para ajudar você a usar todas as ferramentas'
    },
    {
      question: 'Como posso vender para programas governamentais?',
      answer: 'A plataforma dá acesso fácil a programas como o PAA e PNAE, simplificando o cadastro e a venda para o governo'
    }
  ];

  const heroContent = (
    <>
      <h1 className="hero-title">
        Fale Conosco
      </h1>
      <p className="hero-subtitle">
        Tem alguma dúvida ou quer saber mais? Mande uma mensagem para nossa equipe. Estamos aqui para ajudar
      </p>
    </>
  );

  return (
    <PageLayout hero={heroContent} fullWidth>
      <Section className="section-highlight">
        <Container>
          <Grid cols={2} gap="large" className="stack-mobile">
            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Nossos Canais</h2>
              <p style={{ marginBottom: '2rem', color: 'var(--color-text-secondary)' }}>
                Tire suas dúvidas ou envie sugestões pelos canais abaixo
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem' }}>
                {canaisContato.map((canal, index) => (
                  <div key={index} style={{
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    background: 'var(--color-background)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-lg)'
                  }}>
                    <div className="icon-badge icon-badge-green" style={{
                      width: '2rem',
                      height: '2rem',
                      flexShrink: 0,
                      minWidth: '2rem'
                    }}>
                      <i className={`bi ${canal.icon}`} style={{ fontSize: '0.875rem' }}></i>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h5 style={{ marginBottom: '0.25rem', fontSize: 'var(--text-sm)', fontWeight: '600' }}>{canal.title}</h5>
                      {canal.lines.map((line, i) => (
                        <p key={i} style={{
                          marginBottom: 0,
                          fontSize: 'var(--text-xs)',
                          color: 'var(--color-text-secondary)',
                          lineHeight: '1.4'
                        }}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: '1rem',
                padding: '0.875rem',
                background: 'var(--blue-50)',
                border: '1px solid var(--blue-200)',
                borderRadius: 'var(--radius-lg)'
              }}>
                <p style={{ fontSize: 'var(--text-xs)', margin: 0, display: 'flex', alignItems: 'center' }}>
                  <i className="bi bi-clock-fill" style={{ marginRight: '0.5rem', color: 'var(--color-primary)', fontSize: '0.875rem' }}></i>
                  <span>
                    <strong>Resposta rápida:</strong> até 24h úteis • Para urgências, use o WhatsApp
                  </span>
                </p>
              </div>
            </div>

            <Card style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '2rem' }}>Envie uma mensagem</h3>

              {mensagemEnviada && (
                <div style={{
                  padding: '1rem',
                  background: 'var(--green-100)',
                  borderRadius: 'var(--radius-lg)',
                  marginBottom: '1.5rem',
                  border: '1px solid var(--green-300)'
                }}>
                  <p style={{ color: 'var(--green-800)', margin: 0 }}>
                    <i className="bi bi-check-circle-fill" style={{ marginRight: '0.5rem' }}></i>
                    Mensagem enviada com sucesso! Entraremos em contato em breve.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="nome" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    className="input"
                    placeholder="João da Silva"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-base)'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-base)'
                    }}
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
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-base)'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="assunto" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Assunto *
                  </label>
                  <select
                    id="assunto"
                    name="assunto"
                    className="input"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-base)',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="">Selecione...</option>
                    <option value="duvidas">Dúvidas sobre a plataforma</option>
                    <option value="suporte">Suporte técnico</option>
                    <option value="parceria">Proposta de parceria</option>
                    <option value="opiniao">Opinião ou sugestão</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mensagem" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
                    Mensagem *
                    <span style={{ fontSize: 'var(--text-sm)', fontWeight: 'normal', marginLeft: '0.5rem', color: 'var(--color-text-muted)' }}>
                      ({formData.mensagem.length}/500 caracteres)
                    </span>
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    className="textarea"
                    placeholder="Escreva sua mensagem..."
                    rows="5"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      fontSize: 'var(--text-base)',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="large"
                  style={{ width: '100%' }}
                  disabled={enviando}
                >
                  {enviando ? 'Enviando...' : (
                    <>
                      <i className="bi bi-send" style={{ marginRight: '0.5rem' }}></i>
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </Grid>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center">Dúvidas frequentes</h2>
          <p className="text-center" style={{ marginBottom: '4rem' }}>
            Perguntas que recebemos com mais frequência
          </p>

          <Grid cols={2} gap="large" className="stack-mobile">
            {faqItems.map((item, index) => (
              <Card key={index} className="animate-fade-in" style={{ padding: '2rem', animationDelay: `${index * 50}ms` }}>
                <h4 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>
                  <i className="bi bi-question-circle" style={{ marginRight: '0.75rem' }}></i>
                  {item.question}
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>{item.answer}</p>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      <Section className="section-highlight">
        <Container>
          <h2 className="text-center" style={{ marginBottom: '3rem' }}>Nossa Localização</h2>
          <Card style={{ padding: '2rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
              <i className="bi bi-geo-alt-fill" style={{ marginRight: '0.5rem', color: 'var(--color-primary)' }}></i>
              Avenida Paulista, São Paulo - SP, Brasil
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975667357866!2d-46.65580742375899!3d-23.561349661530866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Card>
        </Container>
      </Section>

      <Section className="text-center section-dark">
        <Container>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ainda tem dúvidas?</h2>
          <p style={{ marginBottom: '2rem', color: 'white', opacity: 0.9 }}>
            Estamos sempre disponíveis para ajudar você a dar o próximo passo
          </p>
          <Button variant="primary" size="large">
            <i className="bi bi-whatsapp" style={{ marginRight: '0.5rem' }}></i>
            Falar no WhatsApp
          </Button>
        </Container>
      </Section>
    </PageLayout>
  );
}

export default Contato;