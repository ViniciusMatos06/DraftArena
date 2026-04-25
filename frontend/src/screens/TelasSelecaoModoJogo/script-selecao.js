function selectMode(mode) {
    console.log("Modo selecionado:", mode);
    
    if (mode === 'torneio') {
        // Ex: window.location.href = 'configurar-torneio.html';
        alert("Iniciando criação de torneio!");
    } else {
        // Ex: window.location.href = 'configurar-amistoso.html';
        alert("Iniciando jogo amistoso!");
    }
}