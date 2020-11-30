'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    if (!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!'
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});


// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20; // przypisanie wartości tekstowej do elementu 

// document.querySelector('.guess').value = 23; // przypisanie wartości do danego elementu
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function() {
//     console.log(document.querySelector('.guess').value);
//     // po clicku pobranie wartości z elementu z klasą .quess i wypisanie jej w konsoli
//     document.querySelector('.message').textContent = 'Correct Number!!!'
// })
 