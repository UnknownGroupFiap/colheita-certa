function FaqSection() {
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Dúvidas frequentes</h2>
          <p className="section-subtitle">Perguntas que recebemos com mais frequência</p>
        </div>

        <div className="faq-grid">
          <div className="faq-item">
            <h3>Como faço para criar uma conta?</h3>
            <p>Você pode criar sua conta grátis clicando em "Cadastre-se" aqui no site. O processo é simples e leva só alguns minutos</p>
          </div>

          <div className="faq-item">
            <h3>A plataforma é gratuita?</h3>
            <p>Sim! O Colheita Certa oferece um plano gratuito com as ferramentas essenciais para o pequeno produtor. Também temos planos pagos com ferramentas mais avançadas</p>
          </div>

          <div className="faq-item">
            <h3>Como funciona o marketplace?</h3>
            <p>No nosso Mercado Digital, você pode anunciar seus produtos e se conectar direto com compradores, eliminando atravessadores e aumentando seu lucro</p>
          </div>

          <div className="faq-item">
            <h3>Preciso de internet para usar?</h3>
            <p>Algumas ferramentas funcionam até sem internet, mas para acessar o Mercado Digital e receber avisos na hora, você precisará de uma conexão</p>
          </div>

          <div className="faq-item">
            <h3>Vocês oferecem treinamento?</h3>
            <p>Sim! Oferecemos vídeos curtos, guias com passo a passo e suporte da nossa equipe para ajudar você a usar todas as ferramentas</p>
          </div>

          <div className="faq-item">
            <h3>Como posso vender para programas governamentais?</h3>
            <p>A plataforma dá acesso fácil a programas como o PAA e PNAE, simplificando o cadastro e a venda para o governo</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
