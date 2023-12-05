let identifiant = document.getElementById('identifiant');
let password = document.getElementById('password');
//let emails = document.getElementsByName('email', 'email-confirm');
let email = document.getElementById('email');
let emailConfirm = document.getElementById('email-confirm');
let age = document.getElementById('age');
let annee = document.getElementById('annee');
let form = document.querySelector('form');
let error = '';


function validationIdantification(value) {
    if(value === '') {
        return 'L\'identifiant n\'est pas valide';
    }

    return '';
}

function validationPassword(pass) {
    if(pass.length < 6) {
        return 'Veuillez entrer un mot de passe valide';
    }

    return '';
}

/*for (let email = 0; email < emails.length; email++) {
    if(email !== emails[email]) {
        return 'Les 2 emails doivent etre identiques';
    }

    return '';
}*/

function emailIdentique (email, emailConfirm) {
    if(email !== emailConfirm) {
        return 'Les emails doivent etre identiques';
    }

    return '';
}


form.addEventListener('submit', (event) => {
    error = '';
    error += emailIdentique(email.value, emailConfirm.value)
    for(let count = 0; count<form.length; count++) {
        if(form.elements[count].name === 'identifiant') {
            error += validationIdantification(form.elements[count].value)
        } else if (form.elements[count].name === 'password'){
            error += validationPassword(form.elements[count].value)
        }
    }
    
    if(error !== '') {
        alert(error)
        event.preventDefault()
    }
})


