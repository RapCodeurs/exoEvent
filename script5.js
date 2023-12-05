let btnsumit = document.querySelector('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let teste = document.getElementById('error');

var mot = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/


email.addEventListener('input', (event) => {
    if(!mot.test(event.target.value)) {
        teste.innerText = 'Email validé !'
    } else {
        teste.innerText = '';
    }
})


password.addEventListener('input', (event) => {
    if(event.target.value.length < 8) {
        teste.innerText = 'Mot de passe correct'
    } else {
        teste.innerText = 'Mot de passe incorrect'
    }
})

btnsumit.addEventListener('submit', (event) => {
    if(teste.innerText !== '') {

        setTimeout((e) => {
            event.preventDefault();
        }, 2000)
    }
})
