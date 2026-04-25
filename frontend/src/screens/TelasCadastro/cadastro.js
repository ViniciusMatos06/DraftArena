document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, verifique.");
        return;
    }

    console.log("Cadastro - Passo 1 concluído:", { email });
    alert("Dados validados! Indo para a próxima etapa...");
    
    // Aqui você poderia redirecionar para a próxima página de cadastro:
    window.location.href = './TelasInserirDadosPessoais/dadosPessoais.html';
});