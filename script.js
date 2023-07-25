'use strict';
/*
console.log(document.querySelector('.message').textContent);.querySelector('.message').textContent = 'Correct Number
!';document
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
*/

const number = Math.trunc(Math.random() * 20 + 1);
let score = 5;
document.querySelector('.number').textContent = number;

const y = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '🥳 Correct number!';
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high';
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ☹️';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < number) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low';
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else {
      document.querySelector('.message').textContent = 'You lost the game ☹️';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', y);
