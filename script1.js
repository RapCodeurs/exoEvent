const inputs = document.getElementsByClassName('inputPinkOnFocus');
const checked = document.getElementById('check');


Array.from(inputs).forEach(input => {
    input.addEventListener('focus', (event) => {
        event.target.style.background = 'pink'; 
        event.target.style.color = 'blue';
    });

    input.addEventListener('blur', (event) => {
        event.target.style.background = '';
        event.target.style.color = '';
    });
});


checked.addEventListener('change', (event) => {
    alert(event.target.checked)
});

/*
Array.from(radio).forEach((element) => {
    element.addEventListener('change', (event) => {
        alert(`Votre choix est ${event.target.value}`)
    })
})*/

var btnradio = document.getElementsByName('gender')
let languageInfo = document.getElementById('language');

languageInfo.addEventListener('change', (event) => {
    alert(event.target.value = 'PHP');
    
})

for (var count=0; count<btnradio.length; count++) {
    btnradio[count].addEventListener('change', (event) => {
        alert(`Choix : ${event.target.value}`);
    });
}

