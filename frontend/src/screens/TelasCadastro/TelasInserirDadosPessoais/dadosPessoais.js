document.getElementById('personalDataForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const dados = {
        nome: document.getElementById('nome').value,
        sobrenome: document.getElementById('sobrenome').value,
        apelido: document.getElementById('apelido').value || "Não informado"
    };

    console.log("Dados coletados:", dados);
    alert("Dados salvos com sucesso!");
    
    // Prossiga para a próxima tela aqui
    window.location.href = '../TelasInserirFoto/inserirFoto.html';
});