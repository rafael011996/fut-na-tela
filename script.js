// Função para exibir a caixa de boas-vindas quando a página carrega
window.onload = function() {
    document.getElementById('welcomeMessage').style.display = 'block';
};

// Função para fechar a caixa de boas-vindas
function closeMessage() {
    document.getElementById('welcomeMessage').style.display = 'none';
}

// Função para exibir o vídeo no player
function playVideo(videoUrl) {
    // Oculta a imagem de capa
    document.getElementById("playerCover").style.display = "none";
    
    // Exibe o iframe do player
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.style.display = "block";
    videoPlayer.src = videoUrl; // Aqui o vídeo será carregado dentro do iframe
}// Função para exibir a caixa de boas-vindas quando a página carrega
window.onload = function() {
    document.getElementById('welcomeMessage').style.display = 'block';
};

// Função para fechar a caixa de boas-vindas
function closeMessage() {
    document.getElementById('welcomeMessage').style.display = 'none';
}

// Função para exibir o vídeo no player
function playVideo(videoUrl) {
    // Oculta a imagem de capa
    document.getElementById("playerCover").style.display = "none";
    
    // Exibe o iframe do player
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.style.display = "block";
    videoPlayer.src = videoUrl; // Aqui o vídeo será carregado dentro do iframe
}
