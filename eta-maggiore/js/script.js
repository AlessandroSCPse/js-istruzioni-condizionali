// chiedere all'utente con due 
// prompt gli anni di due persone e comunicare quale delle due è più grande

// Chiediamo all'utente gli anni di 2 persone (2 prompt)
// Se il primo è più grande del secondo scrivo "Il primo è più grande"
// Se il secondo è più grande del primo scrivo "Il secondo è più grande"
// Altrimenti sono uguali

const firstAge = parseInt(prompt('Dammi la prima età'));
console.log(firstAge);

const secondAge = parseInt(prompt('Dimmi la seconda età'));
console.log(secondAge);

let userMessage;
if(firstAge > secondAge) {
    userMessage = 'La prima età è maggiore';
    // alert('La prima età è maggiore');
} else if(secondAge > firstAge) {
    userMessage = 'La seconda età è maggiore';
    // alert('La seconda età è maggiore');
} else {
    userMessage = 'Le età sono uguali';
    // alert('Le età sono uguali');
}

console.log(userMessage);
document.getElementById('user-message').innerHTML = userMessage;
