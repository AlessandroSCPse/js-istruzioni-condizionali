// Chiedere all'utente se vuole pari o dispari e 
// un numero intero compreso tra 1 e 9. Generare un
// numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
// Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.

// Cosa ci serve: 
// chiedere all'utente: se vuole pari o dispari, scegliere un numero tra 1 e 9.
const userEvenOrOdd = prompt('Scegli pari o dispari');
console.log(userEvenOrOdd);

const userNumber = parseInt(prompt('Dammi un numero tra 1 e 9'));
console.log(userNumber);

// generare un numero casuale per il computer compreso tra 1 e 9
const computerNumber = Math.floor(Math.random() * 9) + 1;
console.log(computerNumber);

// sommare i 2 numeri
const sum = userNumber + computerNumber;
console.log(sum);

// stabilire se il numero è pari o dispari
let gameResult;
if(sum % 2 === 0) {
    gameResult = 'pari';
} else {
    gameResult = 'dispari';
}
console.log(gameResult);

// confrontiamo la scelta dell'utente pari e dispari
let userMessage;
if(userEvenOrOdd === gameResult) {
    userMessage = 'Hai vinto';
    // alert('Hai vinto');
} else {
    userMessage = 'Hai perso';
    // alert('Hai perso');
}

// comunichiamo se ha vinto o ha perso
alert(userMessage);