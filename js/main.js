//Seleciona os elementos do DOM
const menuIcon = document.querySelector('.menu-icon');
const ul = document.querySelector('.ul');
const menuImage = document.querySelector('.menu-icon img')

//Define caminhos das img
const menuOpenIcon = './img/menu.png';
const menuCloseIcon = './img/close.png';

// Adiciona o evento de click
menuIcon.addEventListener('click',()=>{
   
    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        menuImage.src = menuOpenIcon;
    }else{
        ul.classList.add('ativo');
        menuImage.src = menuCloseIcon;
    }
});

// Exibir alerta ao enviar o formulário
document.getElementById("formDepoimento").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert("Seu depoimento foi enviado com sucesso! Obrigado por compartilhar sua experiência.");
    this.reset(); // Limpa os campos após o envio
});

// Animação ao passar o mouse sobre os cards de vídeo
document.querySelectorAll(".video-card").forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease";
    });
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });
});


