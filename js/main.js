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

