document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const messageInput = document.getElementById('message');
    const phoneInput = document.getElementById('phone');
    
    // --- BÔNUS DE USABILIDADE: CONTADOR DE CARACTERES ---
    // Cria o elemento visual do contador via JS para não poluir o HTML
    const counterDiv = document.createElement('div');
    counterDiv.className = 'char-counter';
    counterDiv.innerText = '0/500';
    messageInput.parentNode.appendChild(counterDiv);

    // Atualiza o contador enquanto o usuário digita
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        counterDiv.innerText = `${currentLength}/500`;
        
        if (currentLength >= 500) {
            counterDiv.classList.add('limit-reached');
        } else {
            counterDiv.classList.remove('limit-reached');
        }
    });

    // --- MÁSCARA DE TELEFONE EM TEMPO REAL (NOVA FUNCIONALIDADE) ---
    if (phoneInput) {
        phoneInput.addEventListener('input', phoneMask);
    }
    
    function phoneMask(event) {
        const target = event.target;
        // 1. Remove tudo que não for dígito
        let value = target.value.replace(/\D/g, ''); 
        let formattedValue = '';
        
        // 2. Aplica a máscara (DD) XXXX-XXXX ou (DD) XXXXX-XXXX
        
        // Se tiver mais de 10 dígitos (celular com 9), aplica (XX) XXXXX-XXXX
        if (value.length > 10) {
            formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 7)}-${value.substring(7, 11)}`;
        } 
        // Se tiver 10 dígitos (celular ou fixo antigo), aplica (XX) XXXX-XXXX
        else if (value.length > 6) {
            formattedValue = `(${value.substring(0, 2)}) ${value.substring(2, 6)}-${value.substring(6, 10)}`;
        } 
        // Se tiver apenas o DDD
        else if (value.length > 2) {
            formattedValue = `(${value.substring(0, 2)}) ${value.substring(2)}`;
        } 
        // Se tiver 2 dígitos (só o DD)
        else if (value.length > 0) {
            formattedValue = `(${value}`;
        }

        // Limita o tamanho máximo de caracteres
        if (formattedValue.length > 15) { // (11) 98765-4321 tem 15 caracteres
            formattedValue = formattedValue.substring(0, 15);
        }

        // Atualiza o valor do input, exceto se for a tecla backspace
        if (event.inputType !== 'deleteContentBackward') {
            target.value = formattedValue;
        }
    }
    // --- FIM DA MÁSCARA ---

    // --- LÓGICA DE VALIDAÇÃO AO ENVIAR ---
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio real para validar
        
        // 1. Limpa erros anteriores (reseta o estado visual)
        limparErros();
        
        let temErro = false;

        // --- VALIDAÇÃO 1: NOME COMPLETO ---
        const nomeInput = document.getElementById('name');
        const nomeValor = nomeInput.value.trim();
        const partesNome = nomeValor.split(/\s+/);
        
        if (!nomeValor) {
            mostrarErro(nomeInput, 'O campo nome é obrigatório.');
            temErro = true;
        } else if (partesNome.length < 2) {
            mostrarErro(nomeInput, 'Por favor, digite seu nome e sobrenome.');
            temErro = true;
        } else {
            const nomeValido = partesNome.every(parte => parte.length >= 2);
            if (!nomeValido) {
                mostrarErro(nomeInput, 'Nome e sobrenome devem ter no mínimo 2 letras cada.');
                temErro = true;
            }
        }

        // --- VALIDAÇÃO 2: E-MAIL ---
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailInput.value.trim()) {
            mostrarErro(emailInput, 'O e-mail é obrigatório.');
            temErro = true;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            mostrarErro(emailInput, 'Digite um e-mail válido (ex: seu@email.com).');
            temErro = true;
        }

        // --- VALIDAÇÃO 3: TELEFONE (VALIDAÇÃO FINAL) ---
        const phoneValor = phoneInput.value.trim();
        // Regex mais simples, pois a máscara já garante o formato.
        // Apenas verifica se tem 10 ou 11 dígitos numéricos limpos.
        const phoneNumeros = phoneValor.replace(/\D/g, ''); 

        if (phoneValor !== "") { 
            if (phoneNumeros.length < 10) {
                 mostrarErro(phoneInput, 'Telefone incompleto. Use (DD) XXXX-XXXX.');
                 temErro = true;
            } else if (phoneNumeros.length > 11) {
                 mostrarErro(phoneInput, 'Telefone com dígitos a mais.');
                 temErro = true;
            }
        }

        // --- VALIDAÇÃO 4: MENSAGEM ---
        const msgValor = messageInput.value.trim();
        
        if (!msgValor) {
            mostrarErro(messageInput, 'A mensagem não pode estar vazia.');
            temErro = true;
        } else if (msgValor.length > 500) {
            mostrarErro(messageInput, 'A mensagem excedeu o limite de 500 caracteres.');
            temErro = true;
        }

        // --- RESULTADO FINAL ---
        if (!temErro) {
            const successMessage = document.getElementById('successMessage');
            
            successMessage.style.display = 'flex';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Limpa o formulário e reseta o contador
            form.reset();
            counterDiv.innerText = '0/500'; 
            
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
            
            console.log('Formulário validado e "enviado" com sucesso!');
        }
    });
});

// --- FUNÇÕES AUXILIARES ---

function mostrarErro(input, mensagem) {
    input.classList.add('input-error');
    
    const erroSmall = document.createElement('small');
    erroSmall.className = 'error-message';
    erroSmall.innerHTML = '<i class="bi bi-exclamation-circle"></i> ' + mensagem;
    
    const formGroup = input.parentElement;
    formGroup.appendChild(erroSmall);

    console.log('Erro adicionado no campo:', input.id);
}

function limparErros() {
    const inputs = document.querySelectorAll('.input-error');
    inputs.forEach(el => el.classList.remove('input-error'));
    
    const mensagens = document.querySelectorAll('.error-message');
    mensagens.forEach(el => el.remove());
    
    document.getElementById('successMessage').style.display = 'none';
}