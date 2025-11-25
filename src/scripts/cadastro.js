document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const phoneInput = document.getElementById('phone');
    
    // --- MÁSCARA DE TELEFONE EM TEMPO REAL ---
    // Reutiliza a mesma lógica de contato.js
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

        // --- VALIDAÇÃO 3: TELEFONE ---
        const phoneValor = phoneInput.value.trim();
        const phoneNumeros = phoneValor.replace(/\D/g, ''); 

        if (!phoneValor) {
            mostrarErro(phoneInput, 'O telefone é obrigatório.');
            temErro = true;
        } else if (phoneNumeros.length < 10) {
            mostrarErro(phoneInput, 'Telefone incompleto. Use (DD) XXXX-XXXX.');
            temErro = true;
        } else if (phoneNumeros.length > 11) {
            mostrarErro(phoneInput, 'Telefone com dígitos a mais.');
            temErro = true;
        }

        // --- VALIDAÇÃO 4: SENHA ---
        const passwordInput = document.getElementById('password');
        const passwordValor = passwordInput.value;
        
        if (!passwordValor) {
            mostrarErro(passwordInput, 'A senha é obrigatória.');
            temErro = true;
        } else if (passwordValor.length < 6) {
            mostrarErro(passwordInput, 'A senha deve ter no mínimo 6 caracteres.');
            temErro = true;
        }

        // --- VALIDAÇÃO 5: TERMOS DE USO ---
        const termsInput = document.getElementById('terms');
        
        if (!termsInput.checked) {
            mostrarErro(termsInput, 'Você precisa aceitar os termos de uso para continuar.');
            temErro = true;
        }

        // --- RESULTADO FINAL ---
        if (!temErro) {
            const successMessage = document.getElementById('successMessage');
            
            successMessage.style.display = 'flex';
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            console.log('Cadastro validado com sucesso!');
            console.log('Nome:', nomeValor);
            console.log('Email:', emailInput.value.trim());
            console.log('Telefone:', phoneValor);
            
            // Exibe o alert de sucesso
            alert('Cadastro criado com sucesso!');
            
            // Redireciona para a página inicial após 1 segundo
            setTimeout(() => {
                window.location.href = '../../index.html';
            }, 1000);
        }
    });
});

// --- FUNÇÕES AUXILIARES ---
// Reutiliza as mesmas funções de contato.js

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
