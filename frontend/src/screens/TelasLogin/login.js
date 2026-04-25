document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    if (!email || !pass) {
        alert("Preencha todos os campos para entrar.");
        return;
    }

    console.log("Login solicitado para:", email);
    // Lógica de autenticação aqui
});