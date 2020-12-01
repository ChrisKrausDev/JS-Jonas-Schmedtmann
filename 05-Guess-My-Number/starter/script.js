'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

// Again btn event!  
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.guess').value = "";
})

// When there is no input
    if (!guess) {
        displayMessage('No number!');

// Whe player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
// When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!' : 'To low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('You loose the game!');
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
 