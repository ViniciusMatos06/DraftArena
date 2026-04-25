document.getElementById('photoUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById('imagePreview');
    const defaultAvatar = document.getElementById('defaultAvatar');

    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            defaultAvatar.style.display = 'none';
        }
        
        reader.readAsDataURL(file);
    }
});

document.getElementById('btnFinish').addEventListener('click', function() {
    alert("Cadastro concluído com sucesso!");
    // Redirecionar para Dashboard ou Home
    // window.location.href = 'home.html';
});