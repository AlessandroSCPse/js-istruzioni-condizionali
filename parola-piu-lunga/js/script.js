// Chiediamo all'utente due parole in successione.
// Andiamo poi a verificare quale delle due parole è più lunga e 
// stampiamo in console un messaggio appropriato.

// Chiediamo 2 parole all'utente
const firstWord = prompt('Dimmi la prima parola');

const secondWord = prompt('Dimmi la seconda parola');

// ricavarci la lunghezza delle parole
const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

// se la prima parola è più lunga scrivo "La prima parola è più lunga"
// altrimenti se la seconda parola è più lunga scrivo "La seconda parola è più lunga"
// altrimenti scrivo "Le parole sono uguali"

// MODO 1
let userMessage;

if (firstWordLength > secondWordLength) {
    userMessage = 'La prima parola è più lunga';
    // alert('La prima parola è più lunga');
} else if (secondWordLength > firstWordLength) {
    userMessage = 'La seconda parola è più lunga'
    // alert('La seconda parola è più lunga');
} else {
    userMessage = 'Le parole sono uguali';
    // alert('Le parole sono uguali');
}

// MODO 2
// let userMessage = 'Le parole sono uguali';

// if (firstWordLength > secondWordLength) {
//     userMessage = 'La prima parola è più lunga';
//     // alert('La prima parola è più lunga');
// } else if (secondWordLength > firstWordLength) {
//     userMessage = 'La seconda parola è più lunga'
//     // alert('La seconda parola è più lunga');
// }

// Output
alert(userMessage);