// Formulário de contato - validação e aviso
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Valida se todos os campos obrigatórios estão preenchidos
  const nome = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('phone').value.trim();
  const mensagem = document.getElementById('message').value.trim();
  
  if (!nome || !email || !telefone || !mensagem) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  // Aviso de funcionalidade não implementada
  alert('Funcionalidade de envio ainda não implementada.\n\nEste é um protótipo da Fase 3 - FIAP.\nEm breve, seu contato será processado e você receberá uma resposta.');
  
  // Limpa o formulário após o aviso
  this.reset();
});
