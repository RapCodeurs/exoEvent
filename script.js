const button = document.getElementById('button');
const section = document.getElementById('super-parent');
const parent = document.getElementById('parent');
const enfant = document.getElementById('enfant');

function clicked() {
    alert('Vous avez cliqué sur le bouton de connexion.')
}

function setcolorGreen() {
    button.style.background = 'green'
}

function setcolorRed() {
    button.style.background = 'red'
}


function affiche() {
    alert('Vous avez cliquez sur la section')
}

function affiche2(e) {
    e.stopPropagation();
    alert('Vous avez cliquez sur le parent')
}

function affiche3() {
    //e.stopPropagation();
    alert('Vous avez cliquez sur l\'enfant')
}


button.addEventListener('click', clicked);
button.addEventListener('mouseenter', setcolorRed);
button.addEventListener('mouseleave', setcolorGreen);

section.addEventListener('click', affiche)
parent.addEventListener('click', affiche2, true)
enfant.addEventListener('click', affiche3, true)

